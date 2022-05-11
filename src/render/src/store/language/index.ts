import { ref } from "vue"
import { defineStore } from "pinia"
import { LanguageSorts } from "../../language"
import { useI18n } from 'vue-i18n'
import { useSystemStorage } from "../../pages/useSystemStorage"

export type LanguageTypes = '中文(简体)' | '中文(繁体)' | 'English'

export const langMap: Record<LanguageTypes, LanguageSorts> = {
  '中文(简体)': 'zh_CN',
  'English': 'en_US',
  '中文(繁体)': 'zh_HK'
}

export const sortsToValue: Record<LanguageSorts, LanguageTypes> = {
  "zh_CN": "中文(简体)",
  "en_US": "English",
  "zh_HK": "中文(繁体)"
}

export interface LanguageData {
  value: LanguageTypes
}

export const useLanguage = defineStore('language-store', () => {
  const defaultLanguage = ref<LanguageTypes>('中文(简体)')
  const { locale } = useI18n()
  const { updateLanguageStorage } = useSystemStorage()
  const languageList: LanguageData[] = [
    {
      value: 'English'
    },
    {
      value: '中文(简体)'
    },
    {
      value: '中文(繁体)'
    },
  ]

  const updateDefaultLanguage = (language: LanguageTypes) => {
    defaultLanguage.value = language
  
    locale.value = langMap[language]

    updateLanguageStorage("curLang", locale.value)
  }

  return {
    defaultLanguage,
    languageList,
    updateDefaultLanguage
  }
})