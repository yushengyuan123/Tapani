import fetch from '../instance'

interface Req {
  filePath: string
}

const getLocalFile = (path) => {
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

