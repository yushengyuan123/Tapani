import {
  defineStore
} from "pinia"
import {
  ref
} from "vue"
import { useSystemStorage } from "../../pages/useSystemStorage"
import { ProportionStringTypes } from '../../pages/useSystemStorage'
import { useLocalStorage } from '@vueuse/core'

export type FilterStyleKey = 'brightness' | 'contrast' | 'saturate'
export type FilterControlOptions = Record<FilterStyleKey, number>
interface ScreenProportionSelectArr {
  value: ProportionStringTypes,
  count: number
}

export const useScreenControl = defineStore('screen-control', () => {
  const screenProportion = ref<ProportionStringTypes>(ProportionStringTypes.SixteenToNine)
  const fullScreenMode = ref(false)
  const filterStyle = useLocalStorage<FilterControlOptions>('player-system-filter', {
    brightness: 100,
    contrast: 100,
    saturate: 100,
  })
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

  const getFilterValue = (key: FilterStyleKey) => {
    return filterStyle.value[key]
  }
  
  const updateAspectRatio = (ratio: ProportionStringTypes) => {
    screenProportion.value = ratio

    const { updateMediaStorage } = useSystemStorage()
    
    updateMediaStorage('screenProportion', ratio)
  }

  const updateFullScreenMode = (value: boolean) => {
    fullScreenMode.value = value
  }

  const updateFilterStyle = (key: FilterStyleKey, value: number) => {
    filterStyle.value[key] = Math.min(value, 200)
  }

  return {
    filterStyle,
    screenProportion,
    getRatioCount,
    getFilterValue,
    screenProportionOption,
    updateAspectRatio,
    updateFullScreenMode,
    updateFilterStyle
  }
})
