import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import GsSubmenu from '../components/GsSubmenu.vue'
import '@/assets/style/colorVariables.css'

const meta: Meta<typeof GsSubmenu> = {
  title: 'Components/Navigation/Submenu',
  component: GsSubmenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Submenu Component

A horizontal submenu component that displays a list of items with a selected state.
Selected items are bold with a divider underneath. Clicking an item will select it
and deselect all others.

### Usage

\`\`\`vue
<template>
  <gs-submenu 
    v-model:items="menuItems"
    @item-click="handleItemClick"
  />
</template>

<script setup>
const menuItems = ref([
  { text: 'Item 1', selected: true },
  { text: 'Item 2', selected: false }
])

const handleItemClick = (item) => {
  console.log('Clicked item:', item)
}
</script>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of menu items with text and selected state'
    },
    'onUpdate:items': {
      action: 'update:items',
      description: 'Event emitted when items selection state changes'
    },
    onItemClick: {
      action: 'item-click',
      description: 'Event emitted when a menu item is clicked'
    }
  }
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    items: [
      { text: 'Snapshot', selected: true },
      { text: 'Project Details', selected: false },
      { text: 'Verification', selected: false }
    ]
  }
}

export const WithLongItems: StoryObj<typeof meta> = {
  args: {
    items: [
      { text: 'Company Information', selected: true },
      { text: 'Team Management', selected: false },
      { text: 'Billing & Subscriptions', selected: false },
      { text: 'Integrations & API', selected: false }
    ]
  }
}

export const TwoItems: StoryObj<typeof meta> = {
  args: {
    items: [
      { text: 'Active', selected: true },
      { text: 'Archived', selected: false }
    ]
  }
}

// Interactive example with v-model
export const Interactive = {
  render: () => ({
    components: { GsSubmenu },
    setup() {
      const items = ref([
        { text: 'Snapshot', selected: true },
        { text: 'Project Details', selected: false },
        { text: 'Verification', selected: false }
      ])

      return { items }
    },
    template: `
      <gs-submenu
        v-model:items="items"
        @item-click="(item) => console.log('Clicked:', item)"
      />
    `
  })
} 