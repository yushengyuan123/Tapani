import { responseHandler, errorHandler } from "./response"

const bodyParser = require('koa-bodyparser')

const middlewareList = [
  bodyParser(),
  responseHandler,

]

export default middlewareList