import { type App } from 'vue'

import './style.css'
import GsButton from './components/GsButton.vue'
import { registerPlugins } from './plugins'

declare module 'vue' {
  export interface GlobalComponents {
    GsButton: (typeof import('./components/GsButton.vue'))['default']
  }
}

export { GsButton }

const components = {
  GsButton: GsButton,
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
