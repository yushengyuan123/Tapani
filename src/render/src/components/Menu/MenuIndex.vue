<template>
  <div class="menu-index-container">
    <menu-aside />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from "vue"
import MenuAside from "./MenuAside.vue"

export default defineComponent({
  name: "menu-index",
  components: {
    [MenuAside.name]: MenuAside
  },
  setup() {
    const visible = ref(true)

    return {
      visible
    }
  }
})
</script>

<style scoped lang="less">
.menu-index-container {
  height: 100%;
  width: 78px;
}
</style>
