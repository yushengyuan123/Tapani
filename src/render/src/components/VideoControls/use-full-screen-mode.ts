import {
  ref
} from "vue"
import {
  useVideoInfo
} from "../../store/videoInfo"
import {storeToRefs} from "pinia"

export const useFullScreenMode = () => {
  const fullScreenMode = ref(false)
  const videoInfoStore = useVideoInfo()
  const { videoFullScreenMode } = storeToRefs(videoInfoStore)
  
  const switchMode = () => {
    const res = !fullScreenMode.value
    videoInfoStore.updateMode(res)
    fullScreenMode.value = res
  }
  
  return {
    videoFullScreenMode,
    switchMode
  }
}
