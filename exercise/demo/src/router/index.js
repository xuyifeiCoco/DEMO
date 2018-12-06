import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Axios from '@/components/Axios'
// import Video from '@/page/video'
const HelloWorld = () => import(/* webpackChunkName:'hello'*/ '../components/HelloWorld');// 可以配置模块的名称，相同的名字会打包到同一个模块里面
const Axios = () => import(/* webpackChunkName:'hello'*/ '@/components/Axios');
const Video = () => import('@/page/video');
const Sass = () => import('@/page/sass');
const Qianxi = () => import('@/page/echart/qianxi');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/sass',
      name: 'Sass',
      component: Sass
    },
    {
      path: '/qianxi',
      name: 'qianxi',
      component: Qianxi
    },
  ]
})
