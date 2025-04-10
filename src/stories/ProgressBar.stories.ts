import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import GsProgressBar from '../components/GsProgressBar.vue'

const meta: Meta<typeof GsProgressBar> = {
  title: 'Components/Feedback/ProgressBar',
  component: GsProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Progress Bar

A customizable progress bar component with support for different colors, backgrounds, and percentage display.

### Global Usage

\`\`\`vue
<template>
  <gs-progress-bar
    v-model="progress"
    color="main-light-green"
    background-color="main-white"
    :show-percentage="true"
    :height="8"
  />
</template>

<script setup lang="ts">
const progress = ref(75)
</script>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    modelValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)'
    },
    color: {
      control: 'select',
      options: ['main-black', 'main-light-green', 'main-red'],
      description: 'Color of the progress bar fill'
    },
    backgroundColor: {
      control: 'select',
      options: ['main-white', 'main-beige'],
      description: 'Background color of the progress bar'
    },
    showPercentage: {
      control: 'boolean',
      description: 'Whether to show the percentage text'
    },
    height: {
      control: { type: 'range', min: 4, max: 24, step: 2 },
      description: 'Height of the progress bar in pixels'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Basic progress bar with default settings
export const Default: Story = {
  args: {
    modelValue: 45
  }
}

// Progress bar with different colors
export const Colors: Story = {
  render: () => ({
    components: { GsProgressBar },
    template: `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 24px;">
        <GsProgressBar :model-value="75" color="main-light-green" />
        <GsProgressBar :model-value="50" color="main-black" />
        <GsProgressBar :model-value="25" color="main-red" />
      </div>
    `
  })
}

// Progress bar with different backgrounds
export const Backgrounds: Story = {
  render: () => ({
    components: { GsProgressBar },
    template: `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 24px;">
        <GsProgressBar :model-value="60" background-color="main-white" />
        <GsProgressBar :model-value="60" background-color="main-beige" />
      </div>
    `
  })
}

// Progress bar with different text colors
export const ColorCombinations: Story = {
  render: () => ({
    components: { GsProgressBar },
    template: `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 24px;">
        <GsProgressBar :model-value="70" color="main-light-green" background-color="main-beige" />
        <GsProgressBar :model-value="70" color="main-black" background-color="main-white" />
        <GsProgressBar :model-value="70" color="main-red" background-color="main-beige" />
      </div>
    `
  })
}

// Progress bar with different heights
export const Heights: Story = {
  render: () => ({
    components: { GsProgressBar },
    template: `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 24px;">
        <GsProgressBar :model-value="70" :height="4" />
        <GsProgressBar :model-value="70" :height="8" />
        <GsProgressBar :model-value="70" :height="16" />
      </div>
    `
  })
}

// Progress bar without percentage text
export const WithoutPercentage: Story = {
  render: () => ({
    components: { GsProgressBar },
    template: `
      <div style="width: 500px;">
        <GsProgressBar :model-value="55" :show-percentage="false" />
      </div>
    `
  })
}