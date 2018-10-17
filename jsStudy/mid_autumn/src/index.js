import '@/common'
import App from '@/pages/App'
import routes from '@/router/router'
import VueRouter from 'vue-router'
import appSendLog from '@/common/util/appSendLog'
import sendLoger from '@/common/util/sendLoger'

Vue.use(VueRouter)
Vue.use(appSendLog)
Vue.use(sendLoger)

const router = new VueRouter({
  routes
})
if (NODE_ENV !== 'production') {
  window.Hook.VConsole()
}
// window.NODE_ENV = NODE_ENV
window.app = new Vue({
  router,
  ...App
}).$mount('#app')
