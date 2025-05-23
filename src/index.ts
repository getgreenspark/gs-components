import { type App } from 'vue'

import './assets/style/variables.css'

import GsAlertBar from './components/GsAlertBar.vue'
import GsButton from './components/GsButton.vue'
import GsFilter from './components/GsFilter.vue'
import GsTabs, { type TabItem } from './components/GsTabs.vue'
import GsTag from './components/GsTag.vue'

import { registerPlugins } from './plugins'

declare module 'vue' {
  export interface GlobalComponents {
    GsButton: (typeof import('./components/GsButton.vue'))['default']
    GsAlertBar: (typeof import('./components/GsAlertBar.vue'))['default']
    GsFilter: (typeof import('./components/GsFilter.vue'))['default']
    GsTabs: (typeof import('./components/GsTabs.vue'))['default']
    GsTag: (typeof import('./components/GsTag.vue'))['default']
  }
}

export { GsButton, GsAlertBar, GsFilter, GsTabs, type TabItem, GsTag }

const components = {
  GsButton,
  GsAlertBar,
  GsFilter,
  GsTabs,
  GsTag,
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
