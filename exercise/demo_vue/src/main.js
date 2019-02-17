// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VSconsole from 'vconsole'
import './components/global'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
if(process.env.NODE_ENV === 'development'){
  var vConsole = new VSconsole();
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
