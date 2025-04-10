import type { Meta, StoryObj } from '@storybook/vue3'
import GsManagePlan from '../components/GsManagePlan.vue'

const placeholderImage = '/placeholder-image.png'

const meta: Meta<typeof GsManagePlan> = {
  title: 'Components/ManagePlan',
  component: GsManagePlan,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Manage Plan

A component for displaying plan information with an image, title, description, and action button.

### Global Usage

\`\`\`vue
<template>
  <gs-manage-plan
    image-url="/path/to/image.jpg"
    image-alt="Plan image"
    title="Starter Plan"
    description="Plan description goes here"
    button-text="Manage"
    button-icon="mdi-cog"
    :has-trial="true"
    tag-text="Free trial"
    @action="handleAction"
  />
</template>

<script lang="ts">
const handleAction = () => {
  // Handle plan action
}
</script>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the plan',
    },
    description: {
      control: 'text',
      description: 'Description of the plan',
    },
    buttonIcon: {
      control: 'text',
      description: 'Optional icon for the button',
    },
  },
}

export default meta
type Story = StoryObj<typeof GsManagePlan>

// Default story with free trial
export const StarterPlan: Story = {
  args: {
    title: 'Starter Plan - Monthly',
    description: 'For companies just getting started on their positive impact journey.',
  },
}

// Plan without free trial
export const StandardPlan: Story = {
  args: {
    title: 'Standard Plan - Monthly',
    description: 'For growing companies ready to scale their impact.',
  },
}

// Custom tag text example
export const CustomTag: Story = {
  args: {
    title: 'Starter Plan - Monthly',
    description: 'For companies just getting started on their positive impact journey.',
  },
}

// All variations
export const AllVariations: Story = {
  render: () => ({
    components: { GsManagePlan },
    setup() {
      return { placeholderImage }
    },
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <gs-manage-plan
          :imageUrl="placeholderImage"
          imageAlt="Green plant sprouting from soil"
          title="Starter Plan - Monthly"
          description="For companies just getting started on their positive impact journey."
          buttonText="Manage"
          hasTrial
          tagText="Free trial"
        />
        <gs-manage-plan
          :imageUrl="placeholderImage"
          imageAlt="Mature forest canopy"
          title="Standard Plan - Monthly"
          description="For growing companies ready to scale their impact."
          buttonText="Manage"
        />
      </div>
    `,
  }),
}
