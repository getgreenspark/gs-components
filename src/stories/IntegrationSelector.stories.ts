import type { Meta, StoryObj } from '@storybook/vue3'
import GsIntegrationSelector from '@/components/GsIntegrationSelector.vue'
import GsTypography from '@/components/GsTypography.vue'
import GsDivider from '@/components/GsDivider.vue'

const meta: Meta<typeof GsIntegrationSelector> = {
  title: 'Components/Selectors/IntegrationSelector',
  component: GsIntegrationSelector,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Whether the selector is selected'
    },
    label: {
      control: 'text',
      description: 'Label text for the selector'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the selector is disabled'
    },
    icon: {
      control: 'text',
      description: 'URL or path to the integration icon'
    },
    tagLabel: {
      control: 'text',
      description: 'Optional label for the tag (if provided, shows a tag). Used to show active number of integrations'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
## IntegrationSelector

A selectable integration card component with an icon and optional tag.

### Global Usage

\`\`\`vue
<template>
  <!-- Basic usage -->
  <gs-integration-selector
    v-model="isSelected"
    label="Integration name"
  />

  <!-- With tag -->
  <gs-integration-selector
    v-model="isSelected"
    label="Integration name"
    tag-label="Connected"
  />
</template>
\`\`\`
        `
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof GsIntegrationSelector>

export const Unselected: Story = {
  args: {
    modelValue: false,
    label: 'Integration name'
  }
}

export const Selected: Story = {
  args: {
    modelValue: true,
    label: 'Integration name'
  }
}

export const WithTag: Story = {
  args: {
    modelValue: false,
    label: 'Integration name',
    tagLabel: 'Connected'
  }
}

export const AllStates: Story = {
  render: () => ({
    components: { GsIntegrationSelector, GsTypography, GsDivider },
    template: /* html */ `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 32px;">
        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Unselected</GsTypography>
          <GsIntegrationSelector
            :model-value="false"
            label="Integration name"
          />
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Selected</GsTypography>
          <GsIntegrationSelector
            :model-value="true"
            label="Integration name"
          />
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">With Tag</GsTypography>
          <GsIntegrationSelector
            :model-value="false"
            label="Integration name"
            tag-label="Connected"
          />
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Selected with Tag</GsTypography>
          <GsIntegrationSelector
            :model-value="true"
            label="Integration name"
            tag-label="Connected"
          />
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Disabled</GsTypography>
          <GsIntegrationSelector
            :model-value="false"
            label="Integration name"
            disabled
          />
        </div>
      </div>
    `
  })
}