<template>
  <header-drag-area />
  <div class="app-con">
    <el-container id="container">
      <router-view />
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VideoPlayer from './VideoPlayer/VideoPlayer.vue'
import HeaderDragArea from '@/components/HeaderDragArea/HeaderDragArea.vue'
import Index from './Index/Index.vue'
import { useKeyMonitor  } from "../hooks/use-key-monitor"
import { useScreenControl } from '../store/screenControl'
import { useSystemStorage } from './useSystemStorage'
import { useVideoInfo } from "../store/videoInfo"
import { useLanguage, sortsToValue } from "../store/language"

export default defineComponent({
  name: "App",
  components: {
    VideoPlayer,
    [VideoPlayer.name]: VideoPlayer,
    [Index.name]: Index,
    [HeaderDragArea.name]: HeaderDragArea
  },
  setup() {
    const { mediaStorage, langStorage } = useSystemStorage()

    useKeyMonitor()

    const initStoreStatus = () => {
      const { updateAspectRatio } = useScreenControl()
      const { updateVolume } = useVideoInfo()
      const { updateDefaultLanguage } = useLanguage()

      updateAspectRatio(mediaStorage.screenProportion)
      updateVolume(mediaStorage.volume)
      updateDefaultLanguage(sortsToValue[langStorage.curLang])
    }

    initStoreStatus()

    return {}
  }
})
</script>

<style scoped lang="less">
.app-con {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
