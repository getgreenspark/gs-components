import type { Meta, StoryObj } from '@storybook/vue3-vite'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsActionCard from '@/components/GsActionCard.vue'

const meta: Meta<typeof GsActionCard> = {
  title: 'Components/ActionCard',
  component: GsActionCard,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'text',
      description: 'Padding of the card in CSS units (e.g., "16px", "1rem")',
    },
    width: {
      control: 'text',
      description: 'Width of the card in CSS units',
    },
    height: {
      control: 'text',
      description: 'Height of the card in CSS units',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the card should take full width',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    onClick: {
      action: 'clicked',
      description: 'Event emitted when the card is clicked',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A clickable card component that can be used for various actions. Supports both mouse and keyboard interactions.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    padding: '16px',
    width: 'auto',
    height: 'auto',
    disabled: false,
    fullWidth: false,
    ariaLabel: 'Click to perform action',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      return { args }
    },
    template: `
      <GsActionCard v-bind="args">
        <div>Default Action Card</div>
      </GsActionCard>
    `,
  }),
}

export const WithCustomDimensions: Story = {
  args: {
    padding: '24px',
    width: '300px',
    height: '200px',
    ariaLabel: 'Custom sized action card',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      return { args }
    },
    template: `
      <GsActionCard v-bind="args">
        <div>Custom Sized Card</div>
      </GsActionCard>
    `,
  }),
}

export const FullWidth: Story = {
  args: {
    padding: '16px',
    fullWidth: true,
    ariaLabel: 'Full width action card',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 100%; max-width: 600px;">
        <GsActionCard v-bind="args">
          <div>Full Width Card</div>
        </GsActionCard>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    padding: '16px',
    disabled: true,
    ariaLabel: 'Disabled action card',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      return { args }
    },
    template: `
      <GsActionCard v-bind="args">
        <div>Disabled Card</div>
      </GsActionCard>
    `,
  }),
}

export const Selected: Story = {
  args: {
    padding: '16px',
    selected: true,
    ariaLabel: 'Selected action card',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      return { args }
    },
    template: `
      <GsActionCard v-bind="args">
        <div>Selected Card</div>
      </GsActionCard>
    `,
  }),
}

export const WithComplexContent: Story = {
  args: {
    padding: '24px',
    width: '400px',
    ariaLabel: 'Action card with complex content',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      return { args }
    },
    template: `
      <GsActionCard v-bind="args">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <h3 style="margin: 0; color: var(--ui-green);">Card Title</h3>
          <p style="margin: 0;">This is a more complex card with multiple elements and styling.</p>
          <div style="display: flex; gap: 8px;">
            <span style="padding: 4px 8px; background: var(--gray-light-CC); border-radius: 4px;">Tag 1</span>
            <span style="padding: 4px 8px; background: var(--gray-light-CC); border-radius: 4px;">Tag 2</span>
          </div>
        </div>
      </GsActionCard>
    `,
  }),
}

export const Interactive: Story = {
  args: {
    padding: '16px',
    ariaLabel: 'Interactive action card',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      const handleClick = () => {
        console.log('Card clicked!')
      }
      return { args, handleClick }
    },
    template: `
      <GsActionCard v-bind="args" @click="handleClick">
        <div>Click me to see console output</div>
      </GsActionCard>
    `,
  }),
}
