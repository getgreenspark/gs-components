import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsNotificationBar from '@/components/GsNotificationBar.vue'

type NotificationBarProps = {
  icon: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon: string;
}

const meta: Meta<typeof GsNotificationBar> = {
  title: 'Components/Feedback/NotificationBar',
  component: GsNotificationBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Notification Bar Component

A comprehensive notification bar component for displaying important messages with optional actions.

### Global Usage

Once you have installed and set up the GS Components library, you can use the notification bar component globally in your Vue application:

\`\`\`vue
<template>
  <gs-notification-bar
    title="Important Update"
    description="A new version is available"
    button-label="Update Now"
    @button-click="handleUpdate"
  />
</template>

<script setup>
const handleUpdate = () => {
  // Handle update action
}
</script>
\`\`\`

No need to import the component manually when using it globally.
        `
      }
    }
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'The source URL for the notification icon.',
    },
    title: {
      control: 'text',
      description: 'The title of the notification.',
    },
    description: {
      control: 'text',
      description: 'The description text of the notification.',
    },
    buttonLabel: {
      control: 'text',
      description: 'The text to display on the button.',
    },
    buttonIcon: {
      control: 'text',
      description: 'The icon to display in the button (e.g., "mdi-check"). Leave empty for no icon.',
    },
    'button-click': {
      description: 'Event emitted when the button is clicked.',
    },
  },
}

export default meta

type Story = StoryObj<NotificationBarProps>

export const Default: Story = {
  args: {
    icon: '/icons/notification.svg',
    title: 'Notification Title',
    description: 'This is a notification description that provides more context.',
    buttonLabel: 'Action',
    buttonIcon: 'mdi-check'
  },
}

export const WithoutMainIcon: Story = {
  args: {
    icon: '',
    title: 'No Main Icon',
    description: 'This example shows the notification bar without the main icon, but with a button icon.',
    buttonLabel: 'Proceed',
    buttonIcon: 'mdi-check'
  },
}

export const WithMainIconNoButtonIcon: Story = {
  args: {
    icon: '/icons/notification.svg',
    title: 'Main Icon Only',
    description: 'This example shows the notification bar with only the main icon and no button icon.',
    buttonLabel: 'Click Here',
    buttonIcon: ''
  },
}

export const WithoutIcons: Story = {
  args: {
    icon: '',
    title: 'No Icons',
    description: 'This example shows the notification bar without any icons.',
    buttonLabel: 'Action',
    buttonIcon: ''
  },
}

export const MobileTablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
  },
  args: {
    icon: '/icons/notification.svg',
    title: 'A Longer Title That Will Wrap on Mobile and Tablet Devices',
    description: 'This is a longer notification description that demonstrates how the component handles more content and wrapping text on smaller screens. It should adapt nicely to different viewport sizes.',
    buttonLabel: 'Take Action',
    buttonIcon: 'mdi-check'
  },
} 