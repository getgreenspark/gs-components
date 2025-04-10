import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsColorPicker from '@/components/GsColorPicker.vue'
import { ref } from 'vue'

const meta: Meta<typeof GsColorPicker> = {
  title: 'Components/Form/ColorPicker',
  component: GsColorPicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Color Picker Component

A color picker component that allows users to select colors in various formats.

### Features
- Multiple color modes (hex, rgb, hsl)
- Optional label and placeholder
- Clearable option
- Disabled state
- Accessible with proper ARIA roles

### Global Usage

Once you have installed and set up the GS Components library, you can use the color picker component globally in your Vue application:

\`\`\`vue
<template>
  <gs-color-picker
    label="Select a color"
    v-model="selectedColor"
  />
</template>
\`\`\`

No need to import the component manually when using it globally.
        `,
      },
    },
  },
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

export const Playground: Story = {
  args: {
    label: 'Color Picker Label',
    placeholder: 'Select a color',
    disabled: false,
    colorModes: ['hex'],
    clearable: false,
  },
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      const color = ref('#3b755f')
      return { args, color }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker v-model="color" v-bind="args" />
      </div>
    `,
  }),
}

export const Default: Story = {
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      const color = ref('#3b755f')
      return { args, color }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker
          v-model="color"
          label="Color Picker Label"
          placeholder="Select a color"
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      const color = ref('#3b755f')
      return { args, color }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker
          v-model="color"
          label="Disabled Color Picker"
          disabled
        />
      </div>
    `,
  }),
}

export const Clearable: Story = {
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      const color = ref('#3b755f')
      return { args, color }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker
          v-model="color"
          label="Clearable Color Picker"
          clearable
        />
      </div>
    `,
  }),
}

export const ColorModes: Story = {
  render: (args) => ({
    components: { GsColorPicker },
    setup() {
      const color = ref('#3b755f')
      return { args, color }
    },
    template: `
      <div class="d-flex ga-3 align-items-center flex-column">
        <GsColorPicker
          v-model="color"
          label="Hex Mode"
          :color-modes="['hex']"
        />
        <GsColorPicker
          v-model="color"
          label="RGB Mode"
          :color-modes="['rgb']"
        />
        <GsColorPicker
          v-model="color"
          label="HSL Mode"
          :color-modes="['hsl']"
        />
      </div>
    `,
  }),
}
