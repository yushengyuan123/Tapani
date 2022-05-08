import {
  ref
} from "vue"

export const useAsideDrawerContent = () => {
  const contentTabHeader = [
    {
      value: '字幕'
    },
    {
      value: '画面'
    },
    {
      value: '声音'
    },
  ]
  
  return {
    contentTabHeader
  }
}
