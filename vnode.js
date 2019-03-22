const vnode = {
    functional: true,
    render: (h, ctx) => ctx.props.vnode
}

function install (Vue) {
    Vue.component('v-node', vnode)
}

export default install

