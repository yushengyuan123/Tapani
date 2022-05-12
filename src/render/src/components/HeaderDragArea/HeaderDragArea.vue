<template>
  <div class="header-drag-area"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'header-drag-area'
})
</script>

<style scoped lang="less">
.header-drag-area {
  position: fixed;
  top: 0;
  left: 0;
  height: 36px;
  width: 100%;
  z-index: 5000;
  -webkit-app-region: drag;
}
</style>