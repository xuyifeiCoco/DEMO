<template>
  <div class="content">
    <div class="step step-5" :class="[(taskStep == 5 && !isFly) ? 'active' : '']">
      <div class="moon"></div>
      <div class="rabbit"></div> 
      <div class="redpack"></div>
      <div class="flex-center cloud"> </div>
    </div>
    <template v-for="item in taskArr"> 
      <div class="step" :class="['step-'+item.step, (taskStep == item.step && !isFly) ? 'active' : '', (isFly && (taskStep - 1) == item.step) ? 'is-fly' : '', (isFlyEnd && taskStep == item.step) ? 'is-fly-end' : '', taskStep > item.step ? 'has-complete' : '']" @click="clickCloud(item.step)">
        <div class="lantern"></div>
        <div class="flex-center cloud">
          <div class="text" :class="todayTaskStatus ? 'open' : ''"> 
            <template  v-if="taskStep < item.step || (isFly && taskStep == item.step  && todayTaskStatus == 0)">待开启</template>
            <template  v-if="taskStep == item.step && todayTaskStatus == 0 && !isFly">
              <p>完成任务后</p><p>次日开启</p>
            </template>
            <template v-if="taskStep > item.step || (taskStep == item.step && todayTaskStatus == 1)">{{item.content}}</template>
          </div>
        </div>
        <!-- <div class="cloud cloud-fly" v-if="taskStep == item.step"></div> -->
      </div>
    </template>
    <div class="change" :class="'step-' + taskStep" v-show="!isFly"></div>
    <div class="hand" :class="'hand-' + taskStep" v-show="!isFly && todayTaskStatus == 1" @click="clickCloud(taskStep)"></div>
    <div class="lantern-animation" :class="'step-' + (taskStep - 1)" v-show="isFly"></div>
    <div class="fly" :class="'step-' + taskStep" style="display:none"></div>
    <div class="flower flower-left"></div>
    <div class="flower flower-right"></div>
    <router-link to="/home">
     <div class="flex-center back-home">返回活动主页</div>
    </router-link>
    <Popup :visible.sync="isShowPopup" :titleUrl="titleUrl" :taskUrl="taskUrl" :btnUrl="btnUrl" :closeUrl="closeUrl" :text="text" :isComplete="isComplete" v-on:click-popup-btn="confirmPopup"></Popup>
    <Complete :visible.sync="isShowComplete" :ranking="ranking"></Complete>
  </div>
</template>
<style lang="scss">
  .hand img {
    height: 200px;
    width: 200px;
  }
  .lantern-animation img,
  .change img {
    height: 380px;
    width: 380px;
  }
</style>

<style lang="scss" scoped>
  @mixin img {   //定义一个函数，可以通过@include调用
    position: absolute;
    background-size: 100% auto;
    height: 380px;
    width: 380px;
  }
  @mixin cloud {
    background: url(./img/cloud.png) 0 0 no-repeat;
    @include img;
    font-size:24px;
    font-family:Adobe Heiti Std R;
    flex-direction: column;
    .text {
      position: absolute;
      top: 298px;
      z-index: 2;
      text-align: center;
    }
  }
  @mixin lantern {
    background: url(./img/denglong.png) 0 0 no-repeat;
    top: 0;
    transition: all 1s;
    @include img;
  }

  .content {
    font-family:PingFang-SC-Medium;
    position: relative;
    height: 100%;
    width: 100%;
    background: url(./img/bg.png) 0 0 no-repeat;
    background-size: 100% auto;
    background-color: #221644;
    overflow: hidden;
    .fly {
      @include img;
      transition: all 2s;
      background: url(./img/change.png) 0 0 no-repeat;
      background-size: 100% auto;
      &.step-5 {
        z-index: 9;
      }
    }
    
    .step {
      position: absolute;
      height: 380px;
      width: 380px;
      &.is-fly-end {
        z-index: 9;
      }
      &.active {
        .text {
          top: 290px !important;
        }
        .text.open {
          top: 298px !important;
        }
        .lantern {
          display: none;
        }
        .cloud {
          background-image: none; 
          z-index: 10;
        }
      }
      .cloud-fly {
        transition: opacity 1s;
        opacity: 0;
        background-image: url(./img/cloud_light.png) !important;
      }
      &.is-fly-end .cloud-fly {
        opacity: 1;
      }
      &.is-fly-end {
        .lantern {
          top: 100px;
          opacity: 0;
        }
      }
      &.is-fly .lantern,
      &.is-fly .cloud {
        background-image: none !important;
      }
      &.has-complete .cloud {
        background: url(./img/cloud_light.png) 0 0 no-repeat;
        @include img;
      }
      &.has-complete .lantern {
        background: url(./img/denglong_light.png) 0 0 no-repeat;
        @include img;
      }
    }
    .hand {
      position: absolute;
      z-index: 10;
    }
    .lantern-animation,
    .change {
      position: absolute;
    }
    .change.step-5 {
      z-index: 9;
    }
    .step-5 {
      left: 370px;
      top: 0;
      .moon {
        background: url(./img/moon.png) 0 0 no-repeat;
        @include img;
      }
      .rabbit {
        background: url(./img/tuzi.png) 0 0 no-repeat;
        @include img;
      }
      .redpack {
        top: 0;
        left: 0;
        background: url(./img/hongbao.png) 0 0 no-repeat;
        @include img;
      }
      .cloud {
        z-index: 10;
        @include cloud;
      }
      &.active {
        .redpack {
          animation: redpack-fly 1.5s linear;
        }
      }
    }
    .step-4 {
      top: 129px;
      left: 0;
      .lantern {
        @include lantern;
      }
      .cloud {
        @include cloud;
      }
    }
    .step-3 {
      top: 336px;
      left: 370px;
      div {
        position: absolute;
      }
      .lantern {
        @include lantern;
      }
      .cloud {
        @include cloud;
      }
    }
    .step-2 {
      top: 469px;
      left: 0;
      .lantern {
        @include lantern;
      }
      .cloud {
        @include cloud;
      }
    }
    .step-1 {
      top: 671px;
      left: 370px;
      .lantern {
        @include lantern;
      }
      .cloud {
        @include cloud;
      }
    }
    .step-0 {
      display: none;
    }
    .hand-0 {
      display: none;
    }
    .hand-1 {
      top: 905px;
      right: 140px;
      transform:scaleX(-1);
    }
    .hand-2 {
      top: 705px;
      left: 140px;
    }
    .hand-3 {
      top: 575px;
      right: 140px;
      transform:scaleX(-1);
    }
    .hand-4 {
      top: 365px;
      left: 140px;
    }
    .hand-5 {
      display: none;
    }
    .back-home {
      position: absolute;
      bottom: 49px;
      left: 50%;
      margin-left: -102px;
      width: 204px;
      height: 51px;
      background:rgba(255,255,255,1);
      opacity:0.5;
      border-radius:26px;
    }
    .flower {
      position: absolute;
      background: url(./img/hehua.png) 0 0 no-repeat;
      background-size: 100% auto;
    }
    .flower-left {
      bottom: 236px;
      left: 56px;
      width: 70px;
      height: 48px;
    }
    .flower-right {
      bottom: 56px;
      right: 26px;
      width: 90px;
      height: 60px;
    }
  }
</style>
<script>
const $ = require("jquery")
import Popup from "@/components/popup/popup.vue"
import Complete from "@/components/complete/complete.vue"
import { isWX } from '@/common/util'
import ajax from '@/common/service/api'

export default {
  components: {
    Popup,
    Complete
  },
  data() {
    return {
      isShowPopup: false,
      isFly: false,
      isFlyEnd: false,
      titleUrl: require('./img/title-1.png'),
      taskUrl: require('./img/task-1.png'),
      btnUrl: require('./img/btn_bg.png'),
      closeUrl: require('./img/close.png'),
      text: '去关注',
      isShowComplete: false,
      taskStep: 0,
      todayTaskStatus: 1, //0:未开启; 1:已开启
      isComplete: false,
      isWX: isWX,
      taskArr: [
        {step: 4, content: '创作一篇文章'},
        {step: 3, content: '发布三个评论'},
        {step: 2, content: '给3篇文章点赞'},
        {step: 1, content: '关注3位好友'}
      ],
      ranking: 0,
      user_id: 13687547,
      activeTimer: null,
      lanternTimer: null,
      handTimer: null
    }
  },
  created() {
    this.appSendLog('by_hd', 'hdcy_show')
  },
  mounted() {
    this.playActive()
    this.playHand()
    this.playLantern()
    let _this = this
    if (window.meipian) {
      meipian.getUserInfo(function (data) {
        if (data.id == 1000) {
          meipian.gotoUserLoginPage();
        } else {
          _this.user_id = data.id
          _this.getTask()
        }
      })
    }
    if(window.WebViewJavascriptBridge == undefined){
      this.getTask()
    }
  },
  methods: {
    //当前任务
    getTask(){
      let _this = this
      ajax({
        url: 'promo/mid_autumn/api/currentMission',
        data: {
          user_id: _this.user_id
        },
        params: {
          user_id: _this.user_id
        },
        ok(res) {
          if (res.data.code === 0) {
            _this.taskStep = res.data.data.step
            _this.todayTaskStatus = res.data.data.status
            _this.isComplete = (res.data.data.times || res.data.data.times > 0) ? false : true
            _this.showPopup()
          }
        }
      })
    },
    showPopup(){
      if(this.isComplete) {
        this.text = '好哒'
        this.taskUrl = require(`./img/task-rabbit.png`)
        if(this.taskStep == 5){
          this.isShowPopup = true
          this.appSendLog('by_hd', 'lq_tc_show')
          return false
        }
        switch (this.taskStep) {
          case 1:
            this.titleUrl = require(`./img/complete-1.png`)
            this.appSendLog('by_hd', 'wc_1st_show')
            break;
          case 2:
            this.titleUrl = require(`./img/complete-2.png`)
            this.appSendLog('by_hd', 'wc_2nd_show')
            break;
          case 3:
            this.titleUrl = require(`./img/complete-3.png`)
            this.appSendLog('by_hd', 'wc_3rd_show')
            break;
          case 4:
            this.titleUrl = require(`./img/complete-4.png`)
            this.appSendLog('by_hd', 'wc_4th_show')
            break;
          default:
            break;
        }
        this.isShowPopup = true
      } else if(this.todayTaskStatus == 1){
        this.isShowPopup = true
        switch (this.taskStep) {
          case 1:
            this.titleUrl = require(`./img/title-1.png`)
            this.taskUrl = require(`./img/task-1.png`)
            this.text = '去关注'
            this.appSendLog('by_hd', 'fb_1st_show')
            break;
          case 2:
            this.titleUrl = require(`./img/title-2.png`)
            this.taskUrl = require(`./img/task-2.png`)
            this.text = '去点赞'
            this.appSendLog('by_hd', 'fb_2nd_show')
            break;
          case 3:
            this.titleUrl = require(`./img/title-3.png`)
            this.taskUrl = require(`./img/task-3.png`)
            this.text = '去评论'
            this.appSendLog('by_hd', 'fb_3rd_show')
            break;
          case 4:
            this.titleUrl = require(`./img/title-4.png`)
            this.taskUrl = require(`./img/task-4.png`)
            this.text = '去创作'
            this.appSendLog('by_hd', 'fb_4th_show')
            break;
          default:
            break;
        }
      } 
    },
    confirmPopup() {
      console.log('点击了')
      if(this.isComplete){
        if(this.taskStep == 5){
          this.isShowPopup = false
        } else if(this.taskStep == 4){
          this.getReward()
        } else {
          this.createTask()
        }
      } else {
        this.isShowPopup = false
        this.goAppPage(this.taskStep)
      }
    },  
    //点击云朵
    clickCloud(taskStep){
      if(taskStep == this.taskStep){
        this.goAppPage(taskStep)
      }
    },
    goAppPage(taskStep){
      console.log('拉起app', taskStep)
      switch (taskStep) {
        case 1:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://meipian/home?tab=0'
            })
          }
          break;
        case 2:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://meipian/home?tab=0'
            })
          }
          break;
        case 3:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://meipian/home?tab=0'
            })
          }
          break;
        case 4:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://article/edit'
            })
          }
          break;
        default:
          break;
      }
    },
    //新建任务
    createTask() {
      let _this = this
      this.todayTaskStatus = 0
      $('.fly').show()
      this.isShowPopup = false
      this.isFly = true
      this.taskStep++
      this.playLantern()
      setTimeout(() => {
        this.isFly = false
        this.isFlyEnd = false
        this.playActive()
        $('.fly').hide()
      }, 2100);
      setTimeout(() => {
        this.isFlyEnd = true
      }, 500);
      ajax({
        url: 'promo/mid_autumn/api/newMission',
        data: {
          user_id: _this.user_id
        },
        ok(res) {
          if (res.data.code === 0) {
            _this.todayTaskStatus = res.data.data.status
          }
        }
      })
    },
    //领红包
    getReward() {
      let _this = this
      $('.fly').show()
      this.isShowPopup = false
      this.isFly = true
      this.taskStep++
      this.playLantern()
      setTimeout(() => {
        this.isFly = false
        this.isFlyEnd = false
        this.isShowComplete = true
        // this.playActive()
        $('.fly').hide()
      }, 2100);
      setTimeout(() => {
        this.isFlyEnd = true
      }, 500);
      ajax({
        url: 'promo/mid_autumn/api/reward',
        data: {
          user_id: _this.user_id
        },
        ok(res) {
          if (res.data.code === 0) {
            _this.ranking = res.data.data
          }
        }
      })
    },
    fly(){
      
    },
    //播放嫦娥动的动画
    playActive(totalNum = 36) {
      let _this = this
      clearInterval(this.activeTimer)
      let $ele = $('.change')
      let promiseArr = this.loadImage(0, 36, 'change')
      Promise.all(promiseArr).then(store => {
        let obj = {
          length: 0
        }
        store.forEach((val, index) => {
          obj[index] = val
          obj.length++
        })
        _this.activeAnimation = obj
        let index = 0
        // 依次append图片对象
        let timer = setInterval(() => {
          $ele.find('img').remove()
          $ele.append(obj[index])
          // 序列增加
          index++
          // 如果超过最大限制
          if (index >= totalNum) {
              index = 0
          }
        }, 50)
        _this.activeTimer = timer
      })
    },
    //播放手动画
    playHand(totalNum = 67) {
      let _this = this
      clearInterval(this.handTimer)
      let $ele = $('.hand')
      let promiseArr = this.loadImage(0, 67, 'hand')
      Promise.all(promiseArr).then(store => {
        let obj = {
          length: 0
        }
        store.forEach((val, index) => {
          obj[index] = val
          obj.length++
        })
        _this.handAnimation = obj
        let index = 0
        // 依次append图片对象
        let timer = setInterval(() => {
          $ele.find('img').remove()
          $ele.append(obj[index])
          // 序列增加
          index++
          // 如果超过最大限制
          if (index >= totalNum) {
              index = 0
          }
        }, 50)
        _this.handTimer = timer
      })
    },
    //播放手动画
    playLantern(totalNum = 34) {
      let _this = this
      clearInterval(this.lanternTimer)
      let $ele = $('.lantern-animation')
      let promiseArr = this.loadImage(0, 34, 'lantern')
      Promise.all(promiseArr).then(store => {
        let obj = {
          length: 0
        }
        store.forEach((val, index) => {
          obj[index] = val
          obj.length++
        })
        let index = 0
        // 依次append图片对象
        let timer = setInterval(() => {
          $ele.find('img').remove()
          $ele.append(obj[index])
          // 序列增加
          index++
          // 如果超过最大限制
          if (index >= totalNum) {
              index = 0
          }
        }, 50)
        _this.lanternTimer = timer
      })
    },
    loadImage(startIndex = 0, totalNum = 36, className = 'change') {
      let urlRoot = 'https://ss2.meipian.me/promo/mid_autumn/img/'
      let maxLength = totalNum - startIndex + 1
      let $ele = $('.' + className)
      
      // 图片序列预加载
      let promiseArr = []
      for ( let start = startIndex; start <= totalNum; start++) {
        let promise = new Promise((resolve, reject) => {
          let img = new Image();
          img.onload = function () {
            // 存储预加载的图片对象
            resolve(this)
          }
          img.onerror = function () {
            resolve(this)
          }
          img.src = urlRoot + className + '/' + start + '.png'
        })
        promiseArr.push(promise)
      }
      return promiseArr
    },
    
    playPicture(startIndex = 0, totalNum = 36, className = 'change') {
      let urlRoot = 'https://ss2.meipian.me/promo/mid_autumn/img/'
      let maxLength = totalNum - startIndex + 1
      let $ele = $('.' + className)
      // 存储预加载的DOM对象和长度信息
      let store = {
        length: 0
      }
      // 图片序列预加载
      for ( let start = startIndex; start <= totalNum; start++) {
        (function (index) {
          let img = new Image();
          img.onload = function () {
            store.length++
            // 存储预加载的图片对象
            // console.log('this', store)
            store[index] = this
            play()
          }
          img.onerror = function () {
            store.length++
            play()
          }
          img.src = urlRoot + className + '/' + index + '.png'
        })(start)
      }
      let play = () => {
        let percent = Math.round(100 * store.length / maxLength)
        
        // 全部加载完毕，无论成功还是失败
        if (percent == 100) {
          console.log('store', store)
          let index = startIndex
          // 依次append图片对象
          let timer = setInterval(() => {
            $ele.find('img').remove()
            $ele.append(store[index])
            // 序列增加
            index++
            // 如果超过最大限制
            if (index >= totalNum) {
                index = 0
            }
          }, 50)
          switch (className) {
            case 'active':
              this.activeTimer = timer
              break;
            default:
              break;
          }
        }
      }
    }
  }
  
}

</script>
