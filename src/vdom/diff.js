import zip from 'lodash.zip';
import spread from 'lodash.spread';
import render from './render';

export default function diff(oldVNode, newVNode) {
  if (!newVNode) {
    return function removeOldVNode($node) {
      $node.remove();
      return undefined;
    };
  }

  // diff one or two strings
  if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
    if (oldVNode !== newVNode) {
      return function replaceOldVNode($node) {
        const $newNode = render(newVNode);
        $node.replaceWith($newNode);
        return $newNode;
      };
    }
    return function doNothing() {
      return undefined;
    };
  }

  // when two v nodes have different tag names, we assume they are different
  if (oldVNode.tagName !== newVNode.tagName) {
    return function replaceOldVNode($node) {
      const $newNode = render(newVNode);
      $node.replaceWith($newNode);
      return $newNode;
    };
  }

  const patchAttrs = diffAttrs(oldVNode.attrs, newVNode.attrs);
  const patchChildren = diffChildren(oldVNode.children, newVNode.children);

  return function patchOldVNode($node) {
    patchAttrs($node);
    patchChildren($node);
    return $node;
  };
}

function diffAttrs(oldAttrs, newAttrs) {
  const setAttrsPatches = Object.keys(newAttrs)
    .filter(attrName => !oldAttrs.hasOwnProperty(attrName))
    .map(
      attrName =>
        function setAttr($node) {
          $node.setAttribute(attrName, newAttrs[attrName]);
          return $node;
        }
    );

  const removeAttrPatches = Object.keys(oldAttrs)
    .filter(oldAttrName => !newAttrs.hasOwnProperty(oldAttrName))
    .map(
      attrName =>
        function removeOldVNodeAttr($node) {
          $node.removeAttribute(attrName);
          return $node;
        }
    );

  const patches = removeAttrPatches.concat(setAttrsPatches);

  return function patchOldVNodeAttrs($node) {
    for (const patch of patches) {
      patch($node);
    }
    return $node;
  };
}

function diffChildren(oldVChildren, newVChildren) {
  const childPatches = zip(oldVChildren, newVChildren).map(spread(diff));

  const additionalPatches = newVChildren.slice(oldVChildren.length).map(
    newChild =>
      function appendNewVChild($node) {
        $node.appendChild(render(newChild));
        return $node;
      }
  );

  return function patchChildren($parent) {
    for (const [patch, child] of zip(childPatches, $parent.childNodes)) {
      patch(child);
    }
    for (const patch of additionalPatches) {
      patch($parent);
    }
    return $parent;
  };
}
