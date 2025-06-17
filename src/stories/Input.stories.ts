import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import { minlength, required } from '@/helpers/validation'

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

export const WithHelperText: Story = {
  args: {
    modelValue: '',
    hideDetails: false,
    label: 'Your Name',
  },
  render: (args) => ({
    components: { GsInput },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 335px;">
        <GsInput v-bind="args" v-model="args.modelValue" persistent-hint hint="Your name should include a last name." />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    modelValue: 'John Doe',
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
        <GsInput v-bind="args" v-model="args.modelValue" disabled />
      </div>
    `,
  }),
}

export const ErrorState: Story = {
  args: {
    modelValue: '',
    hideDetails: false,
    label: 'Username*',
  },
  render: (args) => ({
    components: { GsInput },
    setup() {
      return {
        args,
        rules: [required, minlength(3)],
      }
    },
    template: `
      <div style="width: 335px;">
        <GsInput
          v-bind="args"
          v-model="args.modelValue"
          :rules="rules"
        />
      </div>
    `,
  }),
}
