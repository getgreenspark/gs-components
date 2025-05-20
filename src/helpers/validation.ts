import { Decimal } from 'decimal.js'
import type { TranslateResult } from 'vue-i18n'
import i18n from '@/i18n'

const { t } = i18n.global

export const maxTwoDecimal = (value: number): boolean => {
  // when an input is cleared, the value is null
  // rendering the input initially empty the value is undefined
  // should be modulo 0.01 to allow for 2 decimal places
  return value === null || value === undefined
    ? true
    : Number(value) >= 0 && new Decimal(Number(value)).modulo(0.01).toNumber() === 0
}

export const positiveInteger = (value: number): boolean => {
  // when an input is cleared, the value is null
  // rendering the input initially empty the value is undefined
  return value === null || value === undefined
    ? true
    : Number.isSafeInteger(Number(value)) && Number(value) >= 0
}

export const maxlength =
  (maxLength: number = 240) =>
  <Type>(value: string | Array<Type>): boolean | TranslateResult =>
    (value || '').length <= maxLength || t(`rules.max_length`, { limit: maxLength })

export const minlength =
  (minLength: number) =>
  <Type>(value: string | Array<Type>): boolean | TranslateResult =>
    !((value || '').length > 0 && (value || '').length < minLength) ||
    t(`rules.min_length`, { limit: minLength })

export const maxValue =
  (maxValue: number = Number.MAX_SAFE_INTEGER) =>
  (v: number | string): boolean | TranslateResult =>
    Number(v) <= maxValue || t(`rules.max_value`, { limit: maxValue })

export const minValue =
  (minValue = 0, validationText?: string) =>
  (v: number | string): boolean | TranslateResult =>
    Number(v) >= minValue || validationText || t(`rules.min_value`, { limit: minValue })

export const url = (value: string): boolean | TranslateResult => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ) // fragment locator
  if (value) {
    const normalizedValue = value.startsWith('https://') ? value : 'https://' + value
    return pattern.test(normalizedValue) || t(`rules.url`)
  }
  return !value || t(`rules.required`)
}

export const domain = (value: string): boolean => {
  const pattern = new RegExp(/^(?!https:\/\/)(?!www\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/, 'g') // domain name
  if (value) {
    return pattern.test(value)
  }
  return !value
}

export const required = (value: number | string): boolean | TranslateResult =>
  !!value || t(`rules.required`)

export const email = (value: string): boolean | TranslateResult => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || t(`rules.email`)
}

export const emailName = (value: string): boolean => {
  const pattern = new RegExp(
    /^(?:(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*))$/,
    'g',
  )
  if (value) {
    return pattern.test(value)
  }
  return !value
}

export const password = (value: string): boolean | TranslateResult => {
  const pattern = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)).*$/
  return pattern.test(value) || t(`form_hint_password_complexity`)
}

export const repeated =
  <Type>(collection: Array<Type>) =>
  (value: Type): boolean => {
    return collection.indexOf(value) === -1
  }

export const unique =
  <Type>(collection: Array<Type>) =>
  (value: Type): boolean => {
    const index = collection.indexOf(value)
    return !collection.some((item, i) => item === value && i !== index)
  }

export const arrayMinLength =
  (minLength: number) =>
  (value: Array<unknown>): boolean | TranslateResult =>
    value?.length >= minLength || t(`rules.array_min_length`, { limit: minLength })
