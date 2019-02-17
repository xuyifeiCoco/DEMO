<template>
  <div>
      <div class="video" ref="videoPlay" @click='playVideo'>
        <!-- controls  这个属性一定要添加 -->
          <video  controls autobuffer src="http://mp4.vjshi.com/2018-10-19/d683d92c378027a4fe9b3b49c091753a.mp4" >
            您的浏览器不支持 video 标签。
          </video>
          <!-- <video src="http://www.zhangxinxu.com/study/media/cat.mp4" width="352" height="264" controls autobuffer></video> -->
      </div>

  </div>
</template>
<script>
  export default {
    name:"Video",
    methods:{
      playVideo(){
            let vdo = document.getElementById("videoPlay");
            vdo.play();
      }
    },
    mounted() {

    },
  }
</script>
<style scoped>
.video{
  width: 500px;
  height: 300px;
}
video::-webkit-media-controls-overlay-play-button {
    background-color: orange;
}
</style>

