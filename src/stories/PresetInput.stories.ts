import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, ref } from 'vue'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsPresetInput from '@/components/GsPresetInput.vue'
import { minValue, positiveInteger, required } from '@/helpers/validation.ts'

const meta: Meta<typeof GsPresetInput> = {
  title: 'Components/PresetInput',
  component: GsPresetInput,
  tags: ['autodocs'],
  argTypes: {
    presets: {
      control: 'object',
      description:
        'An array of preset options for the input, each with a label, value, and optional info text',
    },
    modelValue: {
      control: 'number',
      description: 'The current value of the input, bound to the model',
    },
    prefix: {
      control: 'text',
      description: 'Prefix text to display before the input value',
    },
    postfix: {
      control: 'text',
      description: 'Postfix text to display after the input value',
    },
    inputLabel: {
      control: 'text',
      description: 'Label for the input field',
    },
    inputPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    inputHideDetails: {
      control: 'boolean',
      description: 'Hides the details below the input field',
    },
    prependInner: {
      control: 'text',
      description: 'Text to prepend inside the input field',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    presets: [
      { label: 'Low impact', value: 10, info: 'Lowest recommended value' },
      { label: 'Recommended', value: 25, info: 'Best for most users' },
      { label: 'High impact', value: 50 },
    ],
    modelValue: 0,
    prefix: '€',
    postfix: ' order',
    inputLabel: 'Order value',
    inputPlaceholder: 'Input order value',
    inputRules: [positiveInteger, minValue(0), required],
    prependInner: '€',
  },
  render: (args) => ({
    components: { GsPresetInput },
    setup() {
      const value = ref(args.modelValue)
      const displayValue = computed(() => {
        return value.value !== undefined && value.value !== null ? value.value : ''
      })
      return { args, value, displayValue }
    },
    template: `
      <div>
        <GsPresetInput v-bind="args" v-model="value" />
        <div style="margin-top: 16px; font-size: 16px;">Selected value: <b>{{ displayValue }}</b></div>
      </div>
    `,
  }),
}
