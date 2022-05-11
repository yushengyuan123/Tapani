import { useMagicKeys } from '@vueuse/core'
import HotKeyOperateManager from '../utils/hotKeyOperateManager'
import { watchEffect } from 'vue'
import {
  useKeyBoardSet,
  OperatorKeyTypes
} from '../store/keyboard'

export const useKeyMonitor = () => {
  const { current } = useMagicKeys()
  const { getKeyBoardOperateMap } = useKeyBoardSet()
  const keyMap = getKeyBoardOperateMap()
  const manager = new HotKeyOperateManager()

  watchEffect(() => {
    const curKeyArr = Array.from(current)
    const maybeMapKey = curKeyArr.join('-')
      
    if (keyMap.has(maybeMapKey) && curKeyArr.length > 0) {
      manager.execute(<OperatorKeyTypes>keyMap.get(maybeMapKey)) 
    }
  })
}