import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import { registerPlugins } from './plugins'

export const app = createApp(App)

registerPlugins(app)
app.mount('#app')
