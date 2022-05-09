import {defineStore} from "pinia"
import {ref} from 'vue'
import {convertSecondsToTime} from "../../utils"
import {
  TypesTimes
} from "../../../types"

export const useVideoInfo = defineStore('videoInfo', () => {
  /* 视频blob地址 */
  const videoBlobAddress = ref<string>()
  /* 视频当前的时间 */
  const videoCurrentTime = ref<number>(0)
  /* 视频当前的状态 播放->暂停(false，处于暂停状态) or 暂停->播放(true, 处于播放状态) */
  const videoStatus = ref<boolean>(false)
  /* 视频总共时长 */
  const videoDuration = ref<number>(0)
  /* 系统声音 满100*/
  const videoVolume = ref<number>(40)
  /* 全屏模式 */
  const videoFullScreenMode = ref<boolean>(false)
  
  const getTimeFormat = (types: TypesTimes) => {
    let times: number
    
    if (types === TypesTimes.CURRENT) {
      times = videoCurrentTime.value
    } else {
      times = videoDuration.value
    }
    
    return convertSecondsToTime(times)
  }
  
  const updateVideoAddress = (payload: string) => {
    videoBlobAddress.value = payload
  }
  
  const updateCurrentTime = (payload: number) => {
    videoCurrentTime.value = payload
  }
  
  const updateVideoStatus = (payload: boolean) => {
    videoStatus.value = payload
  }
  
  const updateDuration = (payload: number) => {
    videoDuration.value = payload
  }
  
  const updateVolume = (payload: number) => {
    videoVolume.value = payload
  }
  
  const updateMode = (payload) => {
    videoFullScreenMode.value = payload
  }
  
  return {
    videoBlobAddress,
    videoCurrentTime,
    videoStatus,
    videoDuration,
    videoVolume,
    videoFullScreenMode,
    getTimeFormat,
    updateVideoAddress,
    updateCurrentTime,
    updateVideoStatus,
    updateDuration,
    updateVolume,
    updateMode
  }
})

