<template>
  <div id="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VideoPlayer from './VideoPlayer/VideoPlayer.vue'
import Index from './Index/Index.vue'

export default defineComponent({
  name: "App",
  components: {
    VideoPlayer,
    [VideoPlayer.name]: VideoPlayer,
    [Index.name]: Index
  },
})
</script>

<style scoped>

</style>