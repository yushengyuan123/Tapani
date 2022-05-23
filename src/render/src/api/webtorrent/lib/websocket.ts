import { EventEmitter } from 'events'
// import WebSocket from 'ws'

export class WebSocketClient extends EventEmitter {
  socket!: WebSocket
  url!: string
  static instance: WebSocketClient

  constructor() {
    if (WebSocketClient.instance) {
      return WebSocketClient.instance
    }
    
    super()

    this.url = 'ws://127.0.0.1:30001'

    WebSocketClient.instance = this
  }

  sendMessage(message: any) {
    this.socket.send(JSON.stringify(message))
  }

  _onmessage = (message: any) => {
    this.emit('input', message)
  }
 
  open() {
    this.socket = new WebSocket(this.url)
    const socket = this.socket

    socket.onclose = (...args) => {
      this.emit('close', ...args)
    }

    socket.onmessage = (event) => {
      console.log(event)
      
      let message

      try {
        message = event.data
      } catch (err) {
        this.emit('error', err)
        return
      }
      // this._onmessage(message)
      console.log('shoudaoxiaoxi');
      
      console.log(message)
      
    }

    socket.onopen = (...args) => {
      this.emit('open', ...args)
    }

    socket.onerror = (...args) => {
      this.emit('error', ...args)
    }
  }
}