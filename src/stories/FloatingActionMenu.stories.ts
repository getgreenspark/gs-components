import type { Meta, StoryObj } from '@storybook/vue3'
import GsFloatingActionMenu from '../components/GsFloatingActionMenu.vue'
import '@/assets/style/variables.css'

const meta: Meta<typeof GsFloatingActionMenu> = {
  title: 'Components/Navigation/FloatingActionMenu',
  component: GsFloatingActionMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Floating Action Menu Component

A floating menu that appears at the bottom of the screen, typically used for primary actions.
Features a title, description, and two action buttons.

### Usage

\`\`\`vue
<template>
  <gs-floating-action-menu
    title="Ready to take action?"
    description="Choose an action to get started"
    primary-button-text="Primary Action"
    secondary-button-text="Secondary Action"
    @primary-action="handlePrimaryAction"
    @secondary-action="handleSecondaryAction"
  />
</template>

<script>
const handlePrimaryAction = () => {
  console.log('Primary action clicked')
}

const handleSecondaryAction = () => {
  console.log('Secondary action clicked')
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
      description: 'The main title text',
    },
    description: {
      control: 'text',
      description: 'The description text below the title',
    },
    primaryButtonText: {
      control: 'text',
      description: 'Text for the primary (outline) button',
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Text for the secondary (solid) button',
    },
  },
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    title: 'Ready to take action and support this project?',
    description: 'Add a tailored impact or create an automation to help drive change!',
    primaryButtonText: 'Tailored impact',
    secondaryButtonText: 'Add automation',
  },
}

export const CustomText: StoryObj<typeof meta> = {
  args: {
    title: 'Want to make a difference?',
    description: 'Choose how you want to contribute to this initiative',
    primaryButtonText: 'Donate Now',
    secondaryButtonText: 'Share Project',
  },
}

export const ShortText: StoryObj<typeof meta> = {
  args: {
    title: 'Ready to begin?',
    description: 'Select your preferred action',
    primaryButtonText: 'Start',
    secondaryButtonText: 'Learn More',
  },
}
