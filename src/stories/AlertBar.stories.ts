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
        `,
      },
    },
  },
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

export const Playground: Story = {
  args: {
    type: 'info',
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
        <div class="d-flex flex-column ga-2">
          <div class="d-flex justify-center">
            <GsAlertBar v-bind="args" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Success: Story = {
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column ga-4">
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Without Title</h3>
          <GsAlertBar type="success" message="Operation completed successfully" />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">With Title</h3>
          <GsAlertBar type="success" title="Success"
                      message="Your changes have been saved successfully" />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Full Width</h3>
          <GsAlertBar type="success" message="Full width success message" :full-width="true" />
        </div>
      </div>
    `,
  }),
}

export const Info: Story = {
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column ga-4">
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Without Title</h3>
          <GsAlertBar type="info" message="New features are available in this update" />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">With Title</h3>
          <GsAlertBar type="info" title="Information"
                      message="Please review the updated terms of service" />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Full Width</h3>
          <GsAlertBar type="info" message="Full width information message" :full-width="true" />
        </div>
      </div>
    `,
  }),
}

export const Warning: Story = {
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column ga-4">
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Without Title</h3>
          <GsAlertBar type="warning" message="Your session will expire in 5 minutes" />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">With Title</h3>
          <GsAlertBar type="warning" title="Warning" message="This action cannot be undone" />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Full Width</h3>
          <GsAlertBar type="warning" message="Full width warning message" :full-width="true" />
        </div>
      </div>
    `,
  }),
}

export const Error: Story = {
  render: (args) => ({
    components: { GsAlertBar },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column ga-4">
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Without Title</h3>
          <GsAlertBar type="error" message="Failed to save changes. Please try again." />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">With Title</h3>
          <GsAlertBar type="error" title="Error"
                      message="An unexpected error occurred. Please contact support." />
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Full Width</h3>
          <GsAlertBar type="error" message="Full width error message" :full-width="true" />
        </div>
      </div>
    `,
  }),
}
