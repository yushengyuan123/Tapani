import WindowManager from "./WindowManager"
import MenuManager from "./MenuManager"
import * as logger from 'electron-log'
import * as fs from 'fs-extra'
import {EventEmitter} from 'events'
import {Command} from "~"
import {dialog} from 'electron'
import * as buffer from "buffer"


class Application extends EventEmitter {
  menuManager!: MenuManager
  
  windowManager!: WindowManager
  
  constructor() {
    super()
    
    this.setupMenuManager()
    
    this.initWindowManager()
    
    this.handleCommand()
  }
  
  setupMenuManager() {
    this.menuManager = new MenuManager()
  }
  
  initWindowManager() {
    this.windowManager = new WindowManager()
  }
  
  sendCommandToAll(command: CommandTypes, ...args: any[]) {
    if (!this.emit(command)) {
      console.log('发送时间')
      this.windowManager.getWindowList().forEach(window => {
        this.windowManager.sendCommandTo(window, command, ...args)
      })
    }
  }
  
  handleFileWithCommand(filePath: string, command: Command) {
    if (!filePath) {
      return
    }
    this.sendCommandToAll(command, { basePath: filePath })
  }
  
  handleCommand() {
    // 主进程主动打开文件
    this.on(
      Command.APPLICATION_OPEN_FILE,
      () => {
        dialog.showOpenDialog({
          properties: ['openFile']
        }).then(({ canceled, filePaths }) => {
          if (canceled || filePaths.length === 0) {
            return
          }
          this.handleFileWithCommand(filePaths[0], Command.VIDEO_LOCAL_SELECT)
        })
      }
    )
  }
}

export default Application