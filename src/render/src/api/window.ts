import { useIpcRenderer } from "@vueuse/electron"
import {
  AspectRatio
} from '~/share/index'
import type {
  UseIpcRendererReturn
} from "@vueuse/electron"

class WindowUtils {
  ipcRenderer!: UseIpcRendererReturn

  static instance: WindowUtils

  constructor() {
    if (WindowUtils.instance) {
      return WindowUtils.instance
    }

    this.ipcRenderer = useIpcRenderer()

    WindowUtils.instance = this
  }
  
  // 调节窗口比例
  windowResizable(resizeable: AspectRatio) {
    this.ipcRenderer.send('windowResizable', resizeable)
  }
}

export default WindowUtils
