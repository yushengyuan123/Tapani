import { Context, Next } from 'koa'
import { DownloadReq } from '~/share/api/task'
import { downloadFile } from '../services/taskServices'

class TaskController {
  async addTask(context: Context, next: Next) {
    // @ts-ignore
    const body = context.request.body as DownloadReq

    downloadFile({
      magnet: body.magnet
    })

    context.success()
  }
}

const ins = new TaskController()

export default ins

