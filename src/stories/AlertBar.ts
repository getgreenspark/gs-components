import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsAlertBar from '@/components/GsAlertBar.vue'

const meta: Meta<typeof GsAlertBar> = {
  title: 'Components/InfoBar',
  component: GsAlertBar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning'],
      description: 'The variant style of the info bar.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the info bar take the full width of its container.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsAlertBar>

const message = 'Soufflé marshmallow chocolate cake marzipan cake soufflé cookie biscuit'
export const Variants: Story = {
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args, message }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsAlertBar type="success" :message="message" />
        <GsAlertBar type="success" :message="message" title="Success Title" />
        <GsAlertBar type="info" :message="message" />
        <GsAlertBar type="info" :message="message" title="Info Title" />
        <GsAlertBar type="warning" :message="message" />
        <GsAlertBar type="warning" :message="message" title="Warning Title" />
        <GsAlertBar type="error" :message="message" />
        <GsAlertBar type="error" :message="message" title="Error Title" />
      </div>
    `,
  }),
}
