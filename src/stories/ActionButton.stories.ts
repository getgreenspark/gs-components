import type { Meta, StoryObj } from '@storybook/vue3-vite'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsActionButton from '@/components/GsActionButton.vue'

const sampleItems = [
  {
    icon: 'mdi-tree',
    title: 'Plant Trees',
    text: 'Offset carbon by planting trees around the world.',
  },
  {
    icon: 'mdi-waves',
    title: 'Rescue Ocean Plastic',
    text: 'Remove plastic waste from oceans and coastlines.',
  },
  {
    icon: 'mdi-recycle',
    title: 'Carbon Offset',
    text: 'Neutralise emissions through verified offset projects.',
  },
]

const meta: Meta<typeof GsActionButton> = {
  title: 'Components/ActionButton',
  component: GsActionButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text displayed on the button.',
    },
    items: {
      control: 'object',
      description: 'Array of menu items. Each item has an icon, title, and text.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if set to true.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button take the full width of its container.',
    },
    width: {
      control: 'text',
      description: 'Sets a specific width for the button (e.g. "300px").',
    },
    onSelect: {
      action: 'select',
      description: 'Emitted when a menu item is clicked.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown action button that opens a menu on click. Each menu item displays an icon, a bold title, and a description.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GsActionButton>

export const Default: Story = {
  args: {
    label: 'Actions',
    items: sampleItems,
  },
}

export const CustomLabel: Story = {
  args: {
    label: 'Add Impact',
    items: sampleItems,
  },
}

export const SingleItem: Story = {
  args: {
    label: 'Actions',
    items: [
      {
        icon: 'mdi-tree',
        title: 'Plant Trees',
        text: 'Offset carbon by planting trees around the world.',
      },
    ],
  },
}

export const ManyItems: Story = {
  args: {
    label: 'Choose Action',
    items: [
      ...sampleItems,
      {
        icon: 'mdi-bee',
        title: 'Save Bees',
        text: 'Support bee conservation and pollinator habitats.',
      },
      {
        icon: 'mdi-solar-power',
        title: 'Clean Energy',
        text: 'Fund renewable energy projects across the globe.',
      },
    ],
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Actions',
    items: sampleItems,
    fullWidth: true,
  },
}

export const CustomWidth: Story = {
  args: {
    label: 'Actions',
    items: sampleItems,
    width: '300px',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Actions',
    items: sampleItems,
    disabled: true,
  },
}
