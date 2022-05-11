import {
  ipcMain,
  Shell,
  BrowserWindow,
  shell
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

    this.openBrowserUrl()

    this.setFullScreen()
    
    this.reduceScreen()
  }
  
  // 调节窗口比例，宽度不变，改变长度
  windowResizable() {
    ipcMain.on('windowResizable', (e, resizeable: AspectRatio) => {
      const sizeArr = this.mainWindow?.getSize()
      const curWidth = sizeArr[0]
      
      this.mainWindow?.setContentSize(curWidth, ~~(curWidth / resizeable))
    })
  }

  openBrowserUrl() {
    ipcMain.on('openGithub', (e, url: string) => {
      shell.openExternal(url)
    })
  }

  setFullScreen() {
    ipcMain.on('setFullScreen', (e) => {
      this.mainWindow?.setFullScreen(true)
    })
  }

  reduceScreen() {
    ipcMain.on('reduceScreen', (e) => {
      this.mainWindow?.setFullScreen(false)
    })
  }
}

export default WindowUtils
