import { Node } from '@/react/element';
import { startHookRender } from '@/react/hooks';

function renderComponent(node: Node) {
  startHookRender(node);
  return (node.type as any)({ children: node.children, ...node.props });
}

function renderNode(node: Node | string, el: Element) {
  if (typeof node !== 'object') {
    el.append(node.toString());
    return;
  }

  if (typeof node.type !== 'function') {
    const newEl = document.createElement(node.type);
    Object.entries(node.props).forEach((entry) => {
      (newEl as any)[entry[0].toLowerCase()] = entry[1];
    });
    node.children?.forEach((child) => renderNode(child, newEl));
    el.appendChild(newEl);
    return;
  }

  const newDom = renderComponent(node);
  node.children = [newDom];
  renderNode(newDom, el);
}

let rootElement: Element | undefined;
let rootNode: Node | string | undefined;

export function rerender() {
  if (!rootNode || !rootElement) return;
  rootElement.replaceChildren();
  renderNode(rootNode, rootElement);
}

export function startRender(node: Node | string, el: Element) {
  rootElement = el;
  rootNode = node;
  rerender();
}
