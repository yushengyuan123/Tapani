import middlewareList from "./middleware"
import router from "./router"

const Koa = require('koa')


export default class KoaServer {
  app!:any
  router: any
  static instance: KoaServer

  constructor() {
    if (KoaServer.instance) {
      return KoaServer.instance
    }

    this.app = new Koa()
    
    this.initMiddleWares()

    this.initRouter()

    KoaServer.instance = this

    this.startServer()
  }

  startServer() {
    this.app.listen(7001, () => {
      console.log('http server start!')
    })
  }

  initRouter() {
    this.app.use(router.routes()).use(router.allowedMethods())
  }

  initMiddleWares() {
    middlewareList.forEach(middleware => {
      this.app.use(middleware)
    })
  }
}