<template>
  <div class="rule-content" v-show="visible">
    <div class="close" @click="closeRule"></div>
    <div class="rule-body">
      <div class="title"></div>
      <div class="rule-message">
        <p>1.活动时间2018年9月19日（00:00:00）至2018年9月25日（23:59:59）；</p>
        <p>2.帮嫦娥登月，按提示做任务，完成任务可前进一步，每天最多可前进一步；</p>
        <p>3.成功前进4步奖励3元红包，现金将发到该用户的美篇钱包，点击【我的】-【我的钱包】查看奖励，红包限量20000个，先到先得哦；</p>
        <p>4.若用户存在违规行为，美篇将取消用户的中奖资格，并有权收回奖励；</p>
        <p>5.参与活动前需绑定手机号或微信号，单用户仅可领取一次奖励，单用户是指微信号、手机号、美篇号等与用户身份相关的信息，其中任一一项存在相同的用户；</p>
        <p>6.美篇拥有活动最终解释权。</p>
      </div>
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
    message: String
  },
  methods: {
    closeRule() {
      this.$emit("update:visible", false)
    }
  }
}
</script>
<style lang="scss" scoped>
  .rule-content {
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
      height: 62px;
      width: 62px;
      position: absolute;
      right: 116px;
      top: 36px;
      z-index: 2;
    }
    .rule-body {
      position: absolute;
      top: 67px;
      left: 50%;
      margin-left: -307px;
      background: url('./rule_bg.png') 0 0 no-repeat;
      background-size: 100% auto;
      height: 997px;
      width: 613px;
      padding-top: 207px;
    }
    .title {
      position: relative;
      left: 50%;
      margin-left: -117px;
      background: url('./rule_title.png');
      background-size: 100% auto;
      height: 64px;
      width: 235px
    }
    .rule-message {
      font-size:23px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color:rgba(51,51,51,1);
      line-height: 41px;
      padding: 0 90px;
      margin-top: 36px;
      text-align: center;
      p {
        padding: 0;
        margin: 0;
        text-align: left;
      }
    }
  }
</style>
