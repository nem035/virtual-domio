export default function render(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const { tagName, attrs, children } = vNode;

  const $el = document.createElement(tagName);

  for (const [key, value] of Object.entries(attrs)) {
    $el.setAttribute(key, value);
  }

  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
}
