import { Node } from '@/react/element';

export function renderNode(node: Node | string, el: Element) {
  if (typeof node !== 'object') {
    el.append(node.toString());
    return;
  }

  if (typeof node.type !== 'function') {
    const newEl = document.createElement(node.type);
    node.children?.forEach((child) => renderNode(child, newEl));
    el.appendChild(newEl);
    return;
  }

  const newDom = node.type({ children: node.children, ...node.props });
  renderNode(newDom, el);
}
