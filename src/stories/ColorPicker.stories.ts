import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsColorPicker from '@/components/GsColorPicker.vue'

const meta: Meta<typeof GsColorPicker> = {
  title: 'Components/ColorPicker',
  component: GsColorPicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the color picker.',
    },
    disabled: {
      control: 'boolean',
      description: 'Makes the alert bar disabled.',
    },
    colorModes: {
      control: 'multi-select',
      options: ['hex', 'rgb', 'hsl'],
      description: 'Changes the color picker mode.',
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

export const Variants: Story = {
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker :label="'Active Color Picker Label'" :placeholder="'Placeholder'" />
        <GsColorPicker :label="'Disabled Color Picker Label'" :disabled="true" />
        <GsColorPicker :label="'Custom Color Mode Label'" :color-modes="['hsl']" />
      </div>
    `,
  }),
}
