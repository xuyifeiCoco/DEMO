
const Axios = () => import(/* webpackChunkName:'hello'*/ '@/components/Axios'); // 可以配置模块的名称，相同的名字会打包到同一个模块里面

export default [
  {
    path: '/axios',
    name: 'Axios',
    component: Axios
  },
]
