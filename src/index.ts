import { type App } from 'vue'

import './assets/style/variables.css'

import GsAlertBar from './components/GsAlertBar.vue'
import GsButton from './components/GsButton.vue'
import GsCardSelector from './components/GsCardSelector.vue'
import GsCheckbox from './components/GsCheckbox.vue'
import GsColorPicker from './components/GsColorPicker.vue'
import GsDivider from './components/GsDivider.vue'
import GsFloatingActionMenu from './components/GsFloatingActionMenu.vue'
import GsIconWithText from './components/GsIconWithText.vue'
import GsIntegrationSelector from './components/GsIntegrationSelector.vue'
import GsManagePlan from './components/GsManagePlan.vue'
import GsNotificationBar from './components/GsNotificationBar.vue'
import GsPlanOverview from './components/GsPlanOverview.vue'
import GsProgressBar from './components/GsProgressBar.vue'
import GsProjectFilter from './components/GsProjectFilter.vue'
import GsProjectCardSelector from './components/GsProjectCardSelector.vue'
import GsRadioButton from './components/GsRadioButton.vue'
import GsSubmenu from './components/GsSubmenu.vue'
import GsTags from './components/GsTags.vue'
import GsTextField from './components/GsTextField.vue'
import GsTypography from './components/GsTypography.vue'
import GsVerification from './components/GsVerification.vue'
import { registerPlugins } from './plugins'

declare module 'vue' {
  export interface GlobalComponents {
    GsButton: (typeof import('./components/GsButton.vue'))['default']
    GsAlertBar: (typeof import('./components/GsAlertBar.vue'))['default']
    GsCardSelector: (typeof import('./components/GsCardSelector.vue'))['default']
    GsCheckbox: (typeof import('./components/GsCheckbox.vue'))['default']
    GsColorPicker: (typeof import('./components/GsColorPicker.vue'))['default']
    GsDivider: (typeof import('./components/GsDivider.vue'))['default']
    GsFloatingActionMenu: (typeof import('./components/GsFloatingActionMenu.vue'))['default']
    GsIconWithText: (typeof import('./components/GsIconWithText.vue'))['default']
    GsIntegrationSelector: (typeof import('./components/GsIntegrationSelector.vue'))['default']
    GsManagePlan: (typeof import('./components/GsManagePlan.vue'))['default']
    GsNotificationBar: (typeof import('./components/GsNotificationBar.vue'))['default']
    GsPlanOverview: (typeof import('./components/GsPlanOverview.vue'))['default']
    GsProgressBar: (typeof import('./components/GsProgressBar.vue'))['default']
    GsProjectFilter: (typeof import('./components/GsProjectFilter.vue'))['default']
    GsProjectCardSelector: (typeof import('./components/GsProjectCardSelector.vue'))['default']
    GsRadioButton: (typeof import('./components/GsRadioButton.vue'))['default']
    GsSubmenu: (typeof import('./components/GsSubmenu.vue'))['default']
    GsTags: (typeof import('./components/GsTags.vue'))['default']
    GsTextField: (typeof import('./components/GsTextField.vue'))['default']
    GsTypography: (typeof import('./components/GsTypography.vue'))['default']
    GsVerification: (typeof import('./components/GsVerification.vue'))['default']
  }
}

export {
  GsButton,
  GsAlertBar,
  GsColorPicker,
  GsCardSelector,
  GsCheckbox,
  GsDivider,
  GsFloatingActionMenu,
  GsIconWithText,
  GsIntegrationSelector,
  GsManagePlan,
  GsNotificationBar,
  GsPlanOverview,
  GsProgressBar,
  GsProjectFilter,
  GsProjectCardSelector,
  GsRadioButton,
  GsSubmenu,
  GsTags,
  GsTextField,
  GsTypography,
  GsVerification,
}

const components = {
  GsButton,
  GsAlertBar,
  GsColorPicker,
  GsCardSelector,
  GsCheckbox,
  GsDivider,
  GsFloatingActionMenu,
  GsIconWithText,
  GsIntegrationSelector,
  GsManagePlan,
  GsNotificationBar,
  GsPlanOverview,
  GsProgressBar,
  GsProjectFilter,
  GsProjectCardSelector,
  GsRadioButton,
  GsSubmenu,
  GsTags,
  GsTextField,
  GsTypography,
  GsVerification,
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
