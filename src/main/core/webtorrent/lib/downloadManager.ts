const WebTorrent = require('webtorrent')
import * as os from 'os'
import * as path from 'path'
import { WebSocketMainServer } from './server'

export interface DownloadItem {
  name: string,
  progress: number,
  status: boolean,
  size: number
}

export interface DownloadOptions {
  name: string
}

export interface DownloadTaskOps {
  uri: string,
  outputDir: string,
}

export class DownloadManager extends WebSocketMainServer {
  client!: any

  downloadList!: DownloadItem[]

  defaultOutputDir!: string

  static instance: DownloadManager

  constructor() {
    super()

    if (DownloadManager.instance) {
      return DownloadManager.instance
    }

    this.init()

    DownloadManager.instance = this
  }

  init() {
    this.client = new WebTorrent()

    this.defaultOutputDir = path.join(os.homedir(), 'Downloads')
  }

  add(uri: string, options?: Partial<DownloadTaskOps>) {
    const self = this
    const outputDir = options?.outputDir || this.defaultOutputDir
    const targetDir = path.join(outputDir, 'Player')

    uri = '/Users/yushengyuan/yushengyuan/opcua/torrent/my.torrent'

    this.downloadList.push({
      name: '阳光电影www.ygdy8.com.温德米尔儿童.2020.BD.1080P.中英双字',
      progress: 0,
      status: true,
      size: 1.6
    })

    self.sendMessage({
      name: '阳光电影www.ygdy8.com.温德米尔儿童.2020.BD.1080P.中英双字',
      progress: 0,
      status: true,
      size: 1.6
    })
    
    this.client.add(uri, {
      path: targetDir
    }, (torrent: any) => {
      console.log(torrent)
      
      // Got torrent metadata!
      let interval = setInterval(() => {
        const message = 'Progress: ' + (torrent.progress * 100).toFixed(1) + '%'
        console.log(message)
        self.sendMessage({
          name: '阳光电影www.ygdy8.com.温德米尔儿童.2020.BD.1080P.中英双字',
          progress: torrent.progress,
          status: true,
          size: 1.6
        })
      }, 1000)
      
      torrent.on('done', function () {
        console.log('torrent download finished')
        clearInterval(interval)
      })
    })
  }
}