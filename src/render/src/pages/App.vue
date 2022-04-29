<template>
  <div>
    <video-player />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VideoPlayer from './VideoPlayer/VideoPlayer.vue'

export default defineComponent({
  name: "App",
  components: {
    VideoPlayer,
    [VideoPlayer.name]: VideoPlayer
  },
})
</script>

<style scoped>

</style>