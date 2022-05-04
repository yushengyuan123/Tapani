import {
  getCurrentInstance
} from 'vue'
import {useVideoInfo} from "../../store/videoInfo";
import {storeToRefs} from "pinia";

export const useControl = () => {
  const instance = getCurrentInstance()
  const videoInfoStore = useVideoInfo()
  const {
    videoStatus
  } = storeToRefs(videoInfoStore)
  
  const switchVideoStatus = () => {
    videoStatus.value = !videoStatus.value
    instance.emit('video-status-change', videoStatus.value)
  }
  
  const leftMenuVisible = () => {
    instance.emit('visible-menu')
  }
  
  const settingsVisible = () => {
    instance.emit('visible-settings')
  }
  
  const videoProgressChange = (percentage: number) => {
    instance.emit('video-time-change', percentage)
  }
  
  const volumeChange = () => {
    instance.emit('volume-change')
  }
  
  return {
    switchVideoStatus,
    leftMenuVisible,
    settingsVisible,
    videoProgressChange,
    volumeChange
  }
}