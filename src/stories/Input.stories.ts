import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsInput from '@/components/GsInput.vue'

const meta: Meta<typeof GsInput> = {
  title: 'Components/Input',
  component: GsInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The bound value of the input field.',
    },
    hideDetails: {
      control: 'boolean',
      description: 'Hide or show helper and validation text.',
    },
    label: {
      control: 'text',
      description: 'Label for the input',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsInput>

export const Default: Story = {
  args: {
    modelValue: '',
    hideDetails: true,
    label: 'Your Name',
  },
  render: (args) => ({
    components: { GsInput },
    setup() {
      return { args }
    },
    template: `
    <div style="width: 335px;">
      <GsInput v-bind="args" v-model="args.modelValue" />
    </div>
    `,
  }),
}

export const Prefilled: Story = {
  args: {
    modelValue: 'John Doe',
    hideDetails: true,
    label: 'Full Name',
  },
  render: (args) => ({
    components: { GsInput },
    setup() {
      return { args }
    },
    template: `
    <div style="width: 335px;">
      <GsInput v-bind="args" v-model="args.modelValue" />
    </div>`,
  }),
}

export const ErrorState: Story = {
  args: {
    modelValue: '',
    hideDetails: false,
    label: 'Username',
  },
  render: (args) => ({
    components: { GsInput },
    setup() {
      return { args }
    },
    template: `
    <div style="width: 335px;">
      <GsInput
        v-bind="args"
        v-model="args.modelValue"
        error-messages="Username is required."
        error
        :rules="[(v) => !!v || 'Username is required.']"
      />
    </div>
    `,
  }),
}
