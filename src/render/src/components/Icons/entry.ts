import Continue from './Continue'
import Back from './Back'
import Forward from './Forward'
import Setting from './Setting'
import Volume from './Volume'
import Pause from "./Pause"
import MenuList from './MenuList'
import { registerIcon } from "./Index.vue"
import type {
  registerIconName
} from './types'


function batchRegisterIcons() {
  const registerArr = [
    Continue,
    Back,
    Forward,
    Setting,
    Volume,
    Pause,
    MenuList
  ]
  registerArr.forEach(ops => {
    registerIcon(ops)
  })
}

const iconCollect: Record<registerIconName, any> = {
  "round-play-arrow": Continue.iconInstance,
  "baseline-fast-rewind": Back.iconInstance,
  "baseline-fast-forward": Forward.iconInstance,
  "round-settings": Setting.iconInstance,
  "round-volume": Volume.iconInstance,
  "outline-pause": Pause.iconInstance,
  "round-menu": MenuList.iconInstance
}

batchRegisterIcons()

export default iconCollect