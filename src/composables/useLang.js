import { ref } from 'vue'
import { translations } from '../i18n/translations.js'

export const lang = ref('vi')

export const toggleLang = () => {
  lang.value = lang.value === 'vi' ? 'en' : 'vi'
}

export const t = (key) => {
  const keys = key.split('.')
  const dict = translations[lang.value]
  const result = keys.reduce((obj, k) => obj?.[k], dict)
  return result ?? key
}
