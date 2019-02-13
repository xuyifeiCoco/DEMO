<template>
  <div id="app">
    <ul>
      <template v-for='(item , index) in routerArray'>
        <router-link tag="li" :to="item.path" v-bind:class="{ 'red': $route.path===item.path}" :key="index">
          {{item.value}}
        </router-link>
      </template>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      routerArray:[
        {
          path:'/Axios',
          value:'请求'
        },
         {
          path:'/sass',
          value:"sass"
        },
        {
          path:'/video',
          value:"原生组件"
        },
        {
          path:'/qianxi',
          value:"百度迁徙"
        },
        {
          path:'/tab',
          value:"tab导航"
        }
      ]
    }
  },
  mounted(){
    // console.log(this.$route)
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  overflow: hidden
}
ul li{
  float: left;
  cursor: pointer;
  list-style: none;
  margin-right: 30px;
}
.red{
  color: red;
}
</style>
