import { Context, Next } from 'koa'

export const responseHandler = async (context: Context, next: Next) => {
  context.success = (
    message: string, 
    data: any,
  ) => {
    context.body = {
      code: 200,
      msg: message || 'success',
      data: data || null,
    }
  }

  await next()
}

export const errorHandler = (ctx: Context, next: Next) => {
  return next().catch((err) => {
    if (err.code == null) {
      console.error(err.stack)
    }
    
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = 'Protected resource, use Authorization header to get access\n'
    } else {
      ctx.body = {
        code: err.code || -1,
        data: null,
        msg: err.message.trim() || '失败',
      }
      ctx.status = 200
    }
    return Promise.resolve()
  })
}
