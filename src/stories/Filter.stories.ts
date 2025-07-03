import type { Meta, StoryObj } from '@storybook/vue3-vite'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsFilter from '@/components/GsFilter.vue'

const meta: Meta<typeof GsFilter> = {
  title: 'Components/Filter',
  component: GsFilter,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Currently selected category.',
    },
    categories: {
      control: 'object',
      description: 'List of category strings.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsFilter>

export const Default: Story = {
  args: {
    modelValue: 'All',
    categories: ['All', 'Design', 'Development', 'Marketing'],
  },
  render: (args) => ({
    components: { GsFilter },
    setup() {
      return { args }
    },
    template: `<GsFilter v-bind="args" v-model="args.modelValue" />`,
  }),
}
