import type { Meta, StoryObj } from '@storybook/vue3'
import GsVerification from '@/components/GsVerification.vue'

const meta: Meta<typeof GsVerification> = {
  title: 'Sections/Verification',
  component: GsVerification,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>'
    })
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text to display at the top of the component'
    },
    items: {
      control: 'object',
      description: 'Array of verification items to display'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
## Verification

A component that displays a grid of verification items, each with an icon and text.

### Global Usage

\`\`\`vue
<template>
  <gs-verification
    title="Custom Title"
    :items="[
      {
        iconPath: '/icons/geospatial-data-layers.svg',
        text: 'Geospatial Data Layers'
      },
      {
        iconPath: '/icons/dendrometers.svg',
        text: 'Dendrometers'
      }
    ]"
  />
</template>
\`\`\`
        `
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof GsVerification>

export const Default: Story = {
  args: {
    title: 'Verification',
    items: [
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Geospatial Data Layers'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Dendrometers'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Soil sensors'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Tree Vision'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Bioacoustic Sensors'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Light Sensors'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Weather Station'
      }
    ]
  }
}

export const CustomTitle: Story = {
  args: {
    title: 'Project Verification Methods',
    items: [
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Geospatial Data Layers'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Dendrometers'
      }
    ]
  }
}

export const WithHTMLContent: Story = {
  args: {
    title: 'Verification',
    items: [
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Geospatial Data <strong>Layers</strong>'
      },
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Dendrometers with <a href="#">details</a>'
      }
    ]
  }
}

export const SingleItem: Story = {
  args: {
    title: 'Verification',
    items: [
      {
        iconPath: '/geospatial-data-layers.svg',
        text: 'Geospatial Data Layers'
      }
    ]
  }
} 