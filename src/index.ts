import { type App } from 'vue'

import './assets/style/variables.css'

import GsAlertBar from './components/GsAlertBar.vue'
import GsButton from './components/GsButton.vue'
import GsFilter from './components/GsFilter.vue'
import GsTabs, { type TabItem } from './components/GsTabs.vue'
import GsTag from './components/GsTag.vue'
import GsDivider from './components/GsDivider.vue'
import GsInput from './components/GsInput.vue'
import { RulesMixin } from './helpers/RulesMixin'
import GsActionCard from './components/GsActionCard.vue'
import GsTooltip from './components/GsTooltip.vue'
import GsPresetInput from './components/GsPresetInput.vue'

import { registerPlugins } from './plugins'

declare module 'vue' {
  export interface GlobalComponents {
    GsButton: (typeof import('./components/GsButton.vue'))['default']
    GsAlertBar: (typeof import('./components/GsAlertBar.vue'))['default']
    GsFilter: (typeof import('./components/GsFilter.vue'))['default']
    GsTabs: (typeof import('./components/GsTabs.vue'))['default']
    GsTag: (typeof import('./components/GsTag.vue'))['default']
    GsDivider: (typeof import('./components/GsDivider.vue'))['default']
    GsInput: (typeof import('./components/GsInput.vue'))['default']
    RulesMixin: (typeof import('./helpers/RulesMixin.ts'))['RulesMixin']
    GsActionCard: (typeof import('./components/GsActionCard.vue'))['default']
    GsTooltip: (typeof import('./components/GsTooltip.vue'))['default']
    GsPresetInput: (typeof import('./components/GsPresetInput.vue'))['default']
  }
}

export {
  GsButton,
  GsAlertBar,
  GsFilter,
  GsTabs,
  type TabItem,
  GsTag,
  GsDivider,
  GsInput,
  RulesMixin,
  GsActionCard,
  GsTooltip,
  GsPresetInput,
}

const components = {
  GsButton,
  GsAlertBar,
  GsFilter,
  GsTabs,
  GsTag,
  GsDivider,
  GsInput,
  RulesMixin,
  GsActionCard,
  GsTooltip,
  GsPresetInput,
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
