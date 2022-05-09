import {
  defineStore
} from "pinia"
import {
  AspectRatio
} from "~/share/index.ts"
import {
  ref
} from "vue"
import { useLocalStorage, useStorageAsync } from "@vueuse/core"
import { useSystemStorage } from "../../pages/useSystemStorage"

export const useScreenControl = defineStore('screen-control', () => {
  const screenProportion = ref('16:9')
  const screenProportionOption = [
    {
      value: '默认',
      count: 16 / 9
    },
    {
      value: '16:9',
      count: 16 / 9 
    },
    {
      value: '4:3',
      count: 4 / 3 
    },
  ]

  const getRatioCount = (value: string) => {
    screenProportionOption.forEach(item => {
      if (item.value === value) {
        return item.count
      }
    })   
    return 16 / 9
  }
  
  const updateAspectRatio = (ratio: string) => {
    screenProportion.value = ratio
    const { updateMediaStorage } = useSystemStorage()
    
    updateMediaStorage('screenProportion', ratio)
  }
  
  return {
    screenProportion,
    getRatioCount,
    screenProportionOption,
    updateAspectRatio,
  }
})
