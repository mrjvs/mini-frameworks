export type BuiltinNodes = 'div' | 'p';

export type HtmlAttributes = {
  style?: CSSStyleDeclaration;
  onClick?: (e: PointerEvent) => void;
};

export type BuiltinNodeAttrs = {
  div: HtmlAttributes;
  p: HtmlAttributes;
  button: HtmlAttributes;
};
