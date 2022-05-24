import fetch from '../instance'

interface Req {
  filePath: string
}

function getLocalFile(path: string) {
  return fetch<Req, Blob>({
    url: '/video',
    method: "post",
    responseType: "blob",
    data: {
      filePath: path
    }
  })
}

export const localFileApi = {
  getLocalFile
}

