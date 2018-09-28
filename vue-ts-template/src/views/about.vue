<template>
  <div>
    <span v-bind:title="msg">
      鼠标悬停几秒查看时间
    </span>
    <input type="text" v-model="question">

</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  //只要添加了constructor  这个参数就一定要有
  components: {}
})
export default class about extends Vue {
  private msg: string;
  private question: string = "ceshi";

  constructor() {
    super();
    this.msg = "页面加载于 " + new Date().toLocaleString();
  }

  @Watch("question", { immediate: true, deep: true })
  fetchAnsWer(newQuestion: any, oldQuestion: any) {
    console.log('获取答案')
  }

}
</script>
<style lang="scss" scoped>
.todo-item {
  background-color: blue;
}
.active {
  background-color: red;
}
</style>
