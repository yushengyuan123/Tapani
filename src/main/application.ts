import { spawn } from 'child_process'
import WindowManager from "./WindowManager"
import MenuManager from "./MenuManager"
import { EventEmitter } from 'events'
import { Command } from "~/share/index"
import {dialog} from 'electron'
import is from "electron-is"
import * as path from "path"
import { DownloadManager } from './core/webtorrent/lib/DownloadManager'
import KoaServer from './core/server'

class Application extends EventEmitter {
  menuManager!: MenuManager
  
  windowManager!: WindowManager
  
  constructor() {
    super()
    
    this.setupMenuManager()
    
    this.initWindowManager()
    
    this.handleCommand()

    this.initWebSocket()
    
    this.initEggServer()
  }
  
  setupMenuManager() {
    this.menuManager = new MenuManager()
  }
  
  initWindowManager() {
    this.windowManager = new WindowManager()
  }

  initWebSocket() {
    new DownloadManager()
  }
  
  initEggServer() {
    new KoaServer()
    // if (is.dev()) {
    //   const scriptPath = path.join(__dirname, '../../startup.sh')
    //   const server = spawn(`sh`, [scriptPath])
  
    //   server.stdout.on('data', (data: Buffer) => {
    //     console.log('[Egg Server]:', data.toString())
    //   })
  
    //   server.stderr.on('data', (data: Buffer) => {
    //     console.error('[Egg Server]: error', data.toString())
    //   })
  
    //   server.on('close', () => {
    //     console.error('http server close！')
    //   })
    // }
  }
  
  sendCommandToAll(command: CommandTypes, ...args: any[]) {
    if (!this.emit(command)) {
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
