import { BackendFetch, DevTools, FormatSimple, Tolgee, type TolgeeStaticData } from '@tolgee/vue'
import { FormatIcu } from '@tolgee/format-icu'
import en from '@/i18n/en.json'
import { type LanguageType, LOCALES } from '@/helpers/interfaces'

export const languages: Record<LanguageType, string> = {
  en: 'English',
}

const staticData: TolgeeStaticData = {
  en: en,
}

const tolgee = Tolgee().use(DevTools()).use(FormatSimple()).use(FormatIcu())

// use the CDN for translations in deploy preview environments
export const isDeployPreviewEnvironment = window.location.hostname.startsWith('deploy-preview')
if (isDeployPreviewEnvironment) {
  tolgee.use(BackendFetch({ prefix: import.meta.env.VITE_TOLGEE_CDN }))
}

export default tolgee.init({
  availableLanguages: [...LOCALES],
  language: import.meta.env.VITE_DEFAULT_LOCALE,
  staticData,
})
