import { type App } from 'vue'
import { VueTolgee } from '@tolgee/vue'
import tolgee from '@/plugins/tolgee'
import vuetify from './vuetify'

export function registerPlugins(app: App): void {
  app.use(VueTolgee, { tolgee }).use(vuetify)
}
