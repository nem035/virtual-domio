import { createElement, render } from './vdom';

const vApp = createElement(
  'div',
  {
    id: 'app',
  },
  ['Hello World']
);

const $app = render(vApp);

console.log($app);
