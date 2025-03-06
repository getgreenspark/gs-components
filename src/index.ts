import { type App } from 'vue'

import './style.css'
import { registerPlugins } from './plugins'
import GsButton from './components/GsButton.vue'

export { GsButton }

export default {
  install(app: App) {
    registerPlugins(app)
    app.component('GsButton', GsButton)
  },
}
