const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const detail = r => require.ensure([], () => r(require('@/pages/detail/detail')), 'detail')

export default [
  {
    path: '',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/detail',
    component: detail
  }
]