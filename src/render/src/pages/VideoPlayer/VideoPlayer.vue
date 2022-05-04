<template>
  <div id="container">
    <video-control-area
      @video-status-change="videoStatusChange"
      @video-time-change="videoTimeChange"
      @volume-change="volumeChange"
      @visible-menu="visibleMenu"
      @visible-settings="visibleSettings"
    />
    <video-screen />
<!--    <menu-index />-->
<!--    <video-upload />-->
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from "vue"
import Controls from "@/components/VideoControls/Controls.vue"
import MenuIndex from '@/components/Menu/MenuIndex.vue'
import VideoUpload from "@/components/VideoUpload/VideoUpload.vue"
import VideoScreen from "@/components/VideoScreen/VideoScreen.vue";
import { useVideoInfo } from '../../store/videoInfo'
import { storeToRefs } from "pinia"
import {convertSecondsToTime} from "../../utils";

export default defineComponent({
  name: "video-player",
  components: {
    [Controls.name]: Controls,
    [MenuIndex.name]: MenuIndex,
    [VideoUpload.name]: VideoUpload,
    [VideoScreen.name]: VideoScreen
  },
  setup() {
    const videoInfoStore = useVideoInfo()
    const {
      videoStatus,
      videoCurrentTime,
      videoDuration
    } = storeToRefs(videoInfoStore)
    const visibleMenu = () => {
      // console.log(111)
    }

    const visibleSettings = () => {
      console.log(222)
    }

    const videoStatusChange = (curStatus: boolean) => {
      videoStatus.value = curStatus
    }

    const videoTimeChange = (percentage: number) => {
      videoCurrentTime.value = videoDuration.value * percentage
    }

    const volumeChange = () => {

    }

    return {
      visibleMenu,
      visibleSettings,
      videoStatusChange,
      videoTimeChange,
      volumeChange
    }
  }
})
</script>

<style scoped>

</style>
