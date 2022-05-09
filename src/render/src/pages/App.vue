<template>
  <div class="app-con">
    <el-container id="container">
      <router-view />
    </el-container>
  </div>
  <key-monitor />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted
} from "vue"
import VideoPlayer from './VideoPlayer/VideoPlayer.vue'
import KeyMonitor from "../components/KeyMonitor/KeyMonitor.vue"
import Index from './Index/Index.vue'
import {
  useScreenControl
} from '../store/screenControl'
import {
  useSystemStorage
} from './useSystemStorage'
import {
  useVideoInfo
} from "../store/videoInfo"
import { useAsyncQueue } from "@vueuse/core"

export default defineComponent({
  name: "App",
  components: {
    VideoPlayer,
    [VideoPlayer.name]: VideoPlayer,
    [Index.name]: Index,
    [KeyMonitor.name]: KeyMonitor
  },
  setup() {
    const { mediaStorage } = useSystemStorage()

    const initStoreStatus = () => {
      const { updateAspectRatio } = useScreenControl()
      const { updateVolume } = useVideoInfo()

      updateAspectRatio(mediaStorage.screenProportion)
      updateVolume(mediaStorage.volume)
    }

    initStoreStatus()

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
