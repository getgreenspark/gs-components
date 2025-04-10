import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsAlertBar from '@/components/GsAlertBar.vue'

const meta: Meta<typeof GsAlertBar> = {
  title: 'Components/Feedback/AlertBar',
  component: GsAlertBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Alert Bar Component

A flexible alert bar component for displaying various types of messages and notifications.

### Features
- Multiple alert types (info, success, error, warning)
- Optional title
- Full-width support
- Responsive design
- Accessible with proper ARIA roles

### Global Usage

Once you have installed and set up the GS Components library, you can use the alert bar component globally in your Vue application:

\`\`\`vue
<template>
  <gs-alert-bar
    type="success"
    message="Operation completed successfully"
  />
</template>
\`\`\`

No need to import the component manually when using it globally.
        `
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning'],
      description: 'The type of alert to display.',
      table: {
        defaultValue: { summary: 'info' }
      }
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
      table: {
        defaultValue: { summary: false }
      }
    },
  },
}

export default meta

type Story = StoryObj<typeof GsAlertBar>

export const Playground: Story = {
  args: {
    type: 'info',
    title: 'Alert Title',
    message: 'This is an alert message. Try changing the props in the controls panel to see how the component updates in real-time!',
    fullWidth: false
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

export const AllVariants: Story = {
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column ga-4">
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Without Title</h3>
          <GsAlertBar type="success" message="Success message without title" />
          <GsAlertBar type="info" message="Info message without title" />
          <GsAlertBar type="warning" message="Warning message without title" />
          <GsAlertBar type="error" message="Error message without title" />
        </div>
        
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">With Title</h3>
          <GsAlertBar type="success" title="Success Alert" message="Success message with title" />
          <GsAlertBar type="info" title="Info Alert" message="Info message with title" />
          <GsAlertBar type="warning" title="Warning Alert" message="Warning message with title" />
          <GsAlertBar type="error" title="Error Alert" message="Error message with title" />
        </div>
        
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Full Width</h3>
          <GsAlertBar type="success" message="Full width success message" :full-width="true" />
          <GsAlertBar type="info" message="Full width info message" :full-width="true" />
        </div>
      </div>
    `,
  }),
}
