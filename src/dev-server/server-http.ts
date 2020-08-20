import type * as d from '../declarations';
import { createRequestHandler } from './request-handler';
import * as http from 'http';
import * as https from 'https';
import * as net from 'net';

export function createHttpServer(
  devServerConfig: d.DevServerConfig,
  sys: d.CompilerSystem,
  sendMsg: d.DevServerSendMessage,
) {
  // create our request handler
  const reqHandler = createRequestHandler(devServerConfig, sys, sendMsg);

  const credentials = devServerConfig.https;

  return credentials ? https.createServer(credentials, reqHandler) : http.createServer(reqHandler);
}

export async function findClosestOpenPort(host: string, port: number): Promise<number> {
  async function t(portToCheck: number): Promise<number> {
    const isTaken = await isPortTaken(host, portToCheck);
    if (!isTaken) {
      return portToCheck;
    }
    return t(portToCheck + 1);
  }

  return t(port);
}

function isPortTaken(host: string, port: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const tester = net
      .createServer()
      .once('error', () => {
        resolve(true);
      })
      .once('listening', () => {
        tester
          .once('close', () => {
            resolve(false);
          })
          .close();
      })
      .on('error', (err: any) => {
        reject(err);
      })
      .listen(port, host);
  });
}
