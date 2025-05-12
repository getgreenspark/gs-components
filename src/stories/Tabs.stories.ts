import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsTabs from '@/components/GsTabs.vue'

const meta: Meta<typeof GsTabs> = {
  title: 'Components/Tabs',
  component: GsTabs,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The currently selected tab value.',
    },
    tabs: {
      control: 'object',
      description: 'An array of tab items with `label`, `value`, and optional `disabled`.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsTabs>

export const Default: Story = {
  args: {
    modelValue: 'tab1',
    tabs: [
      { label: 'Tab One', value: 'tab1' },
      { label: 'Tab Two', value: 'tab2' },
      { label: 'Tab Three', value: 'tab3' },
    ],
  },
  render: (args) => ({
    components: { GsTabs },
    setup() {
      return { args }
    },
    template: `<GsTabs v-bind="args" v-model="args.modelValue" />`,
  }),
}

export const Disabled: Story = {
  args: {
    modelValue: 'tab1',
    tabs: [
      { label: 'Active Tab', value: 'tab1' },
      { label: 'Disabled Tab', value: 'tab2', disabled: true },
      { label: 'Another Tab', value: 'tab3' },
    ],
  },
  render: (args) => ({
    components: { GsTabs },
    setup() {
      return { args }
    },
    template: `<GsTabs v-bind="args" v-model="args.modelValue" />`,
  }),
}
