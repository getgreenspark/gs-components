export const LANGUAGES = ['en'] as const
export type LanguageType = (typeof LANGUAGES)[number]
export const LOCALES = [...LANGUAGES, 'en-US'] as const
export type LocaleType = (typeof LOCALES)[number]
