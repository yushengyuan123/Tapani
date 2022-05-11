import { OperatorKeyTypes } from '../store/keyboard'
import { useVideoInfo } from '../store/videoInfo'

class HotKeyOperateManager {
  operateMap!: Map<OperatorKeyTypes, Function>

  static instance: HotKeyOperateManager

  constructor() {
    if (HotKeyOperateManager.instance) {
      return HotKeyOperateManager.instance
    }

    this.operateMap = new Map<OperatorKeyTypes, Function>()

    this.register()

    HotKeyOperateManager.instance = this
  }

  register() {
    this.operateMap.set("full-screen", this.useFullScreenMode)
  }

  execute(key: OperatorKeyTypes) {
    const callback = this.operateMap.get(key)

    if (callback) {
      callback()
    } else {
      console.error('该快捷键命令不存在')
    }
  }

  useFullScreenMode() {
    const { updateMode } = useVideoInfo()

    updateMode(true)
  }
}

export default HotKeyOperateManager