<template>
  <div class="popup-content" v-show="visible">
    <img :src="titleUrl" class="title-img" :class="{complete: isComplete}">
    <img :src="taskUrl" class="task-img" :class="{complete: isComplete}">
    <img :src="closeUrl" class="close" @click="close">
    <div class="flex-center btn" :style="{backgroundImage: 'url('+btnUrl+')'}" @click="confirm">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    isComplete: {
      type: Boolean,
      default: false
    },
    titleUrl: String,
    taskUrl: String,
    btnUrl: String,
    closeUrl: String,
    text: String,
    confirmBtn: {
      type: String,
      default: '确认'
    }
  },
  methods: {
    close() {
      if(!this.isComplete){
        this.$emit("update:visible", false)
      } else {
        this.$emit("click-popup-btn", false)
      }
    },
    confirm() {
      this.$emit("click-popup-btn", false)
    }
  }
}
</script>
<style lang="scss" scoped>
  .popup-content {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, .8);
    .title-img {
      width: 579px;
      height: 143px;
      margin: 0 auto;
      margin-top: 255px;
    }
    .title-img.complete {
      width: 483px;
      height: 143px;
      display: block;
    
    }
    .task-img {
      width: 192px;
      height: 378px;
      margin-top: 12px;
      margin-bottom: 28px;
    }
    .task-img.complete {
      width: 240px;
      height: 276px;
      margin-top: 63px;
      margin-bottom: 79px;
    }
    .btn {
      position: relative;
      left: 50%;
      margin-left: -194px;
      background-repeat: no-repeat;
      background-size: 100% auto;
      width: 389px;
      height: 101px;

      font-size: 36px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(154,40,0,1);
      line-height: 54px;

    }
    .close {
      position: absolute;
      top: 67px;
      right: 81px;
      height: 70px;
      width: 70px;
    }
  }
</style>
