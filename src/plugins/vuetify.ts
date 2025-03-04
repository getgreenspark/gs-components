import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { VTimePicker } from 'vuetify/labs/VTimePicker'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const greenspark = {
  dark: false,
  colors: {
    primary: '#3B755F',
    secondary: '#E57066',
    black: '#212121',
    green: '#3B755F',
    lightGreen: '#AFC6BD',
    red: '#E57066',
    error: '#E57066',
    white: '#F9F9F9',
    grey: '#BBBBBB',
    beige: '#F2EBDB',
  },
}

const vuetify = createVuetify({
  components: {
    VDateInput,
    VTimePicker,
    ...components,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'greenspark',
    themes: {
      greenspark,
    },
  },
})

export default vuetify
