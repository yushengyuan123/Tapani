import {defineStore} from "pinia"
import * as _ from 'lodash'
import {
  reactive
} from 'vue'

export type OperatorKeyTypes =
  'full-screen' |
  'zoom-in'

export type MagicKeysSet = Array<Set<string>>

export type KeyMap = Record<OperatorKeyTypes, MagicKeysSet>

const map: KeyMap = {
  "full-screen": [new Set(['MetaLeft', 'Enter'])],
  "zoom-in": [new Set([])],
}

function initKeyBoardOperateMap(
  availableKeyMap: KeyMap, 
  keyBoardOperateMap: Map<string, OperatorKeyTypes>
) {
  _.forOwn(availableKeyMap, (value: Set<string>[], opr: any) => {
    const set = value[0]
    const mapKey = [...set].join('-')

    keyBoardOperateMap.set(mapKey, opr)
  })
}

export const useKeyBoardSet = defineStore('key-board-set', () => {
  const availableKeyMap = reactive<KeyMap>(map)
  const keyBoardOperateMap = new Map<string, OperatorKeyTypes>()

  initKeyBoardOperateMap(map, keyBoardOperateMap)

  const getKeyBoardOperateMap = () => {
    return keyBoardOperateMap
  }
  
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
    getKeyBoardOperateMap,
    getSetKey,
    checkIsSetKey,
    updateKeyMap
  }
})


