
const ComPo = () => import(/* webpackChunkName:'hello'*/ '@/page/components/index'); // 可以配置模块的名称，相同的名字会打包到同一个模块里面

export default [
  {
    path: '/components',
    name: 'ComPo',
    component: ComPo
  },
]
