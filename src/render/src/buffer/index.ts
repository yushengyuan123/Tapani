import * as fs from 'fs'

interface Ops{
  filePath: string
}

class FileStreamManager {
  convertFileToBlob(filePath: string) {
    const readableStream = fs.createReadStream(filePath)
    let chunks = []
    
    return new Promise(resolve => {
      readableStream.on('data', (buffer: Buffer) => {
        chunks.push(buffer)
      })
  
      readableStream.once('end', () => {
        resolve(new Blob(chunks))
        chunks = null
      })
    })
  }
}

const fileStreamManager = new FileStreamManager()

export default fileStreamManager