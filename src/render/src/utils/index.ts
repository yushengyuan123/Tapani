import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
// const duration = require('dayjs/plugin/duration')

export interface TorrentFilesList {
  name: string,
  extension: string,
  length: number,
  idx: number,
  offset: number,
  path: string
}

dayjs.extend(duration)

export function getCurTimeSeconds() {
  return new Date().getTime()
}

export function getCurrentTime() {
  const curSec = getCurTimeSeconds()
  return dayjs(curSec).format('HH:mm:ss')
}

export function convertSecondsToTime(seconds: number) {
  const duration = dayjs.duration(seconds, 'seconds')
  return duration.format('HH:mm:ss')
}

export function addUnit(value: number | string) {
  if (typeof value === "number") {
    value = value + 'px'
  }
  return value
}

export function getImgSrc(name: string) {
  return new URL(`../asserts/${name}.png`, import.meta.url).href
}

export function getFileExtension(filename: string) {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

export function listTorrentFiles(files: any[]): TorrentFilesList[] {
  const result = files.map((file, index) => {
    const extension = getFileExtension(file.path)
    const item = {
      // aria2 select-file start index at 1
      // possible Values: 1-1048576
      idx: index + 1,
      extension: `.${extension}`,
      ...file
    }
    return item
  })
  return result
}

export function convertByte(size: number) {
  const num = 1024.00

  if (size < num)
    return size + "B"
  if (size < Math.pow(num, 2))
    return (size / num).toFixed(2) + "K" //kb
  if (size < Math.pow(num, 3))
    return (size / Math.pow(num, 2)).toFixed(2) + "M" //M
  if (size < Math.pow(num, 4))
    return (size / Math.pow(num, 3)).toFixed(2) + "G" //G
}