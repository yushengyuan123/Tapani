import axios from "../index"

class FileApi {
  async fetchFile(path) {
    return await axios.post('/video', {
      filePath: path
    },{
      responseType: 'blob'
    })
  }
}

const fileModuleApi = new FileApi()

export default fileModuleApi
