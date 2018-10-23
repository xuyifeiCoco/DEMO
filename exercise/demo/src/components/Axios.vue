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
    }
  },
  mounted() {
    // this.formAxios()
    
  }
};
</script>
