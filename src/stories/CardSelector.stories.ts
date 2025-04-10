import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsCardSelector from '@/components/GsCardSelector.vue'

// Use placeholder image for examples
const placeholderImage = ''

const meta: Meta<typeof GsCardSelector> = {
  title: 'Components/Selectors/CardSelector',
  component: GsCardSelector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Card Selector Component

A selectable card component that displays text with a radio button and an optional image. Used for selection interfaces where users need to choose between multiple options.

### Features
- Radio button selection
- Optional image with placeholder pattern
- Hover and selected states
- Disabled state support
- Accessible design

### Global Usage

Once you have installed and set up the GS Components library, you can use the card selector component globally in your Vue application:

\`\`\`vue
<template>
  <gs-card-selector
    text="Centralised"
    :value="'centralised'"
    v-model:selected="isSelected"
    image-src="/path/to/image.png"
    @change="handleChange"
  />
</template>

<script setup>
const isSelected = ref(false)
const handleChange = (value) => {
  console.log('Selected value:', value)
}
</script>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content of the card.',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the card is selected.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled.',
    },
    value: {
      control: 'text',
      description: 'The value associated with this card selector.',
    },
    imageSrc: {
      control: 'text',
      description: 'Optional image source URL. Shows a checkerboard pattern if not provided.',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the image when provided.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsCardSelector>

export const Playground: Story = {
  args: {
    text: 'Centralised',
    value: 'centralised',
    selected: false,
    disabled: false,
    imageSrc: placeholderImage,
    imageAlt: 'Placeholder image'
  }
}

export const AllVariants: Story = {
  render: () => ({
    components: { GsCardSelector },
    setup() {
      const selectedCard = ref('card1')
      const handleChange = (value: string) => {
        selectedCard.value = value
      }
      return { selectedCard, handleChange, placeholderImage }
    },
    template: `
      <div class="d-flex flex-column ga-4" style="max-width: 800px;">
        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">Basic Cards</h3>
          <div class="d-flex ga-2">
            <GsCardSelector
              text="Centralised"
              value="card1"
              :selected="selectedCard === 'card1'"
              :image-src="placeholderImage"
              image-alt="Centralised deployment"
              @change="handleChange"
            />
            <GsCardSelector
              text="Decentralised"
              value="card2"
              :selected="selectedCard === 'card2'"
              @change="handleChange"
            />
          </div>
        </div>

        <div class="d-flex flex-column ga-2">
          <h3 class="text-h6">States</h3>
          <div class="d-flex ga-2">
            <GsCardSelector
              text="Selected with Image"
              value="card3"
              :selected="true"
              :image-src="placeholderImage"
              image-alt="Selected card image"
            />
            <GsCardSelector
              text="Disabled with Pattern"
              value="card4"
              disabled
            />
          </div>
        </div>
      </div>
    `,
  }),
}
