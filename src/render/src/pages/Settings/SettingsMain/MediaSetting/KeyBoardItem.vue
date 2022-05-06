<template>
  <div class="key-board-item-con">
    <div class="key-board-item-text">全屏（full-screen）</div>
    <div class="key-board-item-button-con"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import {
  useMagicKeys,
  whenever
} from "@vueuse/core"

export default defineComponent({
  name: "key-board-item",
  props: {
    keyText: {
      type: String
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.key-board-item-con {
  display: flex;
  height: 20px;
}

.key-board-item-text {
  font-size: 14px;
}
</style>
