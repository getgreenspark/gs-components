import { createApp } from 'vue'

import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'

import App from '@/App.vue'
import { registerPlugins } from '@/plugins'

export const app = createApp(App)

registerPlugins(app)
app.mount('#app')
