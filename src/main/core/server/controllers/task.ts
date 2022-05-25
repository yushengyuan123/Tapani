import { Context, Next } from 'koa'
import { DownloadReq } from '~/share/api/task'
import { downloadFile } from '../services/taskServices'

class TaskController {
  async addTask(context: Context, next: Next) {
    // @ts-ignore
    const body = context.request.body as DownloadReq

    let payload = null

    if (body.mode === "magnet") {
      payload = body.magnet
    } else {
      payload = body.magnet
    }

    downloadFile({
      magnet: payload
    })

    context.success('success', payload)
  }
}

const ins = new TaskController()

export default ins

