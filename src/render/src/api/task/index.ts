import fetch from '../instance'
import { DownloadReq } from '~/share/api/task'

function downloadTask(formData: DownloadReq) {
  return fetch<DownloadReq, null>({
    url: '/task/add',
    method: "post",
    data: formData
  })
} 

export const taskApi = {
  downloadTask
}