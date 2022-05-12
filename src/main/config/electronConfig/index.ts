import type { BrowserWindowConstructorOptions } from "electron"
import * as is from "electron-is"
import { AspectRatio } from "../../global"

const initHeight: number = 700

const electronConfig: BrowserWindowConstructorOptions = {
  height: initHeight,
  width: ~~(initHeight * AspectRatio.SixteenToNine),
  transparent: true,
  vibrancy: 'ultra-dark',
  // backgroundColor: is.macOS() ? '#000000' : '#FFF',
  webPreferences: {
    // preload: path.join(__dirname, 'renderPreload.ts'),
    contextIsolation: false,
    webSecurity: !is.dev(),
    nodeIntegration: true,
  },
  titleBarStyle: 'hiddenInset',
}

export default electronConfig
