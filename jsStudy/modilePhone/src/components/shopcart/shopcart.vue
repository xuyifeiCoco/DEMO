  <template>
  <div>
    <div class="shopcart">
      <div class="content" >
        <div class="content-left" @click="toggleList()">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highLight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highLight':totalCount>0}"></i>
            </div>
            <div class="number" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highLight':totalPrice>0}">
            ￥{{totalPrice}}
          </div>
          <div class="desc">
            另需配送费￥{{deliveryPrice}}元
          </div>
        </div>
        <div class="content-right" @click.stop="pay()">
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
        <div class="ball-container">
          <transition name="drop"
                      @before-enter="dropBeforeEnter"
                      @enter="dropEnter"
                      @after-enter="dropAfterEnter" v-for="ball in balls" key="ball">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
        <transition name="fold">
          <div class="shopcart-list" v-show="fold">
            <div class="list-header">
              <h1 class="title">购物车</h1>
              <span class="empty" @click="empty()">清空</span>
            </div>
            <div class="list-content" ref="listcotent">
              <ul>
                <li class="food" v-for="food in selectFoods">
                  <span class="name">{{ food.name }}</span>
                  <div class="price">￥{{ food.price * food.count }}</div>
                  <div class="cartcontrol-wrapper">
                    <carContral :food="food" @addCart="drop"></carContral>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <transition name="mask">
        <div class="list-mask" v-show="fold" @click="fold=false"></div>
    </transition>
  </div>

</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import CarContral from '../carContral/carContral'
export default {
  props:{
    deliveryPrice:{
      type:Number,
      default:0
    },
    minPrice:{
      type:Number,
      default:0
    },
    selectFoods:{
      type:Array,
      default() {
          return [ ];
      }
    }
  },
  data() {
    return{
      balls:[
        {
          show:false
        },
        {
          show:false
        },
        {
          show:false
        },
        {
          show:false
        },
        {
          show:false
        }
      ],
      dropBall:[ ],
      fold:false/*折叠*/
    }
  },
  computed:{
//    listShow() {
//      if(!this.totalCount){
//        this.fold=true;
//        return false;
//      }
//      let show=!this.fold;
//      if(show){
//          this.$nextTick(() => {
//              if(!this.scroll){
//                this.scroll =new BScroll(this.$refs.listcotent,{
//                  click:true
//                })
//              }else{
//                  this.scroll.refresh()
//              }
//          })
//      }
//      return show;
//    },
    totalPrice() {
        let total=0;
        this.selectFoods.forEach((food) => {
            total+=food.price*food.count
        });
        return total
    },
    totalCount() {
      let count=0;
      this.selectFoods.forEach((food) => {
        count+=food.count
      });
      return count
    },
    payDesc() {
        if(this.totalPrice===0){
          return `￥${this.minPrice}元起送`
        }else if(this.totalPrice<this.minPrice){
          let diff=this.minPrice-this.totalPrice
          return `还差￥${diff}元起送`;
        }else {
            return '去结算'
        }
    },
    payClass() {
        if(this.totalPrice<this.minPrice){
            return 'not-enough'
        }else{
            return 'enough'
        }
    }

  },
  methods:{
    pay() {
      if(this.totalPrice<this.minPrice){
          return false
      }else{
          alert(`需要支付${this.totalPrice}元`)
          this.empty()
      }
    },
    empty() {
      this.selectFoods.forEach((food) => {
          food.count=0;
          this.fold=false;
      })
    },
    toggleList() {
        console.log(this.fold)
      if(!this.totalCount){
          return;
      }else{
        this.fold=!this.fold;
        if(this.fold){
          this.$nextTick(() => {
              if(!this.scroll){
                this.scroll =new BScroll(this.$refs.listcotent,{
                  click:true
                })
              }else{
                  this.scroll.refresh()
              }
          })
        }
      }
    },
    drop(el) {
      for(let i=0;i<this.balls.length;i++){
        let ball=this.balls[i]
        if(!ball.show){
          ball.show=true;
          ball.el=el;
          this.dropBall.push(ball);
          return
        }
      }
    },
    dropBeforeEnter(el) {
      let count=this.balls.length;
      while (count--){
          //一定要注意区别引号和波浪线下面的那个引号的区别
          let ball=this.balls[count];
          if(ball.show){
            let rect=ball.el.getBoundingClientRect();
            let x=rect.left-32;
            let y=-(window.innerHeight-rect.top-22);
            el.style.display='';
            el.style.webkitTransform=`translate3d(0,${y}px,0)`;
            el.style.transform=`translate3d(0,${y}px,0)`;
            let inner=el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform=`translate3d(${x}px,0,0)`;
            inner.style.transform=`translate3d(${x}px,0,0)`;
          }
      }
    },
    dropEnter(el, done) {
      /* eslint-disable no-unused-vars */
        let rf= el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform='translate3d(0,0,0)';
          el.style.transform='translate3d(0,0,0)';
          let inner=el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform='translate3d(0,0,0)';
          inner.style.transform='translate3d(0,0,0)';
          el.addEventListener('transitionend',done);
        });
    },
    dropAfterEnter (el) {
        let ball =this.dropBall.shift();
        if(ball){
          ball.show=false;
          el.style.display='none'
        }
    }
  },
  components:{
    CarContral
  }
}

</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/styles/common";
  @import "../../common/styles/style.css";
  .shopcart{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    .content{
      display: flex;
      background: #141d27;
      .content-left{
          flex: 1;
        font-size: 0;
        .logo-wrapper{
          display: inline-block;
          position: relative;
          top: -10px;
          margin: 0 10px;
          padding: 6px;
          width:56px;
          height: 56px;
          box-sizing: border-box;
          vertical-align: top;
          border-radius: 50%;
          background: #141d27;
          .logo{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #2b343c;
            text-align: center;
            &.highLight{
              background: rgb(0,160,220);
            }
            .icon-shopping_cart{
              font-size: 24px;
              color: #80858a;
              line-height: 44px;
              &.highLight{
                color: #ffffff;
              }
            }
          }
          .number{
              position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 16px;
            font-size: 9px;
            font-weight: 700;
            color: white;
            background-color: red;
            box-shadow: 04px 8px 0 rgba(0,0,0,0.4);
          }
        }
        .price{
          display: inline-block;
          line-height: 24px;
          vertical-align: top;
          margin-top: 12px;
          box-sizing: border-box;
          padding-right: 12px;
          border-right: 1px solid rgba(255,255,255,0.1);
          font-size: 16px;
          font-weight: 700;
          color:rgba(255,255,255,0.4) ;
          &.highLight{
            color: #ffffff;
          }
        }
        .desc{
          display: inline-block;
          vertical-align: top;
          line-height: 24px;
          margin: 12px 0 0 12px;
          font-size: 10px;
          font-weight: 700;
          color:rgba(255,255,255,0.4);
        }
      }
      .content-right{
        text-align: center;
        flex: 0 0 105px;
        width: 105px;
        .pay{
          height: 48px;
          line-height: 48px;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          font-weight: 700;
          &.not-enough{
            background: #2b333b;
          }
          &.enough{
            background: #00b43c;
            color: white;
          }
        }
      }
      .ball-container {
        .ball {
          position: fixed;
          left: 32px;
          bottom: 22px;
          z-index: 200;
          // transition: all .4s cubic-bezier(.49, -.29, .75, .41);
          &.drop-enter-active {
            transition: all .4s cubic-bezier(.49, -.29, .75, .41);
            .inner {
              transition: all .4s linear;
            }
          }
          .inner {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: rgb(0, 160, 220);
            // transition: all .4s linear;
          }
        }
      }
      .shopcart-list{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        transform: translate3d(0,-100%,0);
        &.fold-enter-active,&.fold-leave-active{
          transition: all 0.5s;
        }
        &.fold-enter, &.fold-leave-active{
          transition: all 0.5s;
          transform: translate3d(0,0,0);
        }
        .list-header {
          height: 40px;
          line-height: 40px;
          padding: 0 18px;
          background: #f3f5f7;
          border-bottom: 1px solid rgba(7, 17, 27, .1);
          .title {
            float: left;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
          .empty {
            float: right;
            font-size: 12px;
            color: rgb(0, 160, 220);
          }
        }
        .list-content {
          padding: 0 18px;
          max-height: 217px;
          background: #fff;
          overflow: hidden;
          .food {
            position: relative;
            padding: 12px 0;
            box-sizing: border-box;
            @include border-1px(rgba(7, 17, 27, .1));
            .name {
              line-height: 24px;
              font-size: 14px;
              color: rgb(7, 17, 27);
            }
            .price {
              position: absolute;
              right: 90px;
              bottom: 12px;
              line-height: 24px;
              font-weight: 700;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .cartcontrol-wrapper {
              position: absolute;
              bottom: 6px;
              right: 0;
            }
          }
        }
      }
    }
  }
  .list-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    transition: all 0.5s ease;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: rgba(7,17,27,0.6);
    &.mask-active,&.mask-leave-active{
      transition: all 0.5s ease;
    }
    &.mask-enter, &.mask-leave-active{
      opacity: 0;
      background: rgba(7,17,27,0);
    }
  }
</style>
