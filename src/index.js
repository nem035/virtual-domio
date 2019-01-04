import createElement from './vdom/createElement';

const vApp = createElement('div', {
  attrs: {
    id: 'app'
  },
  children: [
    'Hello World'
  ]
})

console.log(vApp)
