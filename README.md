# Vue VNode

Vue v-node is a simple component that gets a vnode
and renders it

## Usage
```bash
yarn add vue-vnode
npm i --save vue-vnode
```
```js
import VVNode from 'vue-vnode'
Vue.use(VVNode)
```
```html
<v-node :vnode="$createElement('h2', `I'm working :D`)" />
```

Tip: you can also use it with JSX:
https://github.com/vuejs/babel-plugin-transform-vue-jsx

