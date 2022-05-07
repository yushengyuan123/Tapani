<template>
  <teleport to="body">
    <div class="global-block">
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "global-block",
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.global-block {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
