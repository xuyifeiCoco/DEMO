// import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      // opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    // device: 'desktop',
    language: 'english',
    // size: Cookies.get('size') || 'medium'
  },
  mutations: {
    TOGGLE_DEVICE: (state, language) => {
      state.language = language
    },
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('TOGGLE_DEVICE', '学习汉语')
          resolve()
        }, 3000)

      })
    }
  }
}

export default app
