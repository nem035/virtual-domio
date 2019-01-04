import { createElement, render, mount, diff } from './vdom';

const createApp = ({ count }) =>
  createElement(
    'div',
    {
      id: 'app',
      count: count,
    },
    [
      String(count),
      createElement('input', { type: 'text' }),
      createElement('img', {
        src: 'https://media.giphy.com/media/l1IYk3l6xcEDN5RFS/giphy.gif',
      }),
    ]
  );

const state = {
  count: 0,
};

let vApp = createApp(state);
let $root = mount(render(vApp), document.querySelector('#app'));

setInterval(() => {
  const newVApp = createApp(state);
  const patch = diff(vApp, newVApp);
  $root = patch($root);
  vApp = newVApp;
  state.count += 1;
}, 1000);
