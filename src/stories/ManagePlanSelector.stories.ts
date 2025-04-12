import type { Meta, StoryObj } from '@storybook/vue3'
import GsManagePlan from '../components/GsManagePlan.vue'

const placeholderImage = '/placeholder-image.png'

const meta: Meta<typeof GsManagePlan> = {
  title: 'Components/Selectors/ManagePlanSelector',
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
    :show-tag="true"
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
    imageUrl: {
      control: 'text',
      description: 'URL of the plan image',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the plan image',
    },
    title: {
      control: 'text',
      description: 'Title of the plan',
    },
    description: {
      control: 'text',
      description: 'Description of the plan',
    },
    buttonText: {
      control: 'text',
      description: 'Text to display on the button',
      defaultValue: 'Manage',
    },
    showTag: {
      control: 'boolean',
      description: 'Whether to show the tag',
      defaultValue: false,
    },
    tagText: {
      control: 'text',
      description: 'Text to display in the tag',
      defaultValue: 'Free trial',
    },
  },
}

export default meta
type Story = StoryObj<typeof GsManagePlan>

// Default story with free trial
export const StarterPlan: Story = {
  args: {
    imageUrl: placeholderImage,
    imageAlt: 'Green plant sprouting from soil',
    title: 'Starter Plan - Monthly',
    description: 'For companies just getting started on their positive impact journey.',
    showTag: true,
    tagText: 'Free trial',
  },
}

// Plan without free trial
export const StandardPlan: Story = {
  args: {
    imageUrl: placeholderImage,
    imageAlt: 'Mature forest canopy',
    title: 'Standard Plan - Monthly',
    description: 'For growing companies ready to scale their impact.',
  },
}

// Custom tag text example
export const CustomTag: Story = {
  args: {
    imageUrl: placeholderImage,
    imageAlt: 'Green plant sprouting from soil',
    title: 'Starter Plan - Monthly',
    description: 'For companies just getting started on their positive impact journey.',
    showTag: true,
    tagText: 'Custom Tag',
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
          :image-url="placeholderImage"
          image-alt="Green plant sprouting from soil"
          title="Starter Plan - Monthly"
          description="For companies just getting started on their positive impact journey."
          button-text="Manage"
          :show-tag="true"
          tag-text="Free trial"
        />
        <gs-manage-plan
          :image-url="placeholderImage"
          image-alt="Mature forest canopy"
          title="Standard Plan - Monthly"
          description="For growing companies ready to scale their impact."
          button-text="Manage"
        />
      </div>
    `,
  }),
}
