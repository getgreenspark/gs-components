import { createApp } from 'vue'

import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'

import vuetify from './plugins/vuetify'
import App from './App.vue'

export const app = createApp(App)

app.use(vuetify)
app.mount('#app')
