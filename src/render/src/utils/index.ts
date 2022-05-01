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

export function secondsTransformToTime(seconds: number) {
  const duration = dayjs.duration(seconds, 'seconds')
  return duration.format('HH:mm:ss')
}

export function addUnit(value: number | string) {
  if (typeof value === "number") {
    value = value + 'px'
  }
  return value
}
