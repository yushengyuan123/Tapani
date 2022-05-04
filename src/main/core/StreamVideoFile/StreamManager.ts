import * as Stream from "stream"
import { pipeline } from "stream"
import { promisify } from 'util'

class StreamManager {
  steps: any
  pipeline: any;
  
  constructor() {
    this.pipeline = promisify(pipeline)
  }
  
  registerSteps(steps: any) {
    this.steps = steps
  }
  
  run() {
    this.pipeline(...this.steps)
  }
}

export const streamManager = new StreamManager()

