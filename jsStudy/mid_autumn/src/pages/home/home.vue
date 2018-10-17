<template>
  <div class="content">
    <div class="detail" @click="showRule"></div>
    <div class="flex-center count-down">
      <div class="bg left"></div>
      <div class="center">
        <template v-if="!isOver">
          <span class="title">距离结束还有</span>
          <span class="flex-center days">{{days}}</span>
          <span class="unit">天</span>
        </template>
        <template v-else>
          <span class="title">活动已结束</span>
        </template>
      </div>
      <div class="bg right"></div>
    </div>
    <div class="barrage">
      <div class="barrage-item" :class="'item-' + index" v-for="(item, index) in dataList">
        <img :src="item.head_image">
        <span class="barrage-detail">{{item.content}}</span>
      </div>
    </div>
    <div class="bottom">
      <div class="moon">你的嫦娥正在奔月...</div>
      <div class="has-moon">已有<span class="num">{{userNums}}人</span>参与嫦娥奔月活动</div>
      <div class="flex-center btn-help" @click="downApp" v-if="isWX">
        <span>打开美篇参与活动</span>
      </div>
      <div class="flex-center btn-help" :class="isDisabled || isOver? 'disabled' : ''" @click="joinTask" v-else>
        <span>帮她一</span>
      </div>
      <div class="share-btn" @click="shareFriend" v-if="inApp">分享给好友参与</div>
    </div>
    <Dialog :visible.sync="isShowDialog" :message="dialogMessage" @goSet="goSet"></Dialog>
    <Rule :visible.sync="isShowRule"></Rule>
    <Over :visible.sync="isShowOver" :message="overMessage" btnText="知道了"></Over>
    
  </div>
</template>
<style lang="scss">
  .music {
    position: absolute;
    top: 38px;
  }
</style>

<style lang="scss" scoped>
  @keyframes translateX {
    0%{ 
      transform: translateX(0);
    }
    100%{
      transform: translateX(-11920px);
    }
  }   
  .content {
    font-family:PingFang-SC-Heavy;
    position: relative;
    height: 100%;
    width: 100%;
    background: url(./img/home_bg.png) 0 0 no-repeat;
    background-size: 100% auto;
    background-color: #221644;
    overflow: hidden;
    .detail {
      position: absolute;
      left: -46px;
      top: 50px;
      height: 50px;
      width: 189px;
      background: url(./img/detail.png) 0 0 no-repeat;
      background-size: auto 100%;
    }
    .count-down {
      padding-top: 275px;
      font-size: 30px;
      color: rgba(255,255,255,1);
      font-weight: 800;
      line-height: 53px;
      .bg {
        background-size: 100% auto;
        height: 4px;
        width: 123px;
      }
      .left {
        background: url(./img/left.png) 0 0 no-repeat;
      }
      .right {
        background: url(./img/right.png) 0 0 no-repeat;
      }
      .center {
        padding: 0 10px;
        .days {
          width: 31px;
          height: 38px;
          background: rgba(38,24,70,1);
          border-radius: 4px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          line-height: 53px;
          margin: 0 9px;
        }
      }
    }
     
    .barrage {
      position: relative;
      margin-top: 15px;
      height: 400px;
      .barrage-item {
        position: absolute;
        background: rgba(255,255,255,1);
        opacity: 0.5;
        border-radius: 22px;
        display: inline-flex;
        align-items: center;
        padding: 6px;
        padding-right: 15px;
        animation:translateX 80s linear infinite;
        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          border: 1px solid #fff;
          margin-right: 10px;
        }
      }
      @for $i from 0 to 100 {
        .item-#{$i} {
          @if $i%3 == 0 { 
            right: -(500px + $i*300);
            top: 10%; 
          }
          @if $i%3 == 1 { 
            right: -(700px + $i*300);
            top: 50%; 
          }
          @if $i%3 == 2 { 
            right: -(600px + $i*300);
            top: 90%; 
          }
        }
      }
      .item-0 {
        right: -500px;
        top: 10%;
      }
      .item-1 {
        right: -700px;
        top: 50%;
      }
      .item-2 {
        right: -600px;
        top: 90%;
      }
    }
    .bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      color:rgba(255,255,255,1);
      .moon {
        font-family:PingFangSC-Semibold;
        font-size: 36px;
        font-weight: 600;
        line-height: 54px;
        margin-bottom: 32px;
      }
      .has-moon {
        font-family:PingFangSC-Regular;
        font-size: 28px;
        font-weight:400;
        margin-bottom: 33px;
        .num {
          color: RGBA(255, 232, 48, 1);
        }
      }
      .btn-help {
        height: 100px;
        width: 390px;
        background: url(./img/btn-bg.png) 0 0 no-repeat;
        background-size: auto 100%;
        margin: 0 auto 30px;
        span {
          font-size: 36px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          color :rgba(154,40,0,1);
          line-height: 54px;
        }
        &.disabled {
          background: url(./img/btn-bg-disabled.png) 0 0 no-repeat;
          background-size: 100% auto;
          span {
            color:rgba(70,70,70,1);
          }
        }
      }
      .share-btn {
        font-size: 28px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255,234,48,1);
        line-height: 54px;
        margin-bottom: 30px;
      }
    }
  }
</style>

<script>
import Dialog from "@/components/dialog/dialog.vue"
import Rule from "@/components/rule/rule.vue"
import Over from "@/components/over/over.vue"
import { isWX, wxConfig } from '@/common/util'
import ajax from '@/common/service/api'
const $ = require("jquery")

export default {
  components: {
    Dialog,
    Rule,
    Over
  },
  data() {
    return {
      inApp: false, //是否在app内
      hasClick: false,
      isShowDialog: false, 
      dialogMessage: '你还未绑定手机号或微信，活动奖励无法发放，请绑定手机号后参与活动哟~',
      isShowRule: false,
      isShowOver: false,
      overMessage: '<p>很抱歉，你来的太晚，</p><p>红包都被小伙伴抢光啦......<p>',
      userNums: 0,
      user_id: 1000,
      days: 0,
      dataList: [],
      isDisabled: true,
      isOver: false,
      isWX: isWX,
      shareArr: [
        {title: '嫦娥@你，快来帮人家奔月啦！', detail: '每天迈一步，成功赚现金红包'},
        {title: '宝贝儿，你怎么舍得我难过……', detail: '嫦娥的事靠你了，成功送现金红包'},
        {title: '中秋送什么？送嫦娥上天啊！', detail: '奔月太刺激，成功赏现金红包哦'}
      ]
    }
  },
  created() {
    if(isWX){
      this.getWechatInfo()
      this.sendLoger({
        event_type: "view",
        event_src: "h5_by_show",
        unionid:'',
        openid: "",
        user_id: ''
      })
    } else {
      this.appSendLog('by_hd', 'by_show')
    }
  },
  mounted(){
    let _this = this
    if (window.meipian) {
      meipian.getUserInfo(function (res) {
        if (res.id == 1000) {
          meipian.gotoUserLoginPage()
        } else {
          if (!res.phoneNumber){
            _this.isShowDialog = true
          } else {
            _this.isDisabled = false
            _this.user_id = res.id
            _this.getStatistics()
            _this.getBullets()
          }
        }
        _this.inApp = true
      })
    }
    if(NODE_ENV == 'server' || isWX){
      _this.isDisabled = false
      this.getStatistics()
      this.getBullets()
    }
  },
  methods: {
    showRule() {
      this.isShowRule = true
    },
    //设置手机号  
    goSet(){
      this.isShowDialog = false
      if (window.meipian) {
        meipian.generalRoute({
          uri: 'meipian://meipian/home?tab=4'
        })
      }
    },
    //下载
    downApp(){
      this.sendLoger({
        event_type: "click",
        event_src: "mp_cyhd_click",
        unionid:'',
        openid: "",
        user_id: ''
      })
      location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.lanjingren.ivwen&ckey=CK1406916923930'
    },
    //分享
    shareFriend(){
      this.appSendLog('by_hd', 'fx_click')
      if (window.meipian) {
        let index = Math.floor(Math.random()*3)
        meipian.showShareBoard({
          title: this.shareArr[index].title,
          brief: this.shareArr[index].detail,
          desc: this.shareArr[index].detail,
          image: 'https://ss2.meipian.me/promo/mid_autumn/img/mid_autumn.png',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname
        }, function (data) {})
      }
    },
    joinTask(){
      if(this.hasClick || this.isDisabled){
        return false
      }
      this.appSendLog('by_hd', 'btyb_click')

      this.hasClick = true
      let _this = this
      ajax({
        url: 'promo/mid_autumn/api/participate',
        data: {
          user_id: _this.user_id
        },
        ok(res) {
          if (res.data.code === 0) {
            _this.$router.push({path: '/detail'}) 
          }
          _this.hasClick = false
        }
      })
    },
    getStatistics(){
      let _this = this
      ajax({
        url: 'promo/mid_autumn/api/statistics',
        ok(res) {
          if (res.data.code == 0) {
            _this.userNums = res.data.data.users
            _this.days = res.data.data.days
          } else if(res.data.code == 1005){
            _this.isOver = true
          }
        }
      })
    },
    //弹幕
    getBullets(){
      let _this = this
      ajax({
        url: 'promo/mid_autumn/api/bullets',
        data: {
          user_id: _this.user_id,
          size: 50
        },
        ok(res) {
          if (res.data.code === 0) {
            let data = res.data.data
            if(data.length < 100){
              data = data.concat(data)
            }
            // conso
            _this.dataList = [...data,...data,...data]
          }
        }
      })
    },
    getWechatInfo(){
      let _this = this
      ajax({
        url: 'promo/mid_autumn/api/shareParams',
        data: {
          url: window.location.protocol + '//' + window.location.host + window.location.pathname
        },
        ok(res) {
          if (res.data.code === 0) {
            let data = res.data.data
            let index = Math.floor(Math.random()*3)
            wxConfig({ // 微信配置
              appId: data.appid,
              title: _this.shareArr[index].title,
              link: window.location.protocol + '//' + window.location.host + window.location.pathname,
              coverThumb: 'https://ss2.meipian.me/promo/mid_autumn/img/mid_autumn.png',
              abstractShare: _this.shareArr[index].detail,
              timestamp: data.timestamp,
              nonceStr: data.noncestr,
              signature: data.signature
            })
          }
        }
      })
      
    }
  }
}
</script>

