import {
  CSSProperties
} from "vue"

type registerIconName =
  'round-play-arrow' |
  'baseline-fast-forward' |
  'baseline-fast-rewind' |
  'round-settings' |
  'round-volume' |
  'outline-pause' |
  'round-menu'

type iconNewName =
  'continue' |
  'forward' |
  'back' |
  'setting' |
  'volume' |
  'pause' |
  'menu-list'

interface IconRegisterOption {
  name: iconNewName
  icon: registerIconName,
  style?: CSSProperties,
  iconInstance: any
}

export {
  IconRegisterOption,
  registerIconName,
  iconNewName
}