<template>
  <div
    :class="['control-container', idleClass]"
  >
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
  computed
} from "vue"
import { useIdle } from "@vueuse/core";
import { useControl } from "./use-control";
import Progress from "./Progress.vue"
import IconBaseline5g from '~icons/ic/baseline-5g'
import { useVideoInfo } from "../../store/videoInfo"
import { storeToRefs } from "pinia"
import {
  convertSecondsToTime
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
    const {
      videoDuration,
      videoCurrentTime,
      videoStatus
    } = storeToRefs(videoInfoStore)

    const {
      switchVideoStatus,
      leftMenuVisible,
      volumeChange,
      videoProgressChange,
      settingsVisible
    } = useControl()

    const { idle } = useIdle(4000)

    const idleClass = computed(
      () => {
        if (idle.value) {
          return 'control-user-idle'
        }
        return ''
      }
    )

    const duration = computed(
      () => convertSecondsToTime(videoDuration.value)
    )

    const currentTime = computed(
      () => convertSecondsToTime(videoCurrentTime.value)
    )

    return {
      videoStatus,
      duration,
      currentTime,
      idleClass,
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

  &.control-user-idle {
    transition: opacity .8s linear;
    opacity: 0;
  }

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
