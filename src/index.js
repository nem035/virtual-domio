import { createElement, render } from './vdom';
import mount from './vdom/mount';

const createApp = ({ count }) =>
  createElement(
    'div',
    {
      id: 'app',
      count: count,
    },
    [
      String(count),
      createElement('img', {
        src: 'https://media.giphy.com/media/l1IYk3l6xcEDN5RFS/giphy.gif',
      }),
    ]
  );

const state = {
  count: 0,
};

let $root = document.querySelector('#app');
$root = mount(render(createApp(state)), $root);

setInterval(() => {
  console.log(`rendering count ${state.count}`);
  $root = mount(render(createApp(state)), $root);
  state.count += 1;
}, 1000);
