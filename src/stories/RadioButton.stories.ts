import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import GsRadioButton from '@/components/GsRadioButton.vue'
import GsTypography from '@/components/GsTypography.vue'
import GsDivider from '@/components/GsDivider.vue'

const meta: Meta<typeof GsRadioButton> = {
  title: 'Components/Form/RadioButton',
  component: GsRadioButton,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The model value for the radio button'
    },
    value: {
      control: 'text',
      description: 'The value of this radio button'
    },
    label: {
      control: 'text',
      description: 'Label text for the radio button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
## RadioButton

A radio button component with custom styling and icons.

### Global Usage

\`\`\`vue
<template>
  <gs-radio-button
    v-model="selectedValue"
    value="option1"
    label="Your text here"
  />
</template>
\`\`\`
        `
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof GsRadioButton>

export const Deselected: Story = {
  args: {
    modelValue: '',
    value: 'option1',
    label: 'Your text here',
    disabled: false
  }
}

export const Selected: Story = {
  args: {
    modelValue: 'option1',
    value: 'option1',
    label: 'Your text here',
    disabled: false
  }
}

export const AllStates: Story = {
  render: () => ({
    components: { GsRadioButton, GsTypography, GsDivider },
    setup() {
      const value = ref('selected')
      return { value }
    },
    template: /* html */ `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 32px;">
        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Deselected</GsTypography>
          <GsRadioButton
            v-model="value"
            value="deselected"
            label="Your text here"
          />
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Selected</GsTypography>
          <GsRadioButton
            v-model="value"
            value="selected"
            label="Your text here"
          />
        </div>
      </div>
    `
  })
}
