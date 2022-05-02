import {
  watch
} from 'vue'
import { useVideoInfo } from '../../store/videoInfo'
import { storeToRefs } from 'pinia'
import {
  secondsTransformToTime
} from "@/utils"
import {
  useThrottleFn,
  useMediaControls
} from "@vueuse/core"
import type {
  Ref
} from "vue"
import {UploadFile, UploadProps} from "element-plus"
// const { playing, currentTime, duration, volume } = useMediaControls(videoScreenRef, {
//   src: URL.createObjectURL(uploadFile.raw),
// })
//
// watch(() => currentTime.value, (value) => {
//   console.log('当前时间', value)
// })

export const useMedia = (videoRef: Ref<HTMLVideoElement>) => {
  const videoInfoStore = useVideoInfo()
  const {
    videoBlobAddress,
    videoStatus,
    videoCurrentTime,
    videoDuration
  } = storeToRefs(videoInfoStore)
  
  const {
    playing,
    currentTime,
    duration
  } = useMediaControls(videoRef, {
    src: videoBlobAddress
  })
  
  videoDuration.value = duration.value
  
  watch(() => playing.value, (curPlaying) => {
    console.log('status 发生变化')
    videoStatus.value = curPlaying
  })
  
  watch(() => duration.value, (curDuration) => {
    videoDuration.value = curDuration
  })

  watch(() => videoStatus.value, (curValue) => {
    if (curValue && !playing.value) {
      videoRef.value.play()
    } else if (!curValue && playing.value) {
      videoRef.value.pause()
    }
  })

  watch(() => videoCurrentTime.value, (curTime) => {
    currentTime.value = curTime
  })
  
  watch(() => currentTime.value, (curSeconds, oldSeconds) => {
    if (oldSeconds.toFixed(0) !== curSeconds.toFixed(0)) {
      videoCurrentTime.value = curSeconds
    }
  })
}
