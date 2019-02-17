import Vue from 'vue'
import Router from 'vue-router'

import RouterConfig from './modules' // 引入业务逻辑模块
import CommonRouters from './common' // 引入通用模块
// import HelloWorld from '@/components/HelloWorld'
// import Axios from '@/components/Axios'
// import Video from '@/page/video'
// const Axios = () => import(/* webpackChunkName:'hello'*/ '@/components/Axios'); // 可以配置模块的名称，相同的名字会打包到同一个模块里面
const Video = () => import('@/page/video');
// const Sass = () => import('@/page/sass');
const Qianxi = () => import('@/page/echart/qianxi');
const Tab = () => import('@/page/Tab/index.vue');

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [  ...RouterConfig.concat(CommonRouters),
    // {
    //   path: '/axios',
    //   name: 'Axios',
    //   component: Axios
    // },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    // {
    //   path: '/sass',
    //   name: 'Sass',
    //   component: Sass
    // },
    {
      path: '/qianxi',
      name: 'qianxi',
      component: Qianxi
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
  ]
})
