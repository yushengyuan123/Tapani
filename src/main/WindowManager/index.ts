import {app, BrowserWindow} from "electron"
import electronConfig from "../config/electronConfig"
import * as path from 'path'
import * as is from "electron-is"
import { AspectRatio } from "../global"
import WindowUtils from "../core/api/window"

enum ResizeDirection {
  Align = 'Align',
  Justify = 'Justify',
  Diagonal = 'Diagonal'
}

type Pages = 'main'

type WindowsMap = Map<Pages, BrowserWindow>

export default class WindowManager {
  window!: BrowserWindow
  windows!: WindowsMap
  
  constructor() {
    this.windows = new Map()
    
    this.createWindows()
  }
  
  createWindows() {
    app.whenReady().then(() => {
      this.window = new BrowserWindow({
        ...electronConfig
      })
      
      this.windows.set('main', this.window)
      
      if (is.dev()) {
        const debugAddress = 'http://localhost:1337/'
        this.window.loadURL(debugAddress)
        this.window.webContents.openDevTools({
          mode: 'detach'
        })
      } else {        
        this.window.loadFile(path.join(__dirname, '/index.html'))
      }

      const windowUtils = new WindowUtils()

      windowUtils.initWindowStatus()
  
      this.window.on('will-resize', (event, newBounds) => {
        event.preventDefault()
        
        // 0表示宽度 1表示高度
        const curSize = this.window.getSize()
        const curWidth = curSize[0]
        const curHeight = curSize[1]
        let resizeDirection: ResizeDirection
        
        if (
          curWidth !== newBounds.width &&
          curHeight !== newBounds.height
        ) {
          resizeDirection = ResizeDirection.Diagonal
        } else if (curWidth !== newBounds.width) {
          resizeDirection = ResizeDirection.Justify
        } else {
          resizeDirection = ResizeDirection.Align
        }
        
        switch (resizeDirection) {
        // 拉伸宽度
        case ResizeDirection.Align: {
          this.window.setContentSize(~~(newBounds.height * AspectRatio.SixteenToNine), newBounds.height)
          break
        }
        // 拉伸高度
        case ResizeDirection.Justify: {
          this.window.setContentSize(newBounds.width, ~~(newBounds.width / AspectRatio.SixteenToNine))
          break
        }
        case ResizeDirection.Diagonal: {
          this.window.setContentSize(newBounds.width, newBounds.height)
          break
        }
        }
      })
    })
  }
  
  getWindow() {
    return this.window
  }
  
  getWindows() {
    return this.windows
  }
  
  getWindowList() {
    const windowArr = []
    const windowsMap = this.getWindows()
    
    for (const [key, windowIns] of windowsMap) {
      windowArr.push(windowIns)
    }
    
    return windowArr
  }
  
  sendCommandTo(
    window: BrowserWindow,
    channel: CommandTypes,
    ...args: any[]
  ) {
    if (!window) {
      return
    }

    window.webContents.send(channel, ...args)
  }
}

