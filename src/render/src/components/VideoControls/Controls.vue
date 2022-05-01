<template>
  <div class="control-container">
    <div class="control-container-inner">
      <div class="control-button-area">
        <el-row align="middle" style="height: 100%">
          <el-col :span="5">
            <el-row align="middle">
              <div class="control-volume-container">
                <icon-collect name="volume"/>
              </div>
              <video-progress
                :percentage="0.5"
                :width="65"
                @change="volumeChange"
              />
            </el-row>
          </el-col>
          <el-col :span="14">
            <el-row align="middle" justify="center">
              <icon-collect name="back"/>
              <div class="video-status-con" @click="switchVideoStatus">
                <icon-collect v-if="!videoStatus" name="continue"/>
                <icon-collect v-else name="pause"/>
              </div>
              <icon-collect name="forward"/>
            </el-row>
          </el-col>
          <el-col :span="5">
            <el-row justify="end">
              <div class="video-menu-operate-con" @click="leftMenuVisible">
                <icon-collect name="menu-list"/>
              </div>
              <div class="video-menu-operate-con" @click="settingsVisible">
                <icon-collect name="setting"/>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="control-progress-area">
        <el-row align="middle">
          <el-col :span="3">{{ currentTime }}</el-col>
          <el-col :span="18">
            <video-progress
              :percentage="0"
              @change="videoProgressChange"
            />
          </el-col>
          <el-col :span="3">
            <el-row justify="end">
              {{ duration }}
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed
} from "vue"
import Progress from "./Progress.vue"
import IconBaseline5g from '~icons/ic/baseline-5g'
import { useVideoInfo } from "../../store/videoInfo"
import { storeToRefs } from "pinia"
import {
  secondsTransformToTime
} from "../../utils"

import type {
  SetupContext
} from "vue"

export default defineComponent({
  name: "video-control-area",
  components: {
    [Progress.name]: Progress
  },
  setup(props, context: SetupContext) {
    const videoInfoStore = useVideoInfo()
    const { videoDuration, videoCurrentTime } = storeToRefs(videoInfoStore)

    /* false表示暂停，true表示播放中 */
    const videoStatus = ref(false)

    const duration = computed(
      () => secondsTransformToTime(videoDuration.value)
    )

    const currentTime = computed(
      () => secondsTransformToTime(videoCurrentTime.value)
    )

    const switchVideoStatus = () => {
      videoStatus.value = !videoStatus.value
      context.emit('video-status-change', videoStatus.value)
    }

    const leftMenuVisible = () => {
      context.emit('visible-menu')
    }

    const settingsVisible = () => {
      context.emit('visible-settings')
    }

    const videoProgressChange = (percentage: number) => {
      context.emit('video-time-change', percentage)
    }

    const volumeChange = () => {
      context.emit('volume-change')
    }

    return {
      videoStatus,
      duration,
      currentTime,
      switchVideoStatus,
      leftMenuVisible,
      settingsVisible,
      videoProgressChange,
      volumeChange
    }
  }
})
</script>

<style scoped lang="less">
.control-container {
  @width: 520px;
  position: absolute;
  left: 50%;
  margin-left: -(@width / 2);
  bottom: 100px;
  height: 80px;
  background-color: transparent;
  width: @width;
  opacity: 0.7;
  z-index: 1000;

  .control-container-inner {
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 6px;
    flex-direction: column;
    transition: all .3s ease-in-out;

    .control-button-area {
      height: 45px;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;

      .control-volume-container {
        height: 100%;
        margin-right: 8px;
      }

      .video-status-con {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
      }

      .control-operate-menu-con {
      }

      .video-menu-operate-con {
        margin-left: 10px;
      }
    }

    .control-progress-area {
      flex: 1;
      height: 100%;
      width: 100%;
      font-size: 12px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
    }
  }
}
</style>