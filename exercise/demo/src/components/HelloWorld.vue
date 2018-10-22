<template>
  <div class="hello">
    <h1 ref="ceshi"> {{ msg }}</h1>
    <div>{{nicknmae}}</div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      nicknmae: ""
    };
  },
  methods: {
    getQueryString1(name) {
      let u = `?share_from=self&utm_source=singlemessage&from=singlemessage&v=4.6.2&user_id=30401051&uuid=4d21fc400c823d438623c3851b59f8f4&utm_medium=meipian_android&share_user_mpuuid=019e5b6f43fc7dea8ac80686158ecfa8&openid=oZPFVwpfHbd8dqaCZZMAEZFWhxVs&nickname=%E5%BE%90%E6%AF%85%E9%A3%9E&sex=1&language=zh_CN&city=&province=&country=%E9%98%BF%E5%B0%94%E5%B7%B4%E5%B0%BC%E4%BA%9A&headimgurl=http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqEI7IFUTFHYhIbXIcLXR9B7zQy2rDuGbCoib6GfDjQJtnkwMydzMS3XzjEZnwpWDyickKxrvxMF96g/132&unionid=ojq1tt94gGOogAkBPP8TRiY4eVhc&sign=441038a29617d32cf789c1240adef5fc`;
      const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let aaa = decodeURIComponent(u);
      const r = aaa.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    }
  },
  mounted() {
    let url = `https://t-www.meipian.cn/1ms9pawb?share_from=self&utm_source=singlemessage&from=singlemessage&v=4.6.2&user_id=30401051&uuid=4d21fc400c823d438623c3851b59f8f4&utm_medium=meipian_android&share_user_mpuuid=019e5b6f43fc7dea8ac80686158ecfa8&openid=oZPFVwpfHbd8dqaCZZMAEZFWhxVs&
    nickname=%E5%BE%90%E6%AF%85%E9%A3%9E&sex=1&language=zh_CN&city=&province=&country=%E9%98%BF%E5%B0%94%E5%B7%B4%E5%B0%BC%E4%BA%9A&
    headimgurl=http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqEI7IFUTFHYhIbXIcLXR9B7zQy2rDuGbCoib6GfDjQJtnkwMydzMS3XzjEZnwpWDyickKxrvxMF96g/132&unionid=ojq1tt94gGOogAkBPP8TRiY4eVhc&sign=441038a29617d32cf789c1240adef5fc`;
    console.log(this.getQueryString1("headimgurl"));
    // this.nicknmae = decodeURIComponent("%F0%9F%98%AE");
    // console.log(decodeURIComponent("%F0%9F%98%AE"));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
