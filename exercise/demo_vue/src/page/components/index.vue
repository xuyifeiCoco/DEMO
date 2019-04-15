<template>
  <div>
    <div @click="showMask">
      遮罩组件
    </div>
    <MaskPopup :visible.sync="visible" @close='close'>
      <div slot="content">
        fsadfsda
      </div>
      <div slot="footer">
        关闭
      </div>
    </MaskPopup>
  </div>
</template>
<script>
import MaskPopup from "@/components/Mask.vue";
export default {
  name: "ComPo",
  components: {
    MaskPopup
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showMask() {
      this.visible = true;
    },
    close(val){
      this.visible = false
    }
  }
};
</script>
