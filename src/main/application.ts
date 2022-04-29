import {
  BrowserWindow,
  app
} from 'electron'
import electronConfig from './config/electronConfig'
import * as is from 'electron-is'

const debugAddress = 'http://localhost:1337/'

class Application {
  constructor() {
    this.createWindows()
  }
  
  createWindows() {
    app.whenReady().then(() => {
      const win = new BrowserWindow({
        ...electronConfig
      })
    
      if (is.dev()) {
        win.loadURL(debugAddress)
        win.webContents.openDevTools({
          mode: 'detach'
        })
      }
    })
  }
}

export default Application