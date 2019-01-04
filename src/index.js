import { createElement, render } from './vdom';
import mount from './vdom/mount';

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

mount($app, document.querySelector('#app'));
