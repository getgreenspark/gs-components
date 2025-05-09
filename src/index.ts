import { type App } from 'vue'

import './assets/style/variables.css'

import GsAlertBar from './components/GsAlertBar.vue'
import GsButton from './components/GsButton.vue'
import { registerPlugins } from './plugins'

declare module 'vue' {
  export interface GlobalComponents {
    GsButton: (typeof import('./components/GsButton.vue'))['default']
    GsAlertBar: (typeof import('./components/GsAlertBar.vue'))['default']
  }
}

export { GsButton, GsAlertBar }

const components = {
  GsButton,
  GsAlertBar,
}

const GsComponents = {
  install(app: App) {
    registerPlugins(app)
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}

export default GsComponents
