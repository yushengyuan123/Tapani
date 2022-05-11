import {
  defineStore
} from "pinia"
import {
  ref
} from "vue"
import { useSystemStorage } from "../../pages/useSystemStorage"
import { ProportionStringTypes } from '../../pages/useSystemStorage'

interface ScreenProportionSelectArr {
  value: ProportionStringTypes,
  count: number
}

export const useScreenControl = defineStore('screen-control', () => {
  const screenProportion = ref<ProportionStringTypes>(ProportionStringTypes.SixteenToNine)
  const fullScreenMode = ref(false)
  const screenProportionOption: ScreenProportionSelectArr[]= [
    {
      value: ProportionStringTypes.Default,
      count: 16 / 9
    },
    {
      value: ProportionStringTypes.SixteenToNine,
      count: 16 / 9 
    },
    {
      value: ProportionStringTypes.FourToThree,
      count: 4 / 3 
    },
  ]

  const getRatioCount = (value: string) => {
    let defaultValue = 16 / 9

    for (const item of screenProportionOption) {
      if (item.value === value) {
        defaultValue = item.count
        break
      }
    }
     
    return defaultValue
  }
  
  const updateAspectRatio = (ratio: ProportionStringTypes) => {
    screenProportion.value = ratio

    const { updateMediaStorage } = useSystemStorage()
    
    updateMediaStorage('screenProportion', ratio)
  }

  const updateFullScreenMode = (value: boolean) => {
    fullScreenMode.value = value
  }
  
  return {
    screenProportion,
    getRatioCount,
    screenProportionOption,
    updateAspectRatio,
    updateFullScreenMode
  }
})
