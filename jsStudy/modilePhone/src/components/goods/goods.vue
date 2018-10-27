<link rel="stylesheet" href="../../common/styles/style.css">
<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuwrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item menu-item-hook" :class="{'current':currentIndex==index}" @click="selectMenu(index,$event)">
            <span class="text border-1px">
              <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
    </div>
    <div class="foods-wrapper" ref="foodswrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook" >
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px" @click="_selectfood(food,$event)">
              <div class="icon">
                <img :src="food.icon" alt="" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                    <span class="now">￥{{food.price}}</span><span v-show="food.oldPrice" class="old">{{food.oldPrice}}</span>
                </div>
                <div class="cartControl-wrapper">
                  <carContral :food="food" @addCart="addcart" ></carContral>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
      <shopcart :delivery-price="seller.deliveryPrice"
              :min-price="seller.minPrice"
              :select-foods="selectFoods"
              ref="shopcart"
              >
    </shopcart>
    <food :food="selectedFood" ref="selefood" @addCart="addcart"></food>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import Shopcart from '../shopcart/shopcart'
  import CarContral from '../carContral/carContral'
  import Food from '../food/food'
  const ERR_Ok=0;
  export default {
      props:{
          seller:{
              type:Object
          }
      },
      data() {
        return {
            goods: [ ],
            listHeight:[],
            menuList:[],
            scrollY:0,
            munuY:0,
            selectedFood:{}
        }
      },
      computed: {
      currentIndex() {
        for (let i=0; i<this.listHeight.length; i++){
            let height1=this.listHeight[i];
            let height2=this.listHeight[i+1];
            if(!height2||(this.scrollY+1>=height1&&this.scrollY<height2)){
                this.meunScroll.scrollTo(0,this.menuList[i],300);
                return i;
            }
        }
        return 0
      },
      selectFoods() {
          let foods=[ ];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
      created() {
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if(response.errno===ERR_Ok){
          this.goods=response.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
            this._camenuList()
          })
        }
      });
       this.classMap=['decrease','discount','special','invoice','guarantee','special'];
    },
    methods: {
      _selectfood(food,event) {
        if(!event._constructed){
            return false
        }
        this.selectedFood=food;
        this.$refs.selefood.show();
      },
      addcart(target) {
          //体验优化，异步执行下落动画
          this.$nextTick(() => {
            this.$refs.shopcart.drop(target);
          })
      },
      selectMenu(index,event) {
      //  event._constructed 只有安卓端才有这个属性
        if(!event._constructed){
            return ;
        }
        let foodList=this.$refs.foodswrapper.getElementsByClassName('food-list-hook');
        let el=foodList[index];
        this.foodScroll.scrollToElement(el,300);
      },
      _initScroll(){
          this.meunScroll=new BScroll(this.$refs.menuwrapper,{
              click:true,
              probeType: 3
          });
          this.foodScroll=new BScroll(this.$refs.foodswrapper,{
            click:true,
             probeType: 3
          });
          this.foodScroll.on('scroll',(pos) => {
              this.scrollY=Math.abs(Math.round(pos.y))
          });
          this.meunScroll.on('scroll',(pos) => {
             this.menuY=Math.abs(Math.round(pos.y))
          });
      },
      _calculateHeight() {
          let foodList=this.$refs.foodswrapper.getElementsByClassName('food-list-hook');
          let height=0;
          this.listHeight.push(height);
          for(let i=0;i<foodList.length;i++){
              let item=foodList[i];
              let client=item.clientHeight;
              if(i==2){
                client--
              }
              height+=client;
              this.listHeight.push(height);
          }
      },
      _camenuList() {
        let menuList=this.$refs.menuwrapper.getElementsByClassName('menu-item-hook');
        for(let i=0;i<menuList.length;i++){
            if(i<=7){
              this.menuList.push(0)
            }else{
                this.menuList.push(-35*(i-7))
            }
        }
      }
    },
    components:{
          Shopcart,
          CarContral,
          Food
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/styles/common";
  @import "../../common/styles/style.css";
.goods{
  display: flex;
  position: absolute;
  width: 100%;
  top: 174px;
  bottom: 46px;
  overflow: hidden;
  .menu-wrapper{
    flex:0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item{
      display: table;
      height: 54px;
      width: 56px;
      line-height: 14px;
      padding: 0 12px;
      &.current{
        position: relative;
        z-index: 10;
        background-color: #fff;
        margin-top: -1px;
        font-weight: 700;
        .text{
          @include border-none()
        }
      }
      .icon{
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        &.decrease{
          @include bg-image('decrease_3')
        }
        &.discount{
          @include bg-image('discount_3')
        }
        &.guarantee{
          @include bg-image('guarantee_3')
        }
        &.invoice{
          @include bg-image('invoice_3')
        }
        &.special{
          @include bg-image('special_3')
        }
      }
      .text{
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;
        @include border-1px(rgba(7,17,27,0.1))
      }
    }
  }
  .foods-wrapper{
    flex: 1;
    .title{
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dee1;
      font-size: 12px;
      color: rgb(147,153,159);
      background: #f3f5f7;
    }
    .food-item{
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      @include border-1px(rgba(7,17,27,0.1));
      &:last-child{
        @include border-none();
        margin-bottom: 0;
      }
      .icon{
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .content{
        flex: 1;
        .name{
          margin: 2px 0 8px 0;
          height: 17px;
          line-height: 17px;
          font-size: 14px;
          color: rgb(7,17,27);
        }
        .desc,.extra{
          line-height: 10px;
          font-size: 10px;
          color: (147,153,159);
        }
        .desc{
          margin-bottom: 8px;
          line-height: 14px;
        }
        .extra{
          .count{
            margin-right: 12px;
          }
        }
        .price{
          font-weight: 700;
          line-height: 24px;
          .now{
            margin-right: 8px;
            font-size: 14px;
            color: red;
          }
          .old{
              text-decoration: line-through;
            font-size: 10px;
            color: rgb(147,153,159);
          }
        }
        .cartControl-wrapper{
          position: absolute;
          right: 0;
          bottom: 12px;

        }
      }
    }
  }
}
</style>
