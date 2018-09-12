/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface AttributeBasicRoot {}
  interface AttributeBasicRootAttributes extends StencilHTMLAttributes {}

  interface AttributeBasic {
    'customAttr': string;
    'multiWord': string;
    'single': string;
  }
  interface AttributeBasicAttributes extends StencilHTMLAttributes {
    'customAttr'?: string;
    'multiWord'?: string;
    'single'?: string;
  }

  interface AttributeBooleanRoot {
    'toggleState': () => void;
  }
  interface AttributeBooleanRootAttributes extends StencilHTMLAttributes {}

  interface AttributeBoolean {
    'boolState': boolean;
    'noreflect': boolean;
    'strState': string;
  }
  interface AttributeBooleanAttributes extends StencilHTMLAttributes {
    'boolState'?: boolean;
    'noreflect'?: boolean;
    'strState'?: string;
  }

  interface AttributeComplex {
    'bool0': boolean;
    'bool1': boolean;
    'bool2': boolean;
    'getInstance': () => this;
    'nu0': number;
    'nu1': number;
    'str0': string;
    'str1': string;
  }
  interface AttributeComplexAttributes extends StencilHTMLAttributes {
    'bool0'?: boolean;
    'bool1'?: boolean;
    'bool2'?: boolean;
    'nu0'?: number;
    'nu1'?: number;
    'str0'?: string;
    'str1'?: string;
  }

  interface AttributeHost {}
  interface AttributeHostAttributes extends StencilHTMLAttributes {}

  interface AttributeHtmlRoot {
    'anyAttr': any | null;
    'nuAttr': number | null;
    'strAttr': string;
  }
  interface AttributeHtmlRootAttributes extends StencilHTMLAttributes {
    'anyAttr'?: any | null;
    'nuAttr'?: number | null;
    'strAttr'?: string;
  }

  interface ConditionalBasic {}
  interface ConditionalBasicAttributes extends StencilHTMLAttributes {}

  interface ConditionalRerenderRoot {}
  interface ConditionalRerenderRootAttributes extends StencilHTMLAttributes {}

  interface ConditionalRerender {}
  interface ConditionalRerenderAttributes extends StencilHTMLAttributes {}

  interface CssVariablesRoot {}
  interface CssVariablesRootAttributes extends StencilHTMLAttributes {}

  interface CssVariables {}
  interface CssVariablesAttributes extends StencilHTMLAttributes {}

  interface DynamicImport {
    'update': () => Promise<void>;
  }
  interface DynamicImportAttributes extends StencilHTMLAttributes {}

  interface Es5AddclassSvg {}
  interface Es5AddclassSvgAttributes extends StencilHTMLAttributes {}

  interface EsmImport {
    'propVal': number;
    'someMethod': () => void;
  }
  interface EsmImportAttributes extends StencilHTMLAttributes {
    'onSomeEvent'?: (event: CustomEvent) => void;
    'propVal'?: number;
  }

  interface InitCssRoot {}
  interface InitCssRootAttributes extends StencilHTMLAttributes {}

  interface KeyReorderRoot {}
  interface KeyReorderRootAttributes extends StencilHTMLAttributes {}

  interface KeyReorder {
    'num': number;
  }
  interface KeyReorderAttributes extends StencilHTMLAttributes {
    'num'?: number;
  }

  interface LifecycleBasicA {}
  interface LifecycleBasicAAttributes extends StencilHTMLAttributes {}

  interface LifecycleBasicB {
    'value': string;
  }
  interface LifecycleBasicBAttributes extends StencilHTMLAttributes {
    'onLifecycleLoad'?: (event: CustomEvent) => void;
    'onLifecycleUpdate'?: (event: CustomEvent) => void;
    'value'?: string;
  }

  interface LifecycleBasicC {
    'value': string;
  }
  interface LifecycleBasicCAttributes extends StencilHTMLAttributes {
    'onLifecycleLoad'?: (event: CustomEvent) => void;
    'onLifecycleUpdate'?: (event: CustomEvent) => void;
    'value'?: string;
  }

  interface LifecycleOnReadyA {}
  interface LifecycleOnReadyAAttributes extends StencilHTMLAttributes {}

  interface LifecycleOnReadyB {
    'value': number;
  }
  interface LifecycleOnReadyBAttributes extends StencilHTMLAttributes {
    'value'?: number;
  }

  interface LifecycleOnReadyC {
    'value': number;
  }
  interface LifecycleOnReadyCAttributes extends StencilHTMLAttributes {
    'value'?: number;
  }

  interface LifecycleUnloadA {}
  interface LifecycleUnloadAAttributes extends StencilHTMLAttributes {}

  interface LifecycleUnloadB {}
  interface LifecycleUnloadBAttributes extends StencilHTMLAttributes {}

  interface LifecycleUnloadRoot {}
  interface LifecycleUnloadRootAttributes extends StencilHTMLAttributes {}

  interface ReflectToAttr {
    'bool': boolean;
    'dynamicNu': number;
    'dynamicStr': string;
    'nu': number;
    'null': string;
    'otherBool': boolean;
    'str': string;
    'undef': string;
  }
  interface ReflectToAttrAttributes extends StencilHTMLAttributes {
    'bool'?: boolean;
    'dynamicNu'?: number;
    'dynamicStr'?: string;
    'nu'?: number;
    'null'?: string;
    'otherBool'?: boolean;
    'str'?: string;
    'undef'?: string;
  }

  interface ShadowDomArrayRoot {}
  interface ShadowDomArrayRootAttributes extends StencilHTMLAttributes {}

  interface ShadowDomArray {
    'values': number[];
  }
  interface ShadowDomArrayAttributes extends StencilHTMLAttributes {
    'values'?: number[];
  }

  interface ShadowDomBasicRoot {}
  interface ShadowDomBasicRootAttributes extends StencilHTMLAttributes {}

  interface ShadowDomBasic {}
  interface ShadowDomBasicAttributes extends StencilHTMLAttributes {}

  interface ShadowDomSlotBasic {}
  interface ShadowDomSlotBasicAttributes extends StencilHTMLAttributes {}

  interface ShadowDomSlotNestedRoot {}
  interface ShadowDomSlotNestedRootAttributes extends StencilHTMLAttributes {}

  interface ShadowDomSlotNested {
    'i': number;
  }
  interface ShadowDomSlotNestedAttributes extends StencilHTMLAttributes {
    'i'?: number;
  }

  interface SlotArrayBasic {}
  interface SlotArrayBasicAttributes extends StencilHTMLAttributes {}

  interface SlotArrayComplexRoot {}
  interface SlotArrayComplexRootAttributes extends StencilHTMLAttributes {}

  interface SlotArrayComplex {}
  interface SlotArrayComplexAttributes extends StencilHTMLAttributes {}

  interface SlotArrayTop {}
  interface SlotArrayTopAttributes extends StencilHTMLAttributes {}

  interface SlotBasicOrderRoot {}
  interface SlotBasicOrderRootAttributes extends StencilHTMLAttributes {}

  interface SlotBasicOrder {}
  interface SlotBasicOrderAttributes extends StencilHTMLAttributes {}

  interface SlotBasicRoot {}
  interface SlotBasicRootAttributes extends StencilHTMLAttributes {}

  interface SlotBasic {}
  interface SlotBasicAttributes extends StencilHTMLAttributes {}

  interface SlotDynamicWrapperRoot {}
  interface SlotDynamicWrapperRootAttributes extends StencilHTMLAttributes {}

  interface SlotDynamicWrapper {
    'tag': string;
  }
  interface SlotDynamicWrapperAttributes extends StencilHTMLAttributes {
    'tag'?: string;
  }

  interface SlotFallbackRoot {}
  interface SlotFallbackRootAttributes extends StencilHTMLAttributes {}

  interface SlotFallback {
    'inc': number;
  }
  interface SlotFallbackAttributes extends StencilHTMLAttributes {
    'inc'?: number;
  }

  interface SlotHtml {
    'inc': number;
  }
  interface SlotHtmlAttributes extends StencilHTMLAttributes {
    'inc'?: number;
  }

  interface SlotLightDomRoot {}
  interface SlotLightDomRootAttributes extends StencilHTMLAttributes {}

  interface SlotLightDomContent {}
  interface SlotLightDomContentAttributes extends StencilHTMLAttributes {}

  interface SlotMapOrderRoot {}
  interface SlotMapOrderRootAttributes extends StencilHTMLAttributes {}

  interface SlotMapOrder {}
  interface SlotMapOrderAttributes extends StencilHTMLAttributes {}

  interface SlotReorderRoot {}
  interface SlotReorderRootAttributes extends StencilHTMLAttributes {}

  interface SlotReorder {
    'reordered': boolean;
  }
  interface SlotReorderAttributes extends StencilHTMLAttributes {
    'reordered'?: boolean;
  }

  interface SlotReplaceWrapperRoot {}
  interface SlotReplaceWrapperRootAttributes extends StencilHTMLAttributes {}

  interface SlotReplaceWrapper {
    'href': string;
  }
  interface SlotReplaceWrapperAttributes extends StencilHTMLAttributes {
    'href'?: string;
  }

  interface CssCmp {}
  interface CssCmpAttributes extends StencilHTMLAttributes {}

  interface SassCmp {}
  interface SassCmpAttributes extends StencilHTMLAttributes {}

  interface SvgAttr {}
  interface SvgAttrAttributes extends StencilHTMLAttributes {}

  interface SvgClass {}
  interface SvgClassAttributes extends StencilHTMLAttributes {}

  interface Tag3dComponent {}
  interface Tag3dComponentAttributes extends StencilHTMLAttributes {}

  interface Tag88 {}
  interface Tag88Attributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AttributeBasicRoot': Components.AttributeBasicRoot;
    'AttributeBasic': Components.AttributeBasic;
    'AttributeBooleanRoot': Components.AttributeBooleanRoot;
    'AttributeBoolean': Components.AttributeBoolean;
    'AttributeComplex': Components.AttributeComplex;
    'AttributeHost': Components.AttributeHost;
    'AttributeHtmlRoot': Components.AttributeHtmlRoot;
    'ConditionalBasic': Components.ConditionalBasic;
    'ConditionalRerenderRoot': Components.ConditionalRerenderRoot;
    'ConditionalRerender': Components.ConditionalRerender;
    'CssVariablesRoot': Components.CssVariablesRoot;
    'CssVariables': Components.CssVariables;
    'DynamicImport': Components.DynamicImport;
    'Es5AddclassSvg': Components.Es5AddclassSvg;
    'EsmImport': Components.EsmImport;
    'InitCssRoot': Components.InitCssRoot;
    'KeyReorderRoot': Components.KeyReorderRoot;
    'KeyReorder': Components.KeyReorder;
    'LifecycleBasicA': Components.LifecycleBasicA;
    'LifecycleBasicB': Components.LifecycleBasicB;
    'LifecycleBasicC': Components.LifecycleBasicC;
    'LifecycleOnReadyA': Components.LifecycleOnReadyA;
    'LifecycleOnReadyB': Components.LifecycleOnReadyB;
    'LifecycleOnReadyC': Components.LifecycleOnReadyC;
    'LifecycleUnloadA': Components.LifecycleUnloadA;
    'LifecycleUnloadB': Components.LifecycleUnloadB;
    'LifecycleUnloadRoot': Components.LifecycleUnloadRoot;
    'ReflectToAttr': Components.ReflectToAttr;
    'ShadowDomArrayRoot': Components.ShadowDomArrayRoot;
    'ShadowDomArray': Components.ShadowDomArray;
    'ShadowDomBasicRoot': Components.ShadowDomBasicRoot;
    'ShadowDomBasic': Components.ShadowDomBasic;
    'ShadowDomSlotBasic': Components.ShadowDomSlotBasic;
    'ShadowDomSlotNestedRoot': Components.ShadowDomSlotNestedRoot;
    'ShadowDomSlotNested': Components.ShadowDomSlotNested;
    'SlotArrayBasic': Components.SlotArrayBasic;
    'SlotArrayComplexRoot': Components.SlotArrayComplexRoot;
    'SlotArrayComplex': Components.SlotArrayComplex;
    'SlotArrayTop': Components.SlotArrayTop;
    'SlotBasicOrderRoot': Components.SlotBasicOrderRoot;
    'SlotBasicOrder': Components.SlotBasicOrder;
    'SlotBasicRoot': Components.SlotBasicRoot;
    'SlotBasic': Components.SlotBasic;
    'SlotDynamicWrapperRoot': Components.SlotDynamicWrapperRoot;
    'SlotDynamicWrapper': Components.SlotDynamicWrapper;
    'SlotFallbackRoot': Components.SlotFallbackRoot;
    'SlotFallback': Components.SlotFallback;
    'SlotHtml': Components.SlotHtml;
    'SlotLightDomRoot': Components.SlotLightDomRoot;
    'SlotLightDomContent': Components.SlotLightDomContent;
    'SlotMapOrderRoot': Components.SlotMapOrderRoot;
    'SlotMapOrder': Components.SlotMapOrder;
    'SlotReorderRoot': Components.SlotReorderRoot;
    'SlotReorder': Components.SlotReorder;
    'SlotReplaceWrapperRoot': Components.SlotReplaceWrapperRoot;
    'SlotReplaceWrapper': Components.SlotReplaceWrapper;
    'CssCmp': Components.CssCmp;
    'SassCmp': Components.SassCmp;
    'SvgAttr': Components.SvgAttr;
    'SvgClass': Components.SvgClass;
    'Tag3dComponent': Components.Tag3dComponent;
    'Tag88': Components.Tag88;
  }

  interface StencilIntrinsicElements {
    'attribute-basic-root': Components.AttributeBasicRootAttributes;
    'attribute-basic': Components.AttributeBasicAttributes;
    'attribute-boolean-root': Components.AttributeBooleanRootAttributes;
    'attribute-boolean': Components.AttributeBooleanAttributes;
    'attribute-complex': Components.AttributeComplexAttributes;
    'attribute-host': Components.AttributeHostAttributes;
    'attribute-html-root': Components.AttributeHtmlRootAttributes;
    'conditional-basic': Components.ConditionalBasicAttributes;
    'conditional-rerender-root': Components.ConditionalRerenderRootAttributes;
    'conditional-rerender': Components.ConditionalRerenderAttributes;
    'css-variables-root': Components.CssVariablesRootAttributes;
    'css-variables': Components.CssVariablesAttributes;
    'dynamic-import': Components.DynamicImportAttributes;
    'es5-addclass-svg': Components.Es5AddclassSvgAttributes;
    'esm-import': Components.EsmImportAttributes;
    'init-css-root': Components.InitCssRootAttributes;
    'key-reorder-root': Components.KeyReorderRootAttributes;
    'key-reorder': Components.KeyReorderAttributes;
    'lifecycle-basic-a': Components.LifecycleBasicAAttributes;
    'lifecycle-basic-b': Components.LifecycleBasicBAttributes;
    'lifecycle-basic-c': Components.LifecycleBasicCAttributes;
    'lifecycle-on-ready-a': Components.LifecycleOnReadyAAttributes;
    'lifecycle-on-ready-b': Components.LifecycleOnReadyBAttributes;
    'lifecycle-on-ready-c': Components.LifecycleOnReadyCAttributes;
    'lifecycle-unload-a': Components.LifecycleUnloadAAttributes;
    'lifecycle-unload-b': Components.LifecycleUnloadBAttributes;
    'lifecycle-unload-root': Components.LifecycleUnloadRootAttributes;
    'reflect-to-attr': Components.ReflectToAttrAttributes;
    'shadow-dom-array-root': Components.ShadowDomArrayRootAttributes;
    'shadow-dom-array': Components.ShadowDomArrayAttributes;
    'shadow-dom-basic-root': Components.ShadowDomBasicRootAttributes;
    'shadow-dom-basic': Components.ShadowDomBasicAttributes;
    'shadow-dom-slot-basic': Components.ShadowDomSlotBasicAttributes;
    'shadow-dom-slot-nested-root': Components.ShadowDomSlotNestedRootAttributes;
    'shadow-dom-slot-nested': Components.ShadowDomSlotNestedAttributes;
    'slot-array-basic': Components.SlotArrayBasicAttributes;
    'slot-array-complex-root': Components.SlotArrayComplexRootAttributes;
    'slot-array-complex': Components.SlotArrayComplexAttributes;
    'slot-array-top': Components.SlotArrayTopAttributes;
    'slot-basic-order-root': Components.SlotBasicOrderRootAttributes;
    'slot-basic-order': Components.SlotBasicOrderAttributes;
    'slot-basic-root': Components.SlotBasicRootAttributes;
    'slot-basic': Components.SlotBasicAttributes;
    'slot-dynamic-wrapper-root': Components.SlotDynamicWrapperRootAttributes;
    'slot-dynamic-wrapper': Components.SlotDynamicWrapperAttributes;
    'slot-fallback-root': Components.SlotFallbackRootAttributes;
    'slot-fallback': Components.SlotFallbackAttributes;
    'slot-html': Components.SlotHtmlAttributes;
    'slot-light-dom-root': Components.SlotLightDomRootAttributes;
    'slot-light-dom-content': Components.SlotLightDomContentAttributes;
    'slot-map-order-root': Components.SlotMapOrderRootAttributes;
    'slot-map-order': Components.SlotMapOrderAttributes;
    'slot-reorder-root': Components.SlotReorderRootAttributes;
    'slot-reorder': Components.SlotReorderAttributes;
    'slot-replace-wrapper-root': Components.SlotReplaceWrapperRootAttributes;
    'slot-replace-wrapper': Components.SlotReplaceWrapperAttributes;
    'css-cmp': Components.CssCmpAttributes;
    'sass-cmp': Components.SassCmpAttributes;
    'svg-attr': Components.SvgAttrAttributes;
    'svg-class': Components.SvgClassAttributes;
    'tag-3d-component': Components.Tag3dComponentAttributes;
    'tag-88': Components.Tag88Attributes;
  }


  interface HTMLAttributeBasicRootElement extends Components.AttributeBasicRoot, HTMLStencilElement {}
  var HTMLAttributeBasicRootElement: {
    prototype: HTMLAttributeBasicRootElement;
    new (): HTMLAttributeBasicRootElement;
  };

  interface HTMLAttributeBasicElement extends Components.AttributeBasic, HTMLStencilElement {}
  var HTMLAttributeBasicElement: {
    prototype: HTMLAttributeBasicElement;
    new (): HTMLAttributeBasicElement;
  };

  interface HTMLAttributeBooleanRootElement extends Components.AttributeBooleanRoot, HTMLStencilElement {}
  var HTMLAttributeBooleanRootElement: {
    prototype: HTMLAttributeBooleanRootElement;
    new (): HTMLAttributeBooleanRootElement;
  };

  interface HTMLAttributeBooleanElement extends Components.AttributeBoolean, HTMLStencilElement {}
  var HTMLAttributeBooleanElement: {
    prototype: HTMLAttributeBooleanElement;
    new (): HTMLAttributeBooleanElement;
  };

  interface HTMLAttributeComplexElement extends Components.AttributeComplex, HTMLStencilElement {}
  var HTMLAttributeComplexElement: {
    prototype: HTMLAttributeComplexElement;
    new (): HTMLAttributeComplexElement;
  };

  interface HTMLAttributeHostElement extends Components.AttributeHost, HTMLStencilElement {}
  var HTMLAttributeHostElement: {
    prototype: HTMLAttributeHostElement;
    new (): HTMLAttributeHostElement;
  };

  interface HTMLAttributeHtmlRootElement extends Components.AttributeHtmlRoot, HTMLStencilElement {}
  var HTMLAttributeHtmlRootElement: {
    prototype: HTMLAttributeHtmlRootElement;
    new (): HTMLAttributeHtmlRootElement;
  };

  interface HTMLConditionalBasicElement extends Components.ConditionalBasic, HTMLStencilElement {}
  var HTMLConditionalBasicElement: {
    prototype: HTMLConditionalBasicElement;
    new (): HTMLConditionalBasicElement;
  };

  interface HTMLConditionalRerenderRootElement extends Components.ConditionalRerenderRoot, HTMLStencilElement {}
  var HTMLConditionalRerenderRootElement: {
    prototype: HTMLConditionalRerenderRootElement;
    new (): HTMLConditionalRerenderRootElement;
  };

  interface HTMLConditionalRerenderElement extends Components.ConditionalRerender, HTMLStencilElement {}
  var HTMLConditionalRerenderElement: {
    prototype: HTMLConditionalRerenderElement;
    new (): HTMLConditionalRerenderElement;
  };

  interface HTMLCssVariablesRootElement extends Components.CssVariablesRoot, HTMLStencilElement {}
  var HTMLCssVariablesRootElement: {
    prototype: HTMLCssVariablesRootElement;
    new (): HTMLCssVariablesRootElement;
  };

  interface HTMLCssVariablesElement extends Components.CssVariables, HTMLStencilElement {}
  var HTMLCssVariablesElement: {
    prototype: HTMLCssVariablesElement;
    new (): HTMLCssVariablesElement;
  };

  interface HTMLDynamicImportElement extends Components.DynamicImport, HTMLStencilElement {}
  var HTMLDynamicImportElement: {
    prototype: HTMLDynamicImportElement;
    new (): HTMLDynamicImportElement;
  };

  interface HTMLEs5AddclassSvgElement extends Components.Es5AddclassSvg, HTMLStencilElement {}
  var HTMLEs5AddclassSvgElement: {
    prototype: HTMLEs5AddclassSvgElement;
    new (): HTMLEs5AddclassSvgElement;
  };

  interface HTMLEsmImportElement extends Components.EsmImport, HTMLStencilElement {}
  var HTMLEsmImportElement: {
    prototype: HTMLEsmImportElement;
    new (): HTMLEsmImportElement;
  };

  interface HTMLInitCssRootElement extends Components.InitCssRoot, HTMLStencilElement {}
  var HTMLInitCssRootElement: {
    prototype: HTMLInitCssRootElement;
    new (): HTMLInitCssRootElement;
  };

  interface HTMLKeyReorderRootElement extends Components.KeyReorderRoot, HTMLStencilElement {}
  var HTMLKeyReorderRootElement: {
    prototype: HTMLKeyReorderRootElement;
    new (): HTMLKeyReorderRootElement;
  };

  interface HTMLKeyReorderElement extends Components.KeyReorder, HTMLStencilElement {}
  var HTMLKeyReorderElement: {
    prototype: HTMLKeyReorderElement;
    new (): HTMLKeyReorderElement;
  };

  interface HTMLLifecycleBasicAElement extends Components.LifecycleBasicA, HTMLStencilElement {}
  var HTMLLifecycleBasicAElement: {
    prototype: HTMLLifecycleBasicAElement;
    new (): HTMLLifecycleBasicAElement;
  };

  interface HTMLLifecycleBasicBElement extends Components.LifecycleBasicB, HTMLStencilElement {}
  var HTMLLifecycleBasicBElement: {
    prototype: HTMLLifecycleBasicBElement;
    new (): HTMLLifecycleBasicBElement;
  };

  interface HTMLLifecycleBasicCElement extends Components.LifecycleBasicC, HTMLStencilElement {}
  var HTMLLifecycleBasicCElement: {
    prototype: HTMLLifecycleBasicCElement;
    new (): HTMLLifecycleBasicCElement;
  };

  interface HTMLLifecycleOnReadyAElement extends Components.LifecycleOnReadyA, HTMLStencilElement {}
  var HTMLLifecycleOnReadyAElement: {
    prototype: HTMLLifecycleOnReadyAElement;
    new (): HTMLLifecycleOnReadyAElement;
  };

  interface HTMLLifecycleOnReadyBElement extends Components.LifecycleOnReadyB, HTMLStencilElement {}
  var HTMLLifecycleOnReadyBElement: {
    prototype: HTMLLifecycleOnReadyBElement;
    new (): HTMLLifecycleOnReadyBElement;
  };

  interface HTMLLifecycleOnReadyCElement extends Components.LifecycleOnReadyC, HTMLStencilElement {}
  var HTMLLifecycleOnReadyCElement: {
    prototype: HTMLLifecycleOnReadyCElement;
    new (): HTMLLifecycleOnReadyCElement;
  };

  interface HTMLLifecycleUnloadAElement extends Components.LifecycleUnloadA, HTMLStencilElement {}
  var HTMLLifecycleUnloadAElement: {
    prototype: HTMLLifecycleUnloadAElement;
    new (): HTMLLifecycleUnloadAElement;
  };

  interface HTMLLifecycleUnloadBElement extends Components.LifecycleUnloadB, HTMLStencilElement {}
  var HTMLLifecycleUnloadBElement: {
    prototype: HTMLLifecycleUnloadBElement;
    new (): HTMLLifecycleUnloadBElement;
  };

  interface HTMLLifecycleUnloadRootElement extends Components.LifecycleUnloadRoot, HTMLStencilElement {}
  var HTMLLifecycleUnloadRootElement: {
    prototype: HTMLLifecycleUnloadRootElement;
    new (): HTMLLifecycleUnloadRootElement;
  };

  interface HTMLReflectToAttrElement extends Components.ReflectToAttr, HTMLStencilElement {}
  var HTMLReflectToAttrElement: {
    prototype: HTMLReflectToAttrElement;
    new (): HTMLReflectToAttrElement;
  };

  interface HTMLShadowDomArrayRootElement extends Components.ShadowDomArrayRoot, HTMLStencilElement {}
  var HTMLShadowDomArrayRootElement: {
    prototype: HTMLShadowDomArrayRootElement;
    new (): HTMLShadowDomArrayRootElement;
  };

  interface HTMLShadowDomArrayElement extends Components.ShadowDomArray, HTMLStencilElement {}
  var HTMLShadowDomArrayElement: {
    prototype: HTMLShadowDomArrayElement;
    new (): HTMLShadowDomArrayElement;
  };

  interface HTMLShadowDomBasicRootElement extends Components.ShadowDomBasicRoot, HTMLStencilElement {}
  var HTMLShadowDomBasicRootElement: {
    prototype: HTMLShadowDomBasicRootElement;
    new (): HTMLShadowDomBasicRootElement;
  };

  interface HTMLShadowDomBasicElement extends Components.ShadowDomBasic, HTMLStencilElement {}
  var HTMLShadowDomBasicElement: {
    prototype: HTMLShadowDomBasicElement;
    new (): HTMLShadowDomBasicElement;
  };

  interface HTMLShadowDomSlotBasicElement extends Components.ShadowDomSlotBasic, HTMLStencilElement {}
  var HTMLShadowDomSlotBasicElement: {
    prototype: HTMLShadowDomSlotBasicElement;
    new (): HTMLShadowDomSlotBasicElement;
  };

  interface HTMLShadowDomSlotNestedRootElement extends Components.ShadowDomSlotNestedRoot, HTMLStencilElement {}
  var HTMLShadowDomSlotNestedRootElement: {
    prototype: HTMLShadowDomSlotNestedRootElement;
    new (): HTMLShadowDomSlotNestedRootElement;
  };

  interface HTMLShadowDomSlotNestedElement extends Components.ShadowDomSlotNested, HTMLStencilElement {}
  var HTMLShadowDomSlotNestedElement: {
    prototype: HTMLShadowDomSlotNestedElement;
    new (): HTMLShadowDomSlotNestedElement;
  };

  interface HTMLSlotArrayBasicElement extends Components.SlotArrayBasic, HTMLStencilElement {}
  var HTMLSlotArrayBasicElement: {
    prototype: HTMLSlotArrayBasicElement;
    new (): HTMLSlotArrayBasicElement;
  };

  interface HTMLSlotArrayComplexRootElement extends Components.SlotArrayComplexRoot, HTMLStencilElement {}
  var HTMLSlotArrayComplexRootElement: {
    prototype: HTMLSlotArrayComplexRootElement;
    new (): HTMLSlotArrayComplexRootElement;
  };

  interface HTMLSlotArrayComplexElement extends Components.SlotArrayComplex, HTMLStencilElement {}
  var HTMLSlotArrayComplexElement: {
    prototype: HTMLSlotArrayComplexElement;
    new (): HTMLSlotArrayComplexElement;
  };

  interface HTMLSlotArrayTopElement extends Components.SlotArrayTop, HTMLStencilElement {}
  var HTMLSlotArrayTopElement: {
    prototype: HTMLSlotArrayTopElement;
    new (): HTMLSlotArrayTopElement;
  };

  interface HTMLSlotBasicOrderRootElement extends Components.SlotBasicOrderRoot, HTMLStencilElement {}
  var HTMLSlotBasicOrderRootElement: {
    prototype: HTMLSlotBasicOrderRootElement;
    new (): HTMLSlotBasicOrderRootElement;
  };

  interface HTMLSlotBasicOrderElement extends Components.SlotBasicOrder, HTMLStencilElement {}
  var HTMLSlotBasicOrderElement: {
    prototype: HTMLSlotBasicOrderElement;
    new (): HTMLSlotBasicOrderElement;
  };

  interface HTMLSlotBasicRootElement extends Components.SlotBasicRoot, HTMLStencilElement {}
  var HTMLSlotBasicRootElement: {
    prototype: HTMLSlotBasicRootElement;
    new (): HTMLSlotBasicRootElement;
  };

  interface HTMLSlotBasicElement extends Components.SlotBasic, HTMLStencilElement {}
  var HTMLSlotBasicElement: {
    prototype: HTMLSlotBasicElement;
    new (): HTMLSlotBasicElement;
  };

  interface HTMLSlotDynamicWrapperRootElement extends Components.SlotDynamicWrapperRoot, HTMLStencilElement {}
  var HTMLSlotDynamicWrapperRootElement: {
    prototype: HTMLSlotDynamicWrapperRootElement;
    new (): HTMLSlotDynamicWrapperRootElement;
  };

  interface HTMLSlotDynamicWrapperElement extends Components.SlotDynamicWrapper, HTMLStencilElement {}
  var HTMLSlotDynamicWrapperElement: {
    prototype: HTMLSlotDynamicWrapperElement;
    new (): HTMLSlotDynamicWrapperElement;
  };

  interface HTMLSlotFallbackRootElement extends Components.SlotFallbackRoot, HTMLStencilElement {}
  var HTMLSlotFallbackRootElement: {
    prototype: HTMLSlotFallbackRootElement;
    new (): HTMLSlotFallbackRootElement;
  };

  interface HTMLSlotFallbackElement extends Components.SlotFallback, HTMLStencilElement {}
  var HTMLSlotFallbackElement: {
    prototype: HTMLSlotFallbackElement;
    new (): HTMLSlotFallbackElement;
  };

  interface HTMLSlotHtmlElement extends Components.SlotHtml, HTMLStencilElement {}
  var HTMLSlotHtmlElement: {
    prototype: HTMLSlotHtmlElement;
    new (): HTMLSlotHtmlElement;
  };

  interface HTMLSlotLightDomRootElement extends Components.SlotLightDomRoot, HTMLStencilElement {}
  var HTMLSlotLightDomRootElement: {
    prototype: HTMLSlotLightDomRootElement;
    new (): HTMLSlotLightDomRootElement;
  };

  interface HTMLSlotLightDomContentElement extends Components.SlotLightDomContent, HTMLStencilElement {}
  var HTMLSlotLightDomContentElement: {
    prototype: HTMLSlotLightDomContentElement;
    new (): HTMLSlotLightDomContentElement;
  };

  interface HTMLSlotMapOrderRootElement extends Components.SlotMapOrderRoot, HTMLStencilElement {}
  var HTMLSlotMapOrderRootElement: {
    prototype: HTMLSlotMapOrderRootElement;
    new (): HTMLSlotMapOrderRootElement;
  };

  interface HTMLSlotMapOrderElement extends Components.SlotMapOrder, HTMLStencilElement {}
  var HTMLSlotMapOrderElement: {
    prototype: HTMLSlotMapOrderElement;
    new (): HTMLSlotMapOrderElement;
  };

  interface HTMLSlotReorderRootElement extends Components.SlotReorderRoot, HTMLStencilElement {}
  var HTMLSlotReorderRootElement: {
    prototype: HTMLSlotReorderRootElement;
    new (): HTMLSlotReorderRootElement;
  };

  interface HTMLSlotReorderElement extends Components.SlotReorder, HTMLStencilElement {}
  var HTMLSlotReorderElement: {
    prototype: HTMLSlotReorderElement;
    new (): HTMLSlotReorderElement;
  };

  interface HTMLSlotReplaceWrapperRootElement extends Components.SlotReplaceWrapperRoot, HTMLStencilElement {}
  var HTMLSlotReplaceWrapperRootElement: {
    prototype: HTMLSlotReplaceWrapperRootElement;
    new (): HTMLSlotReplaceWrapperRootElement;
  };

  interface HTMLSlotReplaceWrapperElement extends Components.SlotReplaceWrapper, HTMLStencilElement {}
  var HTMLSlotReplaceWrapperElement: {
    prototype: HTMLSlotReplaceWrapperElement;
    new (): HTMLSlotReplaceWrapperElement;
  };

  interface HTMLCssCmpElement extends Components.CssCmp, HTMLStencilElement {}
  var HTMLCssCmpElement: {
    prototype: HTMLCssCmpElement;
    new (): HTMLCssCmpElement;
  };

  interface HTMLSassCmpElement extends Components.SassCmp, HTMLStencilElement {}
  var HTMLSassCmpElement: {
    prototype: HTMLSassCmpElement;
    new (): HTMLSassCmpElement;
  };

  interface HTMLSvgAttrElement extends Components.SvgAttr, HTMLStencilElement {}
  var HTMLSvgAttrElement: {
    prototype: HTMLSvgAttrElement;
    new (): HTMLSvgAttrElement;
  };

  interface HTMLSvgClassElement extends Components.SvgClass, HTMLStencilElement {}
  var HTMLSvgClassElement: {
    prototype: HTMLSvgClassElement;
    new (): HTMLSvgClassElement;
  };

  interface HTMLTag3dComponentElement extends Components.Tag3dComponent, HTMLStencilElement {}
  var HTMLTag3dComponentElement: {
    prototype: HTMLTag3dComponentElement;
    new (): HTMLTag3dComponentElement;
  };

  interface HTMLTag88Element extends Components.Tag88, HTMLStencilElement {}
  var HTMLTag88Element: {
    prototype: HTMLTag88Element;
    new (): HTMLTag88Element;
  };

  interface HTMLElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement
    'attribute-basic': HTMLAttributeBasicElement
    'attribute-boolean-root': HTMLAttributeBooleanRootElement
    'attribute-boolean': HTMLAttributeBooleanElement
    'attribute-complex': HTMLAttributeComplexElement
    'attribute-host': HTMLAttributeHostElement
    'attribute-html-root': HTMLAttributeHtmlRootElement
    'conditional-basic': HTMLConditionalBasicElement
    'conditional-rerender-root': HTMLConditionalRerenderRootElement
    'conditional-rerender': HTMLConditionalRerenderElement
    'css-variables-root': HTMLCssVariablesRootElement
    'css-variables': HTMLCssVariablesElement
    'dynamic-import': HTMLDynamicImportElement
    'es5-addclass-svg': HTMLEs5AddclassSvgElement
    'esm-import': HTMLEsmImportElement
    'init-css-root': HTMLInitCssRootElement
    'key-reorder-root': HTMLKeyReorderRootElement
    'key-reorder': HTMLKeyReorderElement
    'lifecycle-basic-a': HTMLLifecycleBasicAElement
    'lifecycle-basic-b': HTMLLifecycleBasicBElement
    'lifecycle-basic-c': HTMLLifecycleBasicCElement
    'lifecycle-on-ready-a': HTMLLifecycleOnReadyAElement
    'lifecycle-on-ready-b': HTMLLifecycleOnReadyBElement
    'lifecycle-on-ready-c': HTMLLifecycleOnReadyCElement
    'lifecycle-unload-a': HTMLLifecycleUnloadAElement
    'lifecycle-unload-b': HTMLLifecycleUnloadBElement
    'lifecycle-unload-root': HTMLLifecycleUnloadRootElement
    'reflect-to-attr': HTMLReflectToAttrElement
    'shadow-dom-array-root': HTMLShadowDomArrayRootElement
    'shadow-dom-array': HTMLShadowDomArrayElement
    'shadow-dom-basic-root': HTMLShadowDomBasicRootElement
    'shadow-dom-basic': HTMLShadowDomBasicElement
    'shadow-dom-slot-basic': HTMLShadowDomSlotBasicElement
    'shadow-dom-slot-nested-root': HTMLShadowDomSlotNestedRootElement
    'shadow-dom-slot-nested': HTMLShadowDomSlotNestedElement
    'slot-array-basic': HTMLSlotArrayBasicElement
    'slot-array-complex-root': HTMLSlotArrayComplexRootElement
    'slot-array-complex': HTMLSlotArrayComplexElement
    'slot-array-top': HTMLSlotArrayTopElement
    'slot-basic-order-root': HTMLSlotBasicOrderRootElement
    'slot-basic-order': HTMLSlotBasicOrderElement
    'slot-basic-root': HTMLSlotBasicRootElement
    'slot-basic': HTMLSlotBasicElement
    'slot-dynamic-wrapper-root': HTMLSlotDynamicWrapperRootElement
    'slot-dynamic-wrapper': HTMLSlotDynamicWrapperElement
    'slot-fallback-root': HTMLSlotFallbackRootElement
    'slot-fallback': HTMLSlotFallbackElement
    'slot-html': HTMLSlotHtmlElement
    'slot-light-dom-root': HTMLSlotLightDomRootElement
    'slot-light-dom-content': HTMLSlotLightDomContentElement
    'slot-map-order-root': HTMLSlotMapOrderRootElement
    'slot-map-order': HTMLSlotMapOrderElement
    'slot-reorder-root': HTMLSlotReorderRootElement
    'slot-reorder': HTMLSlotReorderElement
    'slot-replace-wrapper-root': HTMLSlotReplaceWrapperRootElement
    'slot-replace-wrapper': HTMLSlotReplaceWrapperElement
    'css-cmp': HTMLCssCmpElement
    'sass-cmp': HTMLSassCmpElement
    'svg-attr': HTMLSvgAttrElement
    'svg-class': HTMLSvgClassElement
    'tag-3d-component': HTMLTag3dComponentElement
    'tag-88': HTMLTag88Element
  }

  interface ElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement;
    'attribute-basic': HTMLAttributeBasicElement;
    'attribute-boolean-root': HTMLAttributeBooleanRootElement;
    'attribute-boolean': HTMLAttributeBooleanElement;
    'attribute-complex': HTMLAttributeComplexElement;
    'attribute-host': HTMLAttributeHostElement;
    'attribute-html-root': HTMLAttributeHtmlRootElement;
    'conditional-basic': HTMLConditionalBasicElement;
    'conditional-rerender-root': HTMLConditionalRerenderRootElement;
    'conditional-rerender': HTMLConditionalRerenderElement;
    'css-variables-root': HTMLCssVariablesRootElement;
    'css-variables': HTMLCssVariablesElement;
    'dynamic-import': HTMLDynamicImportElement;
    'es5-addclass-svg': HTMLEs5AddclassSvgElement;
    'esm-import': HTMLEsmImportElement;
    'init-css-root': HTMLInitCssRootElement;
    'key-reorder-root': HTMLKeyReorderRootElement;
    'key-reorder': HTMLKeyReorderElement;
    'lifecycle-basic-a': HTMLLifecycleBasicAElement;
    'lifecycle-basic-b': HTMLLifecycleBasicBElement;
    'lifecycle-basic-c': HTMLLifecycleBasicCElement;
    'lifecycle-on-ready-a': HTMLLifecycleOnReadyAElement;
    'lifecycle-on-ready-b': HTMLLifecycleOnReadyBElement;
    'lifecycle-on-ready-c': HTMLLifecycleOnReadyCElement;
    'lifecycle-unload-a': HTMLLifecycleUnloadAElement;
    'lifecycle-unload-b': HTMLLifecycleUnloadBElement;
    'lifecycle-unload-root': HTMLLifecycleUnloadRootElement;
    'reflect-to-attr': HTMLReflectToAttrElement;
    'shadow-dom-array-root': HTMLShadowDomArrayRootElement;
    'shadow-dom-array': HTMLShadowDomArrayElement;
    'shadow-dom-basic-root': HTMLShadowDomBasicRootElement;
    'shadow-dom-basic': HTMLShadowDomBasicElement;
    'shadow-dom-slot-basic': HTMLShadowDomSlotBasicElement;
    'shadow-dom-slot-nested-root': HTMLShadowDomSlotNestedRootElement;
    'shadow-dom-slot-nested': HTMLShadowDomSlotNestedElement;
    'slot-array-basic': HTMLSlotArrayBasicElement;
    'slot-array-complex-root': HTMLSlotArrayComplexRootElement;
    'slot-array-complex': HTMLSlotArrayComplexElement;
    'slot-array-top': HTMLSlotArrayTopElement;
    'slot-basic-order-root': HTMLSlotBasicOrderRootElement;
    'slot-basic-order': HTMLSlotBasicOrderElement;
    'slot-basic-root': HTMLSlotBasicRootElement;
    'slot-basic': HTMLSlotBasicElement;
    'slot-dynamic-wrapper-root': HTMLSlotDynamicWrapperRootElement;
    'slot-dynamic-wrapper': HTMLSlotDynamicWrapperElement;
    'slot-fallback-root': HTMLSlotFallbackRootElement;
    'slot-fallback': HTMLSlotFallbackElement;
    'slot-html': HTMLSlotHtmlElement;
    'slot-light-dom-root': HTMLSlotLightDomRootElement;
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
    'slot-map-order-root': HTMLSlotMapOrderRootElement;
    'slot-map-order': HTMLSlotMapOrderElement;
    'slot-reorder-root': HTMLSlotReorderRootElement;
    'slot-reorder': HTMLSlotReorderElement;
    'slot-replace-wrapper-root': HTMLSlotReplaceWrapperRootElement;
    'slot-replace-wrapper': HTMLSlotReplaceWrapperElement;
    'css-cmp': HTMLCssCmpElement;
    'sass-cmp': HTMLSassCmpElement;
    'svg-attr': HTMLSvgAttrElement;
    'svg-class': HTMLSvgClassElement;
    'tag-3d-component': HTMLTag3dComponentElement;
    'tag-88': HTMLTag88Element;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
