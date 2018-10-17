<template v-cloak>
  <div id="app">
    <div class="music" :class="isPlayAudio ? 'play' : ''" @click="playAudio">
      <audio src="http://dl.stream.qqmusic.qq.com/C100003iUn5P0JDQd7.m4a?fromtag=38" loop class="audio"></audio>
    </div>
    <template>
      <router-view></router-view>
    </template>
    <Video :url="videoUrl" :poster="videoPoster" @videoPlayEnd="videoPlayEnd" v-if="isShowVideo"></Video>
  </div>
</template>

<style lang="scss">
  html, body {
    height: 100%;
  }
  html body {
    width: 10rem;
    margin: 0 auto;
  }
  #app {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
    padding: 0;
  }
  [v-cloak] {
    display: none;
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .music {
    position: absolute;
    top: 38px;
    right: 26px;
    z-index: 11;
    background: url('./pause.png') 0 0 no-repeat;
    background-size: 100% auto;
    height: 48px;
    width: 48px;
    .audio {
      display: none;
    }
    &.play {
      background: url('./play.png') 0 0 no-repeat;
      background-size: 100% auto;
    }
  }
  
</style>


<script>
import Video from "@/components/video"

export default {
  name: 'App',
  components: {
    Video
  },
  data() {
    return {
      isPlayAudio: false,
      isShowVideo: false,
      hasPlay: false,
      videoUrl: require('./mid_autumn.mp4'),//'https://ss2.meipian.me/promo/mid_autumn/video/mid_autumn.mp4',
      videoPoster: require('./video_poster.jpg')
    }
  },
  created(){
    
  },
  mounted(){
    let app = document.getElementById('app')
    let _this = this
    app.addEventListener("touchstart", function(){
      if(!_this.hasPlay){
        let audioPlayer = document.querySelector('.audio')
        _this.isPlayAudio = true
        audioPlayer.play()
      }
      _this.hasPlay = true
    })

    // localStorage.removeItem("playVideo")
    // if(localStorage.hasOwnProperty('playVideo')){
    //   this.playAudio()
    // } else {
    //   this.isShowVideo = false
    //   // localStorage.setItem("playVideo", true)
    // }
  },
  methods: {
    videoPlayEnd(){
      this.isShowVideo = false
    },
    playAudio(){
      let audioPlayer = document.querySelector('.audio')
      if(audioPlayer.paused){
        this.isPlayAudio = true
        audioPlayer.play()
      } else {
        this.isPlayAudio = false
        audioPlayer.pause()
      }
    }
  }
}
</script>