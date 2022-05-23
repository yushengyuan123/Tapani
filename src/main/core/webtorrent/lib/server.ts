import { EventEmitter } from 'events'
import WebSocket, { WebSocketServer } from 'ws'

export class WebSocketMainServer extends EventEmitter {
  socket!:WebSocket
  static instance: WebSocketMainServer

  constructor() {
    if (WebSocketMainServer.instance) {
      return WebSocketMainServer.instance
    }
    super()
  
    this.open()

    WebSocketMainServer.instance = this
  }

  sendMessage(message: any) {
    return new Promise((resolve, reject) => {
      const cb = (err: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(null)
        }
      }

      if (!this.socket) {
        console.error('websocket服务未启动')
      } else {
        this.socket.send(JSON.stringify(message), cb)
      }
    })
  }

  open() {
    const self = this
    
    const wss = new WebSocketServer({
      port: 30001
    })

    wss.on('connection', (ws: WebSocket) => {
      this.socket = ws

      ws.send('aaaaa')
      
      ws.on('message', (data: string) => {
        console.log('received: %s', data)
      })

      ws.on('error', (error: string) => {
        console.error(error)
      })

      this.emit('connection')
    })

  }
}