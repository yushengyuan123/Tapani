import {defineStore} from "pinia"
import * as _ from 'lodash'
import { useLocalStorage } from "@vueuse/core"

export type OperatorKeyTypes =
  'full-screen' |
  'zoom-in'

export type MagicKeysSet = Array<string[] | undefined>

export type KeyMap = Record<OperatorKeyTypes, MagicKeysSet>

const initDefaultMap: KeyMap = {
  "full-screen": [['MetaLeft', 'Enter']],
  "zoom-in": [],
}

function initKeyBoardOperateMap(
  availableKeyMap: KeyMap, 
  keyBoardOperateMap: Map<string, OperatorKeyTypes>
) {
  _.forOwn(availableKeyMap, (value: Array<string[] | undefined>, opr: any) => {
    const arr = value[0]
    let mapKey: string

    if (arr) {
      mapKey = arr.join('-')
    } else {
      mapKey = `unknown-${opr}`
    }

    keyBoardOperateMap.set(mapKey, opr)
  })
}

export const useKeyBoardSet = defineStore('key-board-set', () => {
  const availableKeyMap = useLocalStorage<KeyMap>('player-keyboard-setting', initDefaultMap)
  const keyBoardOperateMap = new Map<string, OperatorKeyTypes>()

  initKeyBoardOperateMap(availableKeyMap.value, keyBoardOperateMap)

  const getKeyBoardOperateMap = () => {
    return keyBoardOperateMap
  }
  
  // const checkIsSetKey = (key: OperatorKeyTypes, index = 0) => {
  //   if (!availableKeyMap.value[key].length) {
  //     return false
  //   } else {
  //     return availableKeyMap.value[key][index]!.length !== 0
  //   }
  // }
  
  const getSetKey = (key: OperatorKeyTypes, index = 0) => {
    if (availableKeyMap.value[key].length == 0) {
      return []
    }
    return availableKeyMap.value[key][index]
  }
  
  const updateKeyMap = (key: OperatorKeyTypes, payload: string[], index = 0) => {
    const oldKey = availableKeyMap.value[key][index]

    if (oldKey) {     
      keyBoardOperateMap.delete(oldKey.join('-'))
      keyBoardOperateMap.set(payload.join('-'), key)
    } else {
      keyBoardOperateMap.delete(`unknown-${key}`)
      keyBoardOperateMap.set(payload.join('-'), key)
    }

    availableKeyMap.value[key][index] = payload
  }
  
  return {
    availableKeyMap,
    getKeyBoardOperateMap,
    getSetKey,
    // checkIsSetKey,
    updateKeyMap
  }
})


