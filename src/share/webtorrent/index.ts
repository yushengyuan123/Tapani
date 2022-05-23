// import { EventEmitter } from 'events'
// import _WebSocket from 'ws'

// const WebSocket = global.WebSocket || _WebSocket

// export class WebSocketClient extends EventEmitter {
//   socket!: WebSocket
//   url: string

//   constructor() {
//     super()

//     this.url = 'ws://localhost:'
//   }

//   websoket(message: any): Promise<any> {
//     return new Promise((resolve, reject) => {
//       const cb = (err: any) => {
//         if (err) reject(err)
//         else resolve()
//       }
//       this.socket.send(JSON.stringify(message), cb)

//       if (global.WebSocket && this.socket instanceof global.WebSocket) cb()
//     })
//   }

//   _onmessage = (message: any) => {
//     this.emit('input', message)
//   }
 
//   open() {
//     this.socket = new WebSocket(this.url)
//     const socket = this.socket

//     socket.onclose = (...args) => {
//       this.emit('close', ...args)
//     }

//     socket.onmessage = (event) => {
//       let message
//       try {
//         message = JSON.parse(event.data)
//       } catch (err) {
//         this.emit('error', err)
//         return
//       }
//       this._onmessage(message)
//     }

//     socket.onopen = (...args) => {
//       this.emit('open', ...args)
//     }

//     socket.onerror = (...args) => {
//       this.emit('error', ...args)
//     }
//   }
// }