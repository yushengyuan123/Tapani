import {defineStore} from "pinia"
import {ref} from 'vue'
import {convertSecondsToTime} from "../../utils"
import type {TypesTimes} from "../../../types"
import {TypesTimes} from "../../../types";

export const useVideoInfo = defineStore('videoInfo', () => {
  /* 视频blob地址 */
  const videoBlobAddress = ref<string>()
  /* 视频当前的时间 */
  const videoCurrentTime = ref<number>(0)
  /* 视频当前的状态 播放->暂停(false，处于暂停状态) or 暂停->播放(true, 处于播放状态) */
  const videoStatus = ref<boolean>(false)
  /* 视频总共时长 */
  const videoDuration = ref<number>(0)
  
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
    videoStatus.value = payload
  }
  
  const updateVideoStatus = (payload: boolean) => {
    videoStatus.value = payload
  }
  
  const updateDuration = (payload: number) => {
    videoDuration.value = payload
  }
  
  return {
    videoBlobAddress,
    videoCurrentTime,
    videoStatus,
    videoDuration,
    getTimeFormat,
    updateVideoAddress,
    updateCurrentTime,
    updateVideoStatus,
    updateDuration,
  }
})

