import { type App } from 'vue'
import vuetify from './vuetify'
import i18n from '@/i18n'

export function registerPlugins(app: App): void {
  app.use(i18n)
  app.use(vuetify)
}
