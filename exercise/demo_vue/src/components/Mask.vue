<template>
  <!-- 服务-模态层弹窗 -->
  <div
    class="popup service"
    :class="serviceClass"
    @touchmove.stop.prevent="discard"
  >
    <!-- 遮罩层 -->
    <div class="mask" @click="close"></div>
    <div class="layer" :style="layerStle()" ref="layer">
      <slot name="content"></slot>
      <span @click="close">
        <slot name="footer"></slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MaskPopup",
  props: {
    height: {
      type: Number,
      default: 300
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      serviceClass: "" //服务弹窗css类，控制开关动画
    };
  },
  watch: {
    visible(newValue, oldValue) {
      if (newValue === true) {
        this.showService();
      } else {
        this.hideService();
      }
    }
  },
  methods: {
    close(){
      this.$emit('close',false)
    },
    hideService() {
      this.serviceClass = "hide"
      setTimeout(() => {
        this.serviceClass = "none";
      }, 200);
    },
    layerStle() {
      return {
        bottom: `-${this.height}px`,
        height: this.height + "px"
      };
    },
    //服务弹窗
    showService() {
      this.serviceClass = "show";
    },
    discard() {}
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@keyframes showPopup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hidePopup {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes showLayer {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
@keyframes hideLayer {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.popup {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: none;
  .mask {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 21;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .layer {
    position: fixed;
    z-index: 22;
    // bottom: -50%;
    width: 92%;
    padding: 0 4%;
    // height:50%;
    border-radius: 20px 20px 0 0;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .content {
      width: 100%;
      padding: 20px 0;
    }
    .btn {
      width: 100%;
      height: 50px;
      .button {
        width: 100%;
        height: 40px;
        border-radius: 40px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f47952;
        font-size: 14px;
      }
    }
  }

  &.show {
    display: block;
    .mask {
      animation: showPopup 0.2s linear both;
    }
    .layer {
      animation: showLayer 0.2s linear both;
    }
  }
  &.hide {
    display: block;
    .mask {
      animation: hidePopup 0.2s linear both;
    }

    .layer {
      animation: hideLayer 0.2s linear both;
    }
  }
  &.none {
    display: none;
  }
  &.service {
    .row {
      margin: 30upx 0;
      .title {
        font-size: 30upx;
        margin: 10upx 0;
      }
      .description {
        font-size: 28upx;
        color: #999;
      }
    }
  }
  &.spec {
    .title {
      font-size: 30upx;
      margin: 30upx 0;
    }
    .sp {
      display: flex;
      view {
        font-size: 28upx;
        padding: 5upx 20upx;
        border-radius: 8upx;
        margin: 0 30upx 20upx 0;
        background-color: #f6f6f6;
        &.on {
          padding: 3upx 18upx;
          border: solid 1upx #f47925;
        }
      }
    }
    .length {
      margin-top: 30upx;
      border-top: solid 1upx #aaa;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20upx;
      .text {
        font-size: 30upx;
      }
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        .input {
          width: 80upx;
          height: 60upx;
          margin: 0 10upx;
          background-color: #f3f3f3;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          input {
            width: 80upx;
            height: 60upx;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 26upx;
          }
        }

        .sub,
        .add {
          width: 60upx;
          height: 60upx;
          background-color: #f3f3f3;
          border-radius: 5upx;
          .icon {
            font-size: 30upx;
            width: 60upx;
            height: 60upx;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>

