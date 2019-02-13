// types.js

import {getTypes} from '@/api/demo' // ajax

export default {

  data () {

    return {

      types: [] // ==> {name: '', value: ''}

    }

  },

  methods: {

    // 获取列表

    getAllTypesList () {

      getApiList().then((result) => {

        // todo

        this.types = result // 假设result就是我们需要使用的数据

      }).catch((err) => {

        console.error(err)

      })

    }

  },

  created() {

    // 在需要使用这个mixins的时候取自动请求数据 这个可要可不要 你想在父组件中执行也是ok的

    this.getAllTypesList()

  }

}