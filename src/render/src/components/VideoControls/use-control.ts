import {
  getCurrentInstance
} from 'vue'
import {useVideoInfo} from "../../store/videoInfo"
import {storeToRefs} from "pinia"

export const useControl = () => {
  const instance = getCurrentInstance()
  const videoInfoStore = useVideoInfo()
  const {
    videoStatus,
  } = storeToRefs(videoInfoStore)
  
  const switchVideoStatus = () => {
    videoInfoStore.updateVideoStatus(!videoStatus.value)
    
    instance!.emit('video-status-change', videoStatus.value)
  }
  
  const leftMenuVisible = () => {
    instance!.emit('visible-menu')
  }
  
  const settingsVisible = () => {
    instance!.emit('visible-settings')
  }
  
  const videoProgressChange = (percentage: number) => {
    instance!.emit('video-time-change', percentage)
  }
  
  const volumeChange = (volume: number) => {
    instance!.emit('volume-change', volume)
  }

  const backHomePage = () => {
    instance!.emit('back-home-page')
  }
  
  return {
    switchVideoStatus,
    leftMenuVisible,
    settingsVisible,
    videoProgressChange,
    volumeChange,
    backHomePage
  }
}
