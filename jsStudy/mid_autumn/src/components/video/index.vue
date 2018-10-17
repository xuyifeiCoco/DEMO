<template>
  <video class="video" autoplay preload="auto" :poster="poster" id="video_player" x-webkit-airplay="allow" webkit-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="true" playsinline="true" width="100%" height="100%" muted> 
    <source :src="url" type="video/mp4"> 
  </video>
</template>
<style lang="scss">
  .video {
    width: 100%; 
    height: 100%; 
    position: absolute; 
    left: 0px; 
    bottom: 0px; 
    z-index: 999;
    object-fit: fill;
  }
</style>

<script>
export default {
  name: '',
  props: {
    url: String,
    poster: String
  },
  mounted(){
    let video_player = document.getElementById("video_player")
    video_player.play()
    document.addEventListener("WeixinJSBridgeReady", function () { 
      video_player.play()
    }, false);

    video_player.addEventListener("touchstart", function(){
      video_player.play()
    }, false);

    let _this = this
    if(video_player.ended){
      _this.$emit('videoPlayEnd')
    }
    video_player.addEventListener("ended",function(){
      _this.$emit('videoPlayEnd')
      console.log("结束123")
    })
  }
}
</script>
