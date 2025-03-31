import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsInfoBar from '@/components/GsInfoBar.vue'

const meta: Meta<typeof GsInfoBar> = {
  title: 'Components/InfoBar',
  component: GsInfoBar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
      description: 'The variant style of the info bar.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the info bar take the full width of its container.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsInfoBar>

const message = 'Soufflé marshmallow chocolate cake marzipan cake soufflé cookie biscuit'
export const Variants: Story = {
  render: (args) => ({
    components: { GsInfoBar },
    setup() {
      return { args, message }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsInfoBar type="success" :message="message" />
        <GsInfoBar type="success" :message="message" title="Success Title" />
        <GsInfoBar type="default" :message="message" />
        <GsInfoBar type="default" :message="message" title="Default Title" />
        <GsInfoBar type="warning" :message="message" />
        <GsInfoBar type="warning" :message="message" title="Warning Title" />
        <GsInfoBar type="error" :message="message" />
        <GsInfoBar type="error" :message="message" title="Error Title" />
      </div>
    `,
  }),
}
