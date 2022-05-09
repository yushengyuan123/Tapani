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
  'baseline-media-bluetooth-on' |
  'baseline-fullscreen' |
  'outline-close-fullscreen' |
  'baseline-home'

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
  'media' |
  'full-screen' |
  'close-full-screen' |
  'back-home'

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
