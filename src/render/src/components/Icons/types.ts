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
  'round-menu' |
  'round-color-lens' |
  'baseline-dvr' |
  'round-missed-video-call' |
  'baseline-media-bluetooth-on'

type iconNewName =
  'continue' |
  'forward' |
  'back' |
  'setting' |
  'volume' |
  'pause' |
  'menu-list' |
  'color' |
  'app' |
  'video' |
  'media'

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
