import {defineStore} from "pinia"
import {ref} from 'vue'

export const useVideoInfo = defineStore('videoInfo', () => {
  /* 视频blob地址 */
  const videoBlobAddress = ref<string>()
  /* 视频当前的时间 */
  const videoCurrentTime = ref<number>(0)
  /* 视频当前的状态 播放->暂停(false，处于暂停状态) or 暂停->播放(true, 处于播放状态) */
  const videoStatus = ref<boolean>(false)
  /* 视频总共时长 */
  const videoDuration = ref<number>(0)
  
  return {
    videoBlobAddress,
    videoCurrentTime,
    videoStatus,
    videoDuration
  }
})

