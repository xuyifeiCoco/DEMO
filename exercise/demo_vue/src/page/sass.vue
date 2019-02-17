<template>
  <div class="container">
    sass
    <p class="cloor">测试{{language}}</p>
    <div class="bor_rau">flsadj</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Sass",
  computed: {
    ...mapGetters(["language"])
  },
  mounted() {
    this.$store.dispatch("GenerateRoutes").then((res) => {
      console.log(res)
    });
  }
};
</script>
<style lang="scss" scoped type="text/css">
$red: #deab8a; //定义变量
.container {
  @mixin largeText {
    //直接继承
    font-size: 30px;
  }
  .cloor {
    color: $red;
    @include largeText();
  }
  @mixin prefixer($property, $value, $prefixes: webkit moz) {
    //自动添加前缀
    #{$property}: $value;

    @each $prefix in $prefixes {
      @if $prefix == webkit {
        -webkit-#{$property}: #{$value};
      } @else if $prefix == moz {
        -moz-#{$property}: #{$value};
      } @else if $prefix == o {
        -o-#{$property}: #{$value};
      } @else if $prefix == ms {
        -ms-#{$property}: #{$value};
      }
    }
  }
  .bor_rau {
    background: orange;
    width: 100px;
    height: 100px;
    @include prefixer(border-radius, 20px, webkit moz o ms);
  }
}
</style>

