import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import { LanguageSorts  } from "../language"
import { useI18n } from "vue-i18n"

export enum ProportionStringTypes {
  'Default' = '默认',
  'SixteenToNine' = '16:9',
  'FourToThree' = '4:3'
}

export interface MediaStorageOptions {
  volume: number,
  screenProportion: ProportionStringTypes
}

export interface LanguageStorage {
  curLang: LanguageSorts
}

export const useSystemStorage = defineStore('system-storage', () => {
  const mediaStorage = useLocalStorage<MediaStorageOptions>('player-system-media', {
    volume: 40,
    screenProportion: ProportionStringTypes.SixteenToNine
  })
  const langStorage = useLocalStorage<LanguageStorage>('player-system-language', {
    curLang: "zh_CN" 
  })

  const updateMediaStorage = <T extends keyof MediaStorageOptions>(key: T, payload: MediaStorageOptions[T]) => {
    mediaStorage.value[key] = payload
  }

  const updateLanguageStorage = <T extends keyof LanguageStorage>(key: T, value: LanguageSorts) => {
    langStorage.value[key] = value
  }

  return {
    updateMediaStorage,
    updateLanguageStorage,
    mediaStorage,
    langStorage
  }
})