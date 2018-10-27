<template>
  <div class="carControl">
      <transition name="drop">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop="decreaseCart()">
          <i class="icon-remove_circle_outline inner"></i>
        </div>
      </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop="addCart($event)"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default{
      props:{
          food:{
            type:Object
          }
      },

      created() {
//          console.log(this.food )
      },
    methods:{
      addCart(event) {
        if(!event._constructed){
          return
        }
        if(!this.food.count){
            Vue.set(this.food,'count',1)
        }else{
            this.food.count++
        }
        this.$emit('addCart',event.target)
      },
      decreaseCart() {
        if(!event._constructed){
          return
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .carControl{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      padding: 6px;
      transition: all 0.4s;
      &.drop-enter-active{
        transition: all 0.4s ease;
        transform: translate3D(0,0,0);
      }
      &.drop-leave-active{
        transition: all .4s ease;
        transform: translate3D(0,0,0);
      }
      &.drop-enter,&.drop-leave-active{
        opacity: 0;
        transform: translate3D(24px,0,0);
      }
      .inner{
        display: inline-block;
        font-size: 24px;
        line-height: 24px;
        color:rgb(0,160,220);
        transform: rotate(0);
      }
    }
    .cart-count{
      display: inline-block;
      width: 12px;
     vertical-align: top;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147,153,159);
    }
    .cart-add{
      display: inline-block;
      padding: 6px;
      font-size: 24px;
      line-height: 24px;
      color:rgb(0,160,220)
    }
  }
</style>
