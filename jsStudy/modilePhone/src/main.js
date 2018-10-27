// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import MintUI from 'mint-ui'
import Good from 'components/good'
import Tab from 'components/mui/tab'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import Goods from 'components/goods/goods'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(VueResource)
let router = new VueRouter({
  linkActiveClass:'active',
  mode:'history',
  routes:[
    {
      path:'/',
      component:Goods
    },
    {
      path: '/good',
      component: Good
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/tab',
      component: Tab
    }
  ]
})
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

