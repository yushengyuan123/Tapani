import { useI18n } from "vue-i18n"

export const useAsideDrawerContent = () => {
  const { t } = useI18n()
  const contentTabHeader = [
    {
      value: t('video.video_setting.caption.title')
    },
    {
      value: t('video.video_setting.screen.title')
    },
    {
      value: t('video.video_setting.volume.title')
    },
  ]
  
  return {
    contentTabHeader
  }
}
