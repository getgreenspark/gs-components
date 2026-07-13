export const LANGUAGES = ['en'] as const
export type LanguageType = (typeof LANGUAGES)[number]
export const LOCALES = [...LANGUAGES, 'en-US'] as const
export type LocaleType = (typeof LOCALES)[number]

export interface SimpleTableColumn {
  id: string
  label: string
  ariaHidden?: boolean
}

export interface SimpleTableItem {
  key: string
}

export type GsPageSectionVariant = 'card' | 'elevated' | 'flat'
export type GsPageSectionTitleTag = 'h2' | 'h3'
export type GsPageSectionTitleSize = 'sm' | 'lg'
export type GsPageSectionContentGap = 'sm' | 'md'
export type GsPageSectionPadding = 'default' | 'compact'
