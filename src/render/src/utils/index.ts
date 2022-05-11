import * as dayjs from 'dayjs'
import * as duration from 'dayjs/plugin/duration'

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
