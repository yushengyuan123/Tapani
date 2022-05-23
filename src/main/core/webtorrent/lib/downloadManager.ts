const WebTorrent = require('webtorrent')
import { WebSocketMainServer } from './server'

export interface DownloadOptions {
  name: string
}

export class DownloadManager extends WebSocketMainServer {
  client!: any

  downloadList: any

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
  }

  add() {
    const self = this

    const uri = '/Users/yushengyuan/yushengyuan/opcua/torrent/my.torrent'

    // this.client.add(uri, (torrent: any) => {
    //   // Got torrent metadata!
    //   const interval = setInterval(function () {
    //     const message = 'Progress: ' + (torrent.progress * 100).toFixed(1) + '%'
    //     console.log(message)
    //     self.sendMessage(message)
    //   }, 1000)
      
    //   torrent.on('done', function () {
    //     console.log('torrent download finished')
    //   })
    // })
  }
}