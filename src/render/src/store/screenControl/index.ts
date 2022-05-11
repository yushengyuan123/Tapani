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
import { ProportionStringTypes } from '../../pages/useSystemStorage'

interface ScreenProportionSelectArr {
  value: ProportionStringTypes,
  count: number
}

export const useScreenControl = defineStore('screen-control', () => {
  const screenProportion = ref<ProportionStringTypes>(ProportionStringTypes.SixteenToNine)
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
    screenProportionOption.forEach(item => {
      if (item.value === value) {
        return item.count
      }
    })   
    return 16 / 9
  }
  
  const updateAspectRatio = (ratio: ProportionStringTypes) => {
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
