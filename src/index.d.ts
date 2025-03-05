import { type App } from 'vue'
import GsButton from './components/GsButton.vue'

export { GsButton }

declare const GsComponents: {
  install(app: App): void
}

export default GsComponents
