import type { Meta, StoryObj } from '@storybook/vue3'

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
      description: 'The padding in the action card.',
    },
    width: {
      control: 'text',
      description: 'The optional width of the action card.',
    },
    height: {
      control: 'text',
      description: 'The optional height of the action card.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsActionCard>

export const Default: Story = {
  args: {
    padding: '20px',
    width: '100px',
    height: '100px',
  },
  render: (args) => ({
    components: { GsActionCard },
    setup() {
      return { args }
    },
    template: `
      <GsActionCard v-bind="args">content</GsActionCard>
    `,
  }),
}
