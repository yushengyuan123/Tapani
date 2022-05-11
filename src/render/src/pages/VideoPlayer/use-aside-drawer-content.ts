import { useI18n } from "vue-i18n"

export enum SwitchComponent {
  Screen = 'Screen',
  Captions = 'Captions',
  Volume = 'Volume'
}

export const useAsideDrawerContent = () => {
  const { t } = useI18n()
  const contentTabHeader = [
    {
      value: t('video.video_setting.caption.title'),
      renderComponent: SwitchComponent.Captions
    },
    {
      value: t('video.video_setting.screen.title'),
      renderComponent: SwitchComponent.Screen
    },
    {
      value: t('video.video_setting.volume.title'),
      renderComponent: SwitchComponent.Volume
    },
  ]
  
  return {
    contentTabHeader
  }
}
