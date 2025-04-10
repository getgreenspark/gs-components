import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import GsCheckbox from '../components/GsCheckbox.vue'

// Import Vuetify styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const meta: Meta<typeof GsCheckbox> = {
  title: 'Components/Form/Checkbox',
  component: GsCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Checkbox

A customizable checkbox component with support for labels, different text sizes, and disabled states.

### Global Usage

\`\`\`vue
<template>
  <gs-checkbox
    v-model="isChecked"
    label="Accept terms and conditions"
    text-size="description"
    :bold="false"
    :disabled="false"
  />
</template>

<script lang="ts">
const isChecked = ref(false)
</script>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'The checked state of the checkbox',
    },
    label: {
      control: 'text',
      description: 'The label text to display next to the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    textSize: {
      control: 'select',
      options: ['description', 'body'],
      description: 'The size of the label text',
    },
    bold: {
      control: 'boolean',
      description: 'Whether the label text should be bold',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic checkbox with default settings
export const Default: Story = {
  args: {
    modelValue: false,
    label: 'Default checkbox',
  },
}

// Different text sizes
export const TextSizes: Story = {
  render: (args) => ({
    components: { GsCheckbox },
    setup() {
      const checked1 = ref(false)
      const checked2 = ref(false)

      return {
        checked1,
        checked2,
        args,
      }
    },
    template: `
      <div style="width: 500px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
        <GsCheckbox
          v-model="checked1"
          label="Description size text (default)"
          text-size="description"
        />
        <GsCheckbox
          v-model="checked2"
          label="Body size text"
          text-size="body"
        />
      </div>
    `,
  }),
}

// Text weights
export const TextWeights: Story = {
  render: (args) => ({
    components: { GsCheckbox },
    setup() {
      const checked1 = ref(false)
      const checked2 = ref(false)

      return {
        checked1,
        checked2,
        args,
      }
    },
    template: `
      <div style="width: 500px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
        <GsCheckbox
          v-model="checked1"
          label="Regular weight text"
        />
        <GsCheckbox
          v-model="checked2"
          label="Bold weight text"
          bold
        />
      </div>
    `,
  }),
}

// Disabled state
export const Disabled: Story = {
  render: (args) => ({
    components: { GsCheckbox },
    setup() {
      const checked1 = ref(false)
      const checked2 = ref(true)

      return {
        checked1,
        checked2,
        args,
      }
    },
    template: `
      <div style="width: 500px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
        <GsCheckbox
          v-model="checked1"
          label="Disabled unchecked"
          disabled
        />
        <GsCheckbox
          v-model="checked2"
          label="Disabled checked"
          disabled
        />
      </div>
    `,
  }),
}

// All variations
export const AllVariations: Story = {
  render: (args) => ({
    components: { GsCheckbox },
    setup() {
      const states = ref({
        default: false,
        description: false,
        body: false,
        bold: false,
        disabledUnchecked: false,
        disabledChecked: true,
      })

      return {
        states,
        args,
      }
    },
    template: `
      <div
        style="width: 500px; padding: 20px; display: flex; flex-direction: column; gap: 16px; background: white;">
        <GsCheckbox
          v-model="states.default"
          label="Default checkbox"
        />
        <GsCheckbox
          v-model="states.description"
          label="Description size"
          text-size="description"
        />
        <GsCheckbox
          v-model="states.body"
          label="Body size"
          text-size="body"
        />
        <GsCheckbox
          v-model="states.bold"
          label="Bold text"
          bold
        />
        <GsCheckbox
          v-model="states.disabledUnchecked"
          label="Disabled unchecked"
          disabled
        />
        <GsCheckbox
          v-model="states.disabledChecked"
          label="Disabled checked"
          disabled
        />
      </div>
    `,
  }),
}
