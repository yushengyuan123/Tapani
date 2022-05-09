import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"

export const useSystemStorage = defineStore('system-storage', () => {
  const mediaStorage = useLocalStorage('player-system-media', {
    volume: 40,
    screenProportion: '16:9'
  })

  const updateMediaStorage = (key: string, payload: any) => {
    // @ts-ignore
    mediaStorage.value[key] = payload
  }

  return {
    updateMediaStorage,
    mediaStorage
  }
})