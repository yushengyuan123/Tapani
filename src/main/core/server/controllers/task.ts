import { Context, Next } from 'koa'

class TaskController {
  async addTask(context: Context, next: Next) {

    console.log('TaskController')

    context.success('caonims')

    // context.body = {
    //   code: 123,
    //   message: 'caonima'
    // }
    
    // await next()
  }
}

const ins = new TaskController()

export default ins

