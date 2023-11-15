export type BuiltinNodes = 'div' | 'p';

export type HtmlAttributes = {
  style?: CSSStyleDeclaration;
  onClick?: (e: PointerEvent) => void;
  className?: string;
};

export type BuiltinNodeAttrs = {
  div: HtmlAttributes;
  p: HtmlAttributes;
  button: HtmlAttributes;
};
