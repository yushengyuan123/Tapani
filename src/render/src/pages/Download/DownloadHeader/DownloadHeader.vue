<template>
  <div class="download-header-con">
    <download-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
import DownloadMenu from "../DownloadMenu/DownloadMenu.vue"

export default defineComponent({
  name: "download-header",
  components: {
    [DownloadMenu.name]: DownloadMenu,
  },
  setup() {



    return {
    }
  }
})
</script>

<style scoped lang="less">
.download-header-con {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70px;
  width: 100%;
}
</style>
