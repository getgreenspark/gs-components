import type { Meta, StoryObj } from '@storybook/vue3'
import GsProjectFilter from '@/components/GsProjectFilter.vue'
import '@/assets/style/colorVariables.css'

const meta: Meta<typeof GsProjectFilter> = {
  title: 'Components/Navigation/ProjectFilter',
  component: GsProjectFilter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Project Filter Component

A filter component that displays a list of selectable tags. Each tag can be selected
independently and shows a different style when selected.

### Usage

\`\`\`vue
<template>
  <gs-project-filter
    v-model:items="filterItems"
    @item-click="handleItemClick"
  />
</template>

<script>
const filterItems = ref([
  { text: 'All Projects', selected: true },
  { text: 'Active', selected: false },
  { text: 'Completed', selected: false }
])

const handleItemClick = (item) => {
  console.log('Clicked item:', item)
}
</script>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of filter items with text and selected state',
    },
    onItemClick: {
      action: 'item-click',
      description: 'Event emitted when a filter item is clicked',
    },
    'onUpdate:items': {
      action: 'update:items',
      description: 'Event emitted when items selection state changes',
    },
  },
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    items: [
      { text: 'All Projects', selected: true, icon: '' },
      { text: 'Water', selected: false, icon: '/icons/impact_types/project_water.svg' },
      { text: 'Trees', selected: false, icon: '/icons/impact_types/project_trees.svg' },
    ],
  },
}

export const WithIcons: StoryObj<typeof meta> = {
  args: {
    items: [
      { text: 'Trees', selected: true, icon: '/icons/impact_types/project_trees.svg' },
      { text: 'CO2', selected: false, icon: '/icons/impact_types/project_co2.svg' },
      { text: 'Plastic', selected: false, icon: '/icons/impact_types/project_plastic.svg' },
      {
        text: 'Seaforestation',
        selected: false,
        icon: '/icons/impact_types/project_seaforestation.svg',
      },
      { text: 'Water', selected: false, icon: '/icons/impact_types/project_water.svg' },
      { text: 'Bees', selected: false, icon: '/icons/impact_types/project_bees.svg' },
    ],
  },
}

export const ManyFilters: StoryObj<typeof meta> = {
  args: {
    items: [
      { text: 'All Projects', selected: true, icon: '/icons/impact_types/project_all.svg' },
      { text: 'Active', selected: false, icon: '/icons/impact_types/project_active.svg' },
      { text: 'Completed', selected: false, icon: '/icons/impact_types/project_completed.svg' },
      { text: 'Archived', selected: false, icon: '/icons/impact_types/project_archived.svg' },
      {
        text: 'High Priority',
        selected: false,
        icon: '/icons/impact_types/project_high_priority.svg',
      },
      {
        text: 'Low Priority',
        selected: false,
        icon: '/icons/impact_types/project_low_priority.svg',
      },
      { text: 'Team Projects', selected: false, icon: '/icons/impact_types/project_team.svg' },
      {
        text: 'Personal Projects',
        selected: false,
        icon: '/icons/impact_types/project_personal.svg',
      },
    ],
  },
}
