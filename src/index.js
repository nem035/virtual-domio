import {createElement, render} from './vdom';

const vApp = createElement('div', {
  attrs: {
    id: 'app'
  },
  children: [
    'Hello World'
  ]
})

const $app = render(vApp)

console.log(vApp)
