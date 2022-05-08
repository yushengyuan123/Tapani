<template>
  <div class="app-con">
    <el-container id="container">
      <router-view />
    </el-container>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted
} from "vue"
import VideoPlayer from './VideoPlayer/VideoPlayer.vue'
import Index from './Index/Index.vue'
import {
  useVideoInfo
} from "../store/videoInfo"

const loudness = require('loudness')

export default defineComponent({
  name: "App",
  components: {
    VideoPlayer,
    [VideoPlayer.name]: VideoPlayer,
    [Index.name]: Index,
  },
  setup() {
    const { updateVolume } = useVideoInfo()

    const initSystemVolume = () => {
      loudness.getVolume().then(volume => {
        console.log('获得声音', volume)
        updateVolume(volume)
      })
    }

    onMounted(() => {
      // initSystemVolume()
    })

    return {}
  }
})
</script>

<style scoped lang="less">
.app-con {
  height: 100%;
  width: 100%;
  //background: transparent url('@/asserts/index-bg.png') top center no-repeat;
  background-size: cover;
}
</style>
