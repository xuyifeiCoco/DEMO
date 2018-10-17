<template>
  <div class="dialog-content" v-show="visible">
    <div class="dialog-body">
      <div class="dialog-message">{{message}}</div>
      <div class="flex-center dialog-bottom">
        <div class="flex-center cancel-btn" @click="cancel">{{cancelBtn}}</div>
        <div class="flex-center confirm-btn" @click="confirm">{{confirmBtn}}</div>
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
    message: String,
    cancelBtn: {
      type: String,
      default: '取消'
    },
    confirmBtn: {
      type: String,
      default: '去绑定'
    }
  },
  methods: {
    cancel() {
      this.$emit("update:visible", false)
    },
    confirm() {
      this.$emit("goSet")
    }
  }
}
</script>
<style lang="scss" scoped>
  .dialog-content {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    .dialog-body {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -270px;
      margin-top: -180px;
      background-color: #fff;
      width: 540px;
      border-radius: 32px;
      .dialog-message {
        font-size: 36px;
        font-family:PingFang-SC-Bold;
        padding: 50px;
        font-weight: bold;
        color:rgba(51,51,51,1);
        line-height: 54px;
      }
      .dialog-bottom {
        border-top: 2px solid rgba(228,228,228,1);
        height:116px;
        div {
          width: 50%;
          height: 100%;
          font-size: 36px;
          font-family:PingFang-SC-Regular;
          font-weight: 400;
          line-height: 54px;
        }
        .cancel-btn {
          color:rgba(153,153,153,1);
          position: relative;
          &::after {
            position: absolute;
            right: 0;
            height: 100%;
            width: 2px;
            background-color: rgb(228, 228, 228);
            content: '';
          }
        }
        .confirm-btn {
          color:rgba(47,146,255,1);
        }
      }
    }
  }
</style>
