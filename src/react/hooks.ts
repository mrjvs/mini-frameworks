import { Node } from '@/react/element';
import { rerender } from '@/react/render';

let hookIndex = 0;
let vnode: Node | undefined;

export function startHookRender(newNode: Node) {
  hookIndex = 0;
  vnode = newNode;
}

export function initializeHook<T>() {
  if (!vnode) throw new Error('initializeHook outside of hook cycle');
  const hook = vnode?.hooks[hookIndex];
  if (!hook) {
    const obj = {};
    vnode.hooks[hookIndex] = obj;
    hookIndex += 1;
    return {
      node: vnode,
      data: obj as T,
      initial: true,
    };
  }

  hookIndex += 1;
  return {
    node: vnode,
    data: hook as T,
    initial: false,
  };
}

export function taintNode(node: Node) {
  node.tainted = true;
  rerender();
}
