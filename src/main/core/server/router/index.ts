import { RoutesRecord } from "./routes"
import { routes } from "./routes"

const KoaRouter = require('koa-router')
const router = new KoaRouter()

routes.forEach((route: RoutesRecord) => {
  const { method, path, controller } = route

  router[method](path, controller)
})

export default router

