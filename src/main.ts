import { createApp } from 'vue'

import 'vuetify/styles'
import './style.css'

import App from './App.vue'
import { registerPlugins } from './plugins'

export const app = createApp(App)

registerPlugins(app)
app.mount('#app')
