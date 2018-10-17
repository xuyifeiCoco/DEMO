<template>
  <div class="complete-content" v-show="visible">
    <div class="complete-body">
      <div class="line-1">你是第<span class="nums">{{ranking}}</span>个帮助嫦娥奔月成功的侠士!</div>
      <div class="line-2">嫦娥超开心，特奉红包</div>
      <div class="line-3">3元</div>
      <div class="line-4">已存入美篇钱包</div>
      <div class="flex-center btn" @click="closeComplete">知道了</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Complete',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    ranking: Number
  },
  methods: {
    closeComplete() {
      this.$emit("update:visible", false)
    }
  }
}
</script>
<style lang="scss" scoped>
  .complete-content {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    .complete-body {
      position: absolute;
      top: 229px;
      left: 50%;
      margin-left: -286px;
      background: url('./complete_bg.png') 0 0 no-repeat;
      background-size: 100% auto;
      height: 837px;
      width: 572px;
      padding-top: 330px;
      div {
        text-align: center;
      }
      .line-1 {
        font-size: 28px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,236,134,1);
        line-height: 53px;
        margin-bottom: 44px;
        .nums {
          color: #fff;
        }
      }
      .line-2 {
        font-size: 30px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color:rgba(255,236,134,1);
        line-height: 53px;
        margin-bottom: 36px;
      }
      .line-3 {
        font-size: 72px;
        font-family:PingFang-SC-Bold;
        font-weight: bold;
        color:rgba(255,236,134,1);
        line-height: 53px;
        margin-bottom: 39px;
      }
      .line-4 {
        font-size: 30px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height: 53px;
        margin-bottom: 28px;
      }
      .btn {
        position: relative;
        left: 50%;
        margin-left: -198px;
        background: url('./complete_btn.png') 0 0 no-repeat;
        background-size: 100% auto;
        height: 112px;
        width: 389px;

        font-size:36px;
        font-family:PingFangSC-Semibold;
        font-weight: 600;
        color:rgba(154,40,0,1);
        // line-height:54px;
      }
    }
  }
</style>
