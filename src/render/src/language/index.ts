import { createI18n } from 'vue-i18n'
import { useSystemStorage } from '../pages/useSystemStorage'
import zhCN from './lang/zh_CN'
import zhHK from './lang/zh_hk'
import enUS from './lang/en_US'

export type MessageSchema = typeof enUS

export type LanguageSorts = 'zh_CN' | 'en_US' | 'zh_HK'

export const setupI18n = () => {
  const { langStorage } = useSystemStorage()
  const i18n = createI18n({
    locale: langStorage.curLang,
    messages: {
      'zh_CN': zhCN,
      'en_US': enUS,
      'zh_HK': zhHK
    }
  })

  return i18n
}


