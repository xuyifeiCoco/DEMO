<template>
  <div class="app">
    <div class="header">
      <v-header :seller="seller"></v-header>
    </div>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path: '/goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: '/ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: '/seller'}">商品</router-link>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view :seller="seller"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/header'
import {urlParse} from 'common/js/util';
const ERR_OK=0;
export default {
  components:{
      vHeader: Header
  },
  data  () {
      return {
          seller:{ }
      }
  },
  created() {
     this.$http.get('/api/seller').then((response) => {
         response = response.data;
         if (response.errno === ERR_OK) {
             // 相当于 extend方法 扩展  es6语法   vue推荐的给对象扩展属性方法
             this.seller = response.data;
         }
     })
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  @import 'common/styles/_common';
  .app{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgb(240,20,20));
      .tab-item{
        flex: 1;
        text-align: center;
        a{
          display: block;
          font-size: 14px;
          color: rgb(77,85,93);
        }
        a.active{
          color: red;
        }
      }
    }
  }
</style>

