import type {
  BuildOnEventRemove,
  CompilerWatcher,
  DevServerConfig,
  Logger,
  StencilDevServerConfig,
  DevServer,
  CompilerBuildResults,
  InitServerProcess,
  DevServerMessage,
} from '../declarations';
import { initServerProcessWorkerProxy } from './server-worker-main';
import path from 'path';

export function start(stencilDevServerConfig: StencilDevServerConfig, logger: Logger, watcher?: CompilerWatcher) {
  return new Promise<DevServer>(async (resolve, reject) => {
    try {
      const devServerConfig: DevServerConfig = {
        devServerDir: __dirname,
        ...stencilDevServerConfig,
      };

      if (!path.isAbsolute(devServerConfig.root)) {
        devServerConfig.root = path.join(process.cwd(), devServerConfig.root);
      }

      let initServerProcess: InitServerProcess;

      if (stencilDevServerConfig.worker === true || stencilDevServerConfig.worker === undefined) {
        // fork a worker process
        initServerProcess = initServerProcessWorkerProxy;
      } else {
        // same process
        const devServerProcess = await import('@dev-server-process');
        initServerProcess = devServerProcess.initServerProcess;
      }

      startServer(devServerConfig, logger, watcher, initServerProcess, resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
}

function startServer(
  devServerConfig: DevServerConfig,
  logger: Logger,
  watcher: CompilerWatcher,
  initServerProcess: InitServerProcess,
  resolve: (devServer: DevServer) => void,
  reject: (err: any) => void,
) {
  const timespan = logger.createTimeSpan(`starting dev server`, true);

  const startupTimeout =
    logger.getLevel() !== 'debug'
      ? setTimeout(() => {
          reject(`dev server startup timeout`);
        }, 15000)
      : null;

  let isActivelyBuilding = false;
  let lastBuildResults: CompilerBuildResults = null;
  let devServer: DevServer = null;
  let removeWatcher: BuildOnEventRemove = null;
  let closeResolve: () => void = null;
  let hasStarted = false;
  let browserUrl = '';

  let sendToWorker: (msg: DevServerMessage) => void = null;

  const closePromise = new Promise<void>(resolve => (closeResolve = resolve));

  const close = async () => {
    clearTimeout(startupTimeout);
    isActivelyBuilding = false;

    if (removeWatcher) {
      removeWatcher();
    }
    if (devServer) {
      devServer = null;
    }
    if (sendToWorker) {
      sendToWorker({
        closeServer: true,
      });
      sendToWorker = null;
    }
    return closePromise;
  };

  const emit = async (eventName: any, data: any) => {
    if (sendToWorker) {
      if (eventName === 'buildFinish') {
        isActivelyBuilding = false;
        lastBuildResults = { ...data };
        delete lastBuildResults.hmr;
        sendToWorker({ buildResults: { ...lastBuildResults }, isActivelyBuilding });
      } else if (eventName === 'buildLog') {
        sendToWorker({
          buildLog: { ...data },
        });
      } else if (eventName === 'buildStart') {
        isActivelyBuilding = true;
      }
    }
  };

  const serverStarted = (msg: DevServerMessage) => {
    hasStarted = true;
    clearTimeout(startupTimeout);
    devServerConfig = msg.serverStarted;

    devServer = {
      address: devServerConfig.address,
      basePath: devServerConfig.basePath,
      browserUrl: devServerConfig.browserUrl,
      protocol: devServerConfig.protocol,
      port: devServerConfig.port,
      root: devServerConfig.root,
      emit,
      close,
    };

    browserUrl = devServerConfig.browserUrl;

    timespan.finish(`dev server started: ${browserUrl}`);

    resolve(devServer);
  };

  const requestLog = (msg: DevServerMessage) => {
    if (devServerConfig.logRequests) {
      let statusMsg: any;
      if (msg.requestLog.status >= 400) {
        statusMsg = logger.red(msg.requestLog.method);
      } else if (msg.requestLog.status >= 300) {
        statusMsg = logger.magenta(msg.requestLog.method);
      } else {
        statusMsg = logger.cyan(msg.requestLog.method);
      }
      logger.info(logger.dim(`${statusMsg} ${msg.requestLog.url}`));
    }
  };

  const serverError = (msg: DevServerMessage) => {
    if (hasStarted) {
      logger.error(msg.error.message + ' ' + msg.error.stack);
    } else {
      close();
      reject(msg.error.message);
    }
  };

  const receiveFromWorker = async (msg: DevServerMessage) => {
    try {
      if (msg.serverStarted) {
        serverStarted(msg);
      } else if (msg.serverClosed) {
        logger.debug(`dev server closed: ${browserUrl}`);
        closeResolve();
      } else if (msg.requestBuildResults) {
        sendToWorker({ buildResults: { ...lastBuildResults }, isActivelyBuilding });
      } else if (msg.compilerRequestPath) {
        if (watcher) {
          const compilerRequestResults = await watcher.request({ path: msg.compilerRequestPath });
          sendToWorker({ compilerRequestResults });
        }
      } else if (msg.requestLog) {
        requestLog(msg);
      } else if (msg.error) {
        serverError(msg);
      }
    } catch (e) {
      logger.error('receiveFromWorker: ' + e);
    }
  };

  if (watcher) {
    removeWatcher = watcher.on(emit);
  }

  sendToWorker = initServerProcess(receiveFromWorker);

  sendToWorker({
    startServer: devServerConfig,
  });
}

export { DevServer, StencilDevServerConfig as DevServerConfig, Logger };
