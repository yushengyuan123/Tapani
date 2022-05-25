const WebTorrent = require('webtorrent')
import * as os from 'os'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { WebSocketMainServer } from './server'
import { generateMessage, MessageTypes } from '~/share/api/websocketMessage'

import type { CreateTaskInfo } from '~/share/api/websocketMessage'


export interface DownloadOptions {
  name: string
}

export interface DownloadTaskOps {
  uri: string,
  outputDir: string,
}

export class DownloadManager extends WebSocketMainServer {
  client!: any

  downloadList: CreateTaskInfo[] = []

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

  addToDownloadList(
    id: string, 
    name: string, 
    length: number, 
    total: number,
    outputDir: string
  ) {
    this.downloadList.push({
      id: id,
      name: name,
      length: length,
      totalFilesLength: total,
      outputDir: outputDir
    })
  }

  init() {
    this.client = new WebTorrent()

    this.defaultOutputDir = path.join(os.homedir(), 'Downloads')
  }

  add(uri: string, options?: Partial<DownloadTaskOps>) {
    const self = this
    const outputDir = options?.outputDir || this.defaultOutputDir
    const targetDir = path.join(outputDir, 'Player')

    this.client.add(uri, {
      path: targetDir
    }, (torrent: any) => {
      console.log(torrent.files)
      const files = torrent.files
      const len = files.length
      const firstFiles = files[0]
      const { name, length } = firstFiles
      const uid = uuidv4()

      self.addToDownloadList(uid, name, length, len, targetDir)

      self.sendMessage(generateMessage(MessageTypes.CREATE, self.downloadList))
      
      let interval = setInterval(() => {
        const message = 'Progress: ' + (torrent.progress * 100).toFixed(1) + '%'
        console.log(message)
        self.sendMessage(generateMessage(MessageTypes.UPDATE, {
          id: uid,
          progress: torrent.progress
        }))
      }, 2000)
      
      torrent.on('done', function () {
        console.log('torrent download finished')
        clearInterval(interval)
      })
    })
  }
}