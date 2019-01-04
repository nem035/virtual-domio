import { createElement, render, mount, diff } from './vdom';

const createApp = ({ count }) =>
  createElement(
    'div',
    {
      id: 'app',
      count: count,
    },
    [
      createElement('h1', undefined, ['VirtualDOMio']),
      createElement('span', { id: 'count' }, [String(count)]),
      createElement('input', {
        type: 'text',
        placeholder: 'Try typing while the app is updating',
      }),
      createElement('img', {
        src: 'https://media.giphy.com/media/26DNdzl2XkgbbFAmk/giphy.gif',
      }),
    ]
  );

const state = {
  count: 0,
};

let vApp = createApp(state);
let $root = mount(render(vApp), document.querySelector('#app'));

setInterval(() => {
  state.count += 1;
  const newVApp = createApp(state);
  const patch = diff(vApp, newVApp);
  $root = patch($root);
  vApp = newVApp;
}, 1000);
