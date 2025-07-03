import type { Meta, StoryObj } from '@storybook/vue3-vite'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsAlertBar from '@/components/GsAlertBar.vue'

const meta: Meta<typeof GsAlertBar> = {
  title: 'Components/AlertBar',
  component: GsAlertBar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning'],
      description: 'The type of alert to display.',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert.',
    },
    message: {
      control: 'text',
      description: 'The main message to display in the alert.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the alert take the full width of its container.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsAlertBar>

export const Default: Story = {
  args: {
    type: 'info',
    title: 'Alert Title',
    message:
      'This is an alert message. Try changing the props in the controls panel to see how the component updates in real-time! <a href="http://getgreenspark.com" target="_blank" class="link">Click here.</a>',
    fullWidth: false,
  },
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column ga-4">
        <div class="d-flex flex-column ga-2">
          <div class="d-flex justify-center">
            <GsAlertBar v-bind="args" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Variants: Story = {
  args: {
    title: 'Alert Title',
    message:
      'This is an alert message. Try changing the props in the controls panel to see how the component updates in real-time!',
    fullWidth: false,
  },
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column ga-4">
        <GsAlertBar type="info" v-bind="args" />
        <GsAlertBar type="success" v-bind="args" />
        <GsAlertBar type="warning" v-bind="args" />
        <GsAlertBar type="error" v-bind="args" />
      </div>
    `,
  }),
}
