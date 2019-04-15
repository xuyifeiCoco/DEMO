<template>
  <transition name="move">
    <div class="second">
      <div @click="close" class="close">X</div>
      <div v-for='(item,index) in data' :key="index">
        <div class="tag-item">
          <div class="item-text">{{item.name}}</div>
        </div>
        <div class="divide-line"></div>
      </div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>fadsfsa</div>
      <div>哎好法拉盛</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Second",
  props:{
    data:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss" scoped>
.second {
  top:0;
  bottom:0;
  position: fixed;
  width: 100%;
  text-align: left;
  background-color: white;
  overflow-y:scroll; 
  z-index: 2000;
  overflow-x:hidden;
  &.move-enter-active,
  &.move-leave-active {
    transition: all 0.2s linear;
  }
  &.move-enter,
  &.move-leave-active {// 最开始进入和最后离开时的状态
    transform: translate3d(100%, 0, 0);
  }
  .close{
    font-size: 30px;
    padding: 6px 15px;
    border-bottom:1px solid whitesmoke
  }
  .tag-item {
    padding: 8px 15px;
    background-color: white;
    color: #333;
    display: flex;
    flex-direction: row;
  }

  .tag-item:active {
    background-color: #d8d8d8;
  }
  .item-text {
    font-size: 15px;
    line-height: 36px;
    flex: 1;
    min-height: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .divide-line {
    height: 1px;
    width: auto;
    background-color: whitesmoke;
  }
}
</style>
