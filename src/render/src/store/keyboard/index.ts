import {defineStore} from "pinia"
import {
  reactive
} from 'vue'

export type OperatorKeyTypes =
  'full-screen' |
  'zoom-in'

export type MagicKeysSet = Array<Set<string>>

export const useKeyBoardSet= defineStore('key-board-set', () => {
  const availableKeyMap = reactive<Record<OperatorKeyTypes, MagicKeysSet>>({
    "full-screen": [new Set(['MetaLeft', 'Enter'])],
    "zoom-in": [new Set([])],
  })
  
  const checkIsSetKey = (key: OperatorKeyTypes, index = 0) => {
    return availableKeyMap[key][index].size
  }
  
  const getSetKey = (key: OperatorKeyTypes, index = 0) => {
    return availableKeyMap[key][index]
  }
  
  const updateKeyMap = (key: OperatorKeyTypes, payload: string[], index = 0) => {
    availableKeyMap[key][index] = new Set(payload)
  }
  
  return {
    availableKeyMap,
    getSetKey,
    checkIsSetKey,
    updateKeyMap
  }
})

