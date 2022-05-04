// import * as zlib from 'zlib'
// import { pipeline } from 'stream'
// import {
//   streamManager
// } from "./StreamManager"
// import * as fs from "fs-extra"
//
// export function streamVideoFile(filePath) {
//   const outputBuffer = Buffer.alloc(4000000)
//   const steps = [
//     fs.createReadStream(filePath),
//     zlib.createGzip(),
//     fs.createWriteStream(outputBuffer)
//   ]
//   streamManager.registerSteps(steps)
// }