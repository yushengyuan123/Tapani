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

    // if (Array.isArray(message)) {
    //   for (const object of message) {
    //     this._onobject(object)
    //   }
    // } else {
    //   this._onobject(message)
    // }
  }

  _onobject (message: any) {
    
  }
 
  open() {
    this.socket = new WebSocket(this.url)
    const self = this
    const socket = this.socket

    socket.onclose = (...args) => {
      this.emit('close', ...args)
    }

    socket.onmessage = (event) => {      
      let message

      try {
        message = JSON.parse(event.data)       
      } catch (err) {
        this.emit('error', err)
        return
      }
      
      self._onmessage(message)
    }

    socket.onopen = (...args) => {
      this.emit('open', ...args)
    }

    socket.onerror = (...args) => {
      this.emit('error', ...args)
    }
  }
}