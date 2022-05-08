import {
  defineStore
} from "pinia"
import {
  AspectRatio
} from "~/share/index.ts"
import {
  ref
} from "vue"

export const useScreenControl = () => defineStore('screen-control', () => {
  const screenProportion = ref(AspectRatio.SixteenToNine)
  
  const updateAspectRatio = (ratio: AspectRatio) => {
    screenProportion.value = ratio
  }
  
  return {
    screenProportion,
    updateAspectRatio
  }
})
