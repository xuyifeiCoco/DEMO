<template>
  <div>
    mixns
  </div>
</template>
<script>
import mixin from '@/mixins/list' // 引入

// import {getList} from '@/api/demo'

export default {

  name: 'mixins-demo',

  mixins: [mixin], // 使用mixins

  data () {

    return {

    }

  },

  methods: {

    // 加载列表

    load () {

      const para = {

      }

      this.loading = true

      // getList(para).then((result) => {

      //   this.listSuccessCb(result).then((list) => {

      //     this.list = list

      //   }).catch((err) => {

      //     console.log(err)

      //   })

      // }).catch((err) => {

      //   this.listExceptionCb(err)

      // })

    }

  },

  created() {

    this.load()

  }

}
</script>

