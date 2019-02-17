<template>
  <div class="container">
    <div class="tab" ref='tab'>
      <span class="line" ref='line'>
      </span>
      <div v-for='(item,index) in list' :key="index" @click="changTab(index)" v-bind:class="[{ active: currentIndex === index }, 'li']">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Tab",
    data(){
      return {
        currentIndex:0,
        list:[
          'tab1','tab2','tab3'
        ]
      }
    },
    mounted(){
      const $tab = this.$refs.tab
      const $line = this.$refs.line
      $line.style.width=$tab.offsetWidth/this.list.length+'px'

    },
    methods:{
      changTab(index){
        this.currentIndex = index;
        const $tab = this.$refs.tab
        const $line = this.$refs.line
        // console.log($tab.offsetWidth)
        $line.style.transform =`translateX(${index*100}%)` 
      }
    }
}
</script>
<style lang="scss" scoped type="text/css">
.tab{
  width: 300px;
  overflow: hidden;
  display: flex;
  position: relative;
  .line{
    display: block;
    height: 3px;
    // width: 100px;
    background-color: red;
    position: absolute;
    top: 37px;
    // top: -12px;
    transition: all 0.3s ease-in-out;
  }
  .li{
    flex-grow:1;
    line-height: 40px;
    cursor: pointer;
    &.active{
      color: red;
      // border-bottom: 2px solid red;
    }
  }
  // .li:first-child{
  //   color: blue;
  // }
}
</style>

