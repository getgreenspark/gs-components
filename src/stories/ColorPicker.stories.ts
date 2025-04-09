import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsColorPicker from '@/components/GsColorPicker.vue'
import { ref } from 'vue'

const meta: Meta<typeof GsColorPicker> = {
  title: 'Components/ColorPicker',
  component: GsColorPicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the color picker.',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of the color picker.',
    },
    disabled: {
      control: 'boolean',
      description: 'Makes the color picker disabled.',
    },
    colorModes: {
      control: 'multi-select',
      options: ['hex', 'rgb', 'hsl'],
      description: 'Changes the color picker mode.',
    },
    clearable: {
      control: 'boolean',
      description: 'Makes the color picker clearable.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsColorPicker>

export const Default: Story = {
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker v-bind="args" />
      </div>
    `,
  }),
}

const selectedColor = ref<string>('#3b755f')
const selectedColor2 = ref<string>('#3b755f')
export const Variants: Story = {
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      return { args, selectedColor, selectedColor2 }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker :label="'Active Color Picker Label'" :placeholder="'Placeholder'" />
        <GsColorPicker :label="'Disabled Color Picker Label'" :disabled="true" />
        <GsColorPicker :label="'Custom Color Mode Label'" :color-modes="['hsl']" />
        <GsColorPicker v-model="selectedColor" :label="'Default Color Label'" :color-modes="['hsl']" />
        <GsColorPicker v-model="selectedColor2" :label="'Default Color Label + Clearable'" clearable />
      </div>
    `,
  }),
}
