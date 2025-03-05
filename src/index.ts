import { type App } from 'vue'
import GsButton from '@/components/GsButton.vue'

export { GsButton }

export default {
  install(app: App) {
    app.component('GsButton', GsButton)
  },
}
