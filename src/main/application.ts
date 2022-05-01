import {
  BrowserWindow,
  app
} from 'electron'
import electronConfig from './config/electronConfig'
import * as is from 'electron-is'
import { AspectRatio } from "./global"

const debugAddress = 'http://localhost:1337/'

enum ResizeDirection {
  Align = 'Align',
  Justify = 'Justify',
  Diagonal = 'Diagonal'
}

class Application {
  constructor() {
    this.createWindows()
  }
  
  createWindows() {
    app.whenReady().then(() => {
      const window = new BrowserWindow({
        ...electronConfig
      })
    
      if (is.dev()) {
        window.loadURL(debugAddress)
        window.webContents.openDevTools({
          mode: 'detach'
        })
      }
  
      window.on('will-resize', (event, newBounds) => {
        event.preventDefault()
        // 0表示宽度 1表示高度
        const curSize = window.getSize()
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
        // 拉伸高度
        case ResizeDirection.Align: {
          window.setContentSize(~~(newBounds.height * AspectRatio.SixteenToNine), newBounds.height)
          break
        }
        // 拉伸宽度
        case ResizeDirection.Justify: {
          window.setContentSize(newBounds.width, ~~(newBounds.width / AspectRatio.SixteenToNine))
          break
        }
        case ResizeDirection.Diagonal: {
          window.setContentSize(newBounds.width, newBounds.height)
          break
        }
        }
      })
    })
  }
}

export default Application
