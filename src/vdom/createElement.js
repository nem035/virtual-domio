export default function createElement(tagName, attrs = {}, children = []) {
  return {
    tagName,
    attrs,
    children,
  };
}
