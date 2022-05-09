import {
  ipcMain,
  BrowserWindow
} from 'electron'
import WindowManager from '../../WindowManager'
import {
  AspectRatio
} from '../../global'

class WindowUtils {
  mainWindow: BrowserWindow

  static instance: WindowUtils | null = null

  constructor() {
    // @ts-ignore
    this.mainWindow = global.application.windowManager.getWindow()

    if (WindowUtils.instance) {
      return WindowUtils.instance
    }

    WindowUtils.instance = this
  }

  initWindowStatus() {
    this.windowResizable()
  }
  
  // 调节窗口比例，宽度不变，改变长度
  windowResizable() {
    ipcMain.on('windowResizable', (e, resizeable: AspectRatio) => {
      const sizeArr = this.mainWindow?.getSize()
      const curWidth = sizeArr[0]
    
      this.mainWindow?.setContentSize(curWidth, ~~(curWidth / resizeable))
    })
  }
}

export default WindowUtils
