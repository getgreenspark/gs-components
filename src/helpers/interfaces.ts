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

export type GsLayoutCardVariant = 'card' | 'elevated' | 'flat'
export type GsLayoutCardTitleTag = 'h2' | 'h3'
export type GsLayoutCardTitleSize = 'sm' | 'lg'
export type GsLayoutCardContentGap = 'sm' | 'md'
export type GsLayoutCardPadding = 'default' | 'compact'
