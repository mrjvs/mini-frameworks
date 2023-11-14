import { BuiltinNodes } from '@/react/intrinsic';

// eslint-disable-next-line no-use-before-define
export type Component<Props extends Record<string, any>> = (props: Props) => Node;
// eslint-disable-next-line no-use-before-define
export type Children = Node | Node[] | string | null;

export type DefaultProps = {
  key?: string;
};

export type Node = {
  type: Component<any> | BuiltinNodes;
  props: Record<string, any>;
  children: Array<Node | string>;
  key: string | null;
};

export function createElement<Props extends Record<string, any>>(
  comp: Component<Props> | BuiltinNodes,
  attrs?: DefaultProps & Props,
  key?: string,
): Node {
  const realChildren = attrs?.children ?? [];
  delete attrs?.children;
  return {
    key: key ?? null,
    type: comp,
    props: attrs ?? {},
    children: Array.isArray(realChildren) ? realChildren : [realChildren],
  };
}
