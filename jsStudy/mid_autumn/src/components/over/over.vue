<template>
  <div class="over-content" v-show="visible">
    <div class="close" @click="closeOver"></div>
    <div class="over-body">
      <div class="over-message" v-html="message"></div>
      <div class="flex-center btn">{{btnText}}</div>
    </div>
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
    message: String,
    btnText: String
  },
  methods: {
    closeOver() {
      this.$emit("update:visible", false)
    }
  }
}
</script>
<style lang="scss" scoped>
  .over-content {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    .close {
      background: url('../close.png') 0 0 no-repeat;
      background-size: 100% auto;
      height: 70px;
      width: 70px;
      position: absolute;
      right: 82px;
      top: 217px;
      z-index: 2;
    }
    .over-body {
      position: absolute;
      top: 251px;
      left: 50%;
      margin-left: -346px;
      background: url('./over_bg.png') 0 0 no-repeat;
      background-size: 100% auto;
      height: 669px;
      width: 692px;
      padding-top: 254px;
    }
    .btn {
      position: relative;
      left: 50%;
      font-size:36px;
      font-family:PingFangSC-Semibold;
      font-weight: 600;
      color:rgba(255,255,255,1);
      line-height: 54px;
      margin-left: -198px;
      margin-top: 60px;
      background: url('./btn_bg.png') 0 0 no-repeat;
      background-size: 100% auto;
      height: 101px;
      width: 389px;
    }
    .over-message {
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:46px;
      padding: 0 112px;
      margin-top: 54px;
      text-align: center;
      p {
        padding: 0;
        margin: 0;
        text-align: left;
      }
    }
  }
</style>
