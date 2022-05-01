<template>
  <video-player />
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import VideoPlayer from "./VideoPlayer.vue"

export default defineComponent({
  name: "video-index",
  components: {
    [VideoPlayer.name]: VideoPlayer
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">

</style>