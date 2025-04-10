import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import GsTextField from '@/components/GsTextField.vue'
import GsTypography from '@/components/GsTypography.vue'
import GsDivider from '@/components/GsDivider.vue'

const meta: Meta<typeof GsTextField> = {
  title: 'Components/Form/TextField',
  component: GsTextField,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The value of the input'
    },
    label: {
      control: 'text',
      description: 'Label text for the input'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when input is empty'
    },
    description: {
      control: 'text',
      description: 'Helper text to show below the input'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    error: {
      control: 'boolean',
      description: 'Whether the input has an error'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display'
    },
    success: {
      control: 'boolean',
      description: 'Whether the input is in a success state'
    },
    successMessage: {
      control: 'text',
      description: 'Success message to display'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
## TextField

A text input component based on Vuetify's VTextField with custom styling and features.

### Global Usage

\`\`\`vue
<template>
  <div style="width: 500px;">
    <!-- Basic usage with description -->
    <gs-text-field
      v-model="value"
      label="Your text here"
      description="Your text here"
    />

    <!-- With error -->
    <gs-text-field
      v-model="value"
      label="Your text here"
      error
      error-message="Your text here"
    />

    <!-- With success -->
    <gs-text-field
      v-model="value"
      label="Your text here"
      success
      success-message="Your text here"
    />
  </div>
</template>
\`\`\`
        `
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof GsTextField>

export const Default: Story = {
  render: () => ({
    components: { GsTextField },
    setup() {
      const value = ref('')
      return { value }
    },
    template: /* html */ `
      <div style="width: 500px;">
        <GsTextField
          v-model="value"
          label="Your text here"
          placeholder="Your text here"
        />
      </div>
    `
  })
}

export const AllStates: Story = {
  render: () => ({
    components: { GsTextField, GsTypography, GsDivider },
    setup() {
      const defaultValue = ref('')
      const error = ref('')
      const success = ref('')
      return { defaultValue, error, success }
    },
    template: /* html */ `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 32px;">
        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Default</GsTypography>
          <GsTextField
            v-model="defaultValue"
            label="Your text here"
            placeholder="Your text here"
          />
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Error State</GsTypography>
          <GsTextField
            v-model="error"
            label="Your text here"
            placeholder="Your text here"
            error
            error-message="Your text here"
          />
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Success State</GsTypography>
          <GsTextField
            v-model="success"
            label="Your text here"
            placeholder="Your text here"
            success
            success-message="Your text here"
          />
        </div>
      </div>
    `
  })
} 