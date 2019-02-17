<template>
  <div>
    axios
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: "Axios",
  data(){
    return {
      domain:'http://192.168.67.57:8081'
    }
  },
  methods: {
    formAxios() {
      //==========测试formdata请求  参数为数组
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios.defaults.transformRequest = [
        function(data) {
          data = Qs.stringify(data);
          return data;
        }
      ];
      axios
        .post("http://t-poster.meipian.cn/4.6/user/baseinfo", {
          user_ids: ["30401051"]
        })
        .then(res => {
          console.log(res.data);
        });
    },

    //测试跨域请求
    /*
    一、设置webpack
      '/user/*':{
        target: 'http://192.168.67.57:8081',
        changeOrigin: true,
        secure: false
      }
    二、设置chrome
        mac  open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/xuyifei/Documents/network/chrome
        window  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=C:\chromeCross  在右键属性里面设置
    */ 
    crossAxios(){  //http://192.168.67.57:8081/user
        axios.get(`/user`).then((res) =>{
          console.log(res)
        })
    },
    chromeCross(){
      axios.get(`${this.domain}/user`).then((res) =>{
          console.log(res)
        })
    }
  },
  mounted() {
    // this.formAxios()
    // this.crossAxios()
    // this.chromeCross()
  }
};
</script>
