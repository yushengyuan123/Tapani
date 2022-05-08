<template>
  <div id="container" @click="disappearDrawer">
    <video-control-area
      @video-status-change="videoStatusChange"
      @video-time-change="videoTimeChange"
      @volume-change="volumeChange"
      @visible-menu="visibleMenu"
      @visible-settings="visibleSettings"
    />
    <video-screen />

    <aside-drawer
      v-model:visible="drawerVisible"
    >
      <template v-slot:header>
        <div class="video-player-drawer-header-con">
          <div class="video-player-drawer-header-tab-con">
            <div
              v-for="(item, index) in contentTabHeader"
              :key="index"
              class="video-player-drawer-header-tab"
              @click="switchTab(index)"
            >
              {{ item.value }}
            </div>
          </div>
        </div>
      </template>
      <template v-slot:content>
        <div class="video-player-drawer-content-con">
          <component :is="currentRenderComponent"></component>
        </div>
      </template>
    </aside-drawer>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref
} from "vue"
import Controls from "@/components/VideoControls/Controls.vue"
import MenuIndex from '@/components/Menu/MenuIndex.vue'
import VideoUpload from "@/components/VideoUpload/VideoUpload.vue"
import VideoScreen from "@/components/VideoScreen/VideoScreen.vue"
import Screen from "./Screen/Screen.vue"
import Captions from "./Captions/Captions.vue"
import Volume from "./Volume/Volume.vue"
import {
  useAsideDrawerContent
} from "./use-aside-drawer-content"
import { useVideoInfo } from '../../store/videoInfo'
import { storeToRefs } from "pinia"
import AsideDrawer from "../../components/AsideDrawer/AsideDrawer.vue";
import {
  useEventListener
} from "@vueuse/core"

export default defineComponent({
  name: "video-player",
  components: {
    [Controls.name]: Controls,
    [MenuIndex.name]: MenuIndex,
    [VideoUpload.name]: VideoUpload,
    [VideoScreen.name]: VideoScreen,
    [AsideDrawer.name]: AsideDrawer,
  },
  setup() {
    const currentRenderComponent = ref(Screen)
    const { contentTabHeader } = useAsideDrawerContent()
    const videoInfoStore = useVideoInfo()
    const drawerVisible = ref(false)
    const showDrawer = ref(true)
    const {
      videoStatus,
      videoCurrentTime,
      videoDuration
    } = storeToRefs(videoInfoStore)

    const disappearDrawer = () => {
      drawerVisible.value = false
    }

    const switchTab = (index) => {
      switch (index) {
        case 0: {
          currentRenderComponent.value = Captions
          break
        }
        case 1: {
          currentRenderComponent.value = Screen
          break
        }
        case 2: {
          currentRenderComponent.value = Volume
          break
        }
      }
    }

    const visibleMenu = () => {
      // console.log(111)
    }

    const visibleSettings = () => {
      drawerVisible.value = true
      console.log(drawerVisible.value)
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
      currentRenderComponent,
      contentTabHeader,
      showDrawer,
      drawerVisible,
      disappearDrawer,
      visibleMenu,
      visibleSettings,
      videoStatusChange,
      videoTimeChange,
      volumeChange,
      switchTab
    }
  }
})
</script>

<style scoped lang="less">
.video-player-drawer-header-con {
  padding-top: 30px;
  height: 70px;
  box-sizing: border-box;
}
.video-player-drawer-header-tab-con {
  display: flex;
  justify-content: space-between;
  height: 23px;
  width: 83%;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
}
.video-player-drawer-header-tab {
  height: 100%;
  line-height: 23px;
  flex: 0.33;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
}
.video-player-drawer-content-con {
  height: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
</style>
