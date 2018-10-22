<template>
  <div>
    axios
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Axios",
  mounted() {
    //==========测试formdata请求
    axios
      .post("http://t-www.meipian.cn/promo/checkin_duiba/api/autoLogin", {
        user_id: "30401012",
        avatar:
          "http://t-static2.ivwen.com/users/30401012/2363631c1ac547abacdd230cb62d390f.jpg?meipian/bucket/ivwen/key/dXNlcnMvMzA0MDEwMTIvMjM2MzYzMWMxYWM1NDdhYmFjZGQyMzBjYjYyZDM5MGYuanBn/sign/8b98284a5f60c3cd284c7b5640378b11",
        nickname: "Yajun",
        token: "e5b4591ec3109712ea94b1685679409c",
        weibo_bind: 0,
        phone_bind: 0
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
