import { createElement, render } from './vdom';

const vApp = createElement(
  'div',
  {
    id: 'app',
  },
  [
    'Hello World',
    createElement('img', {
      src: 'https://media.giphy.com/media/l1IYk3l6xcEDN5RFS/giphy.gif',
    }),
  ]
);

const $app = render(vApp);

console.log($app);
