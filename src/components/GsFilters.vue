<script lang="ts" setup>
import { ref, watch } from 'vue'
import GsTags from './GsTags.vue'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsFilters'
})

interface MenuItem {
  text: string
  selected: boolean
  icon?: string
}

interface Props {
  items: MenuItem[]
  label: string
  size?: 'small' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'small'
})
const emit = defineEmits(['itemClick', 'update:items'])

const localItems = ref<MenuItem[]>([])

// Initialize localItems with props.items
watch(
  () => props.items,
  (newItems) => {
    localItems.value = JSON.parse(JSON.stringify(newItems))
  },
  { immediate: true, deep: true },
)

const handleItemClick = (item: MenuItem, index: number) => {
  // Create new array with updated selection state
  const updatedItems = localItems.value.map((menuItem, i) => ({
    ...menuItem,
    selected: i === index ? !menuItem.selected : false,
  }))

  // Update local state
  localItems.value = updatedItems

  // Emit both the clicked item and the updated items array
  emit('itemClick', { ...item, selected: !item.selected })
  emit('update:items', updatedItems)
}
</script>

<template>
  <div class="gs-project-filter" :class="{ 'gs-project-filter--large': size === 'large' }">
    <GsTypography 
      :variant="size === 'large' ? 'title-2' : 'body'"
      font-color="ui-white"
    >
      {{ label }}
    </GsTypography>
    <div
      v-for="(item, index) in localItems"
      :key="index"
      class="gs-project-filter__item"
      :class="{ 'gs-project-filter__item--large': size === 'large' }"
      @click="handleItemClick(item, index)"
    >
      <GsTags
        :background-color="item.selected ? 'ui-black' : 'gray-light-7C'"
        :icon="item.icon"
        :icon-size="size === 'large' ? 20 : 16"
        :label="item.text"
        border-color="none"
        font-color="ui-white"
        :font-size="size === 'large' ? 'title-2' : 'description'"
        :border-radius="size === 'large' ? '8px' : '4px'"
      />
    </div>
  </div>
</template>

<style scoped>
.gs-project-filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.gs-project-filter--large {
  gap: 24px;
}

.gs-project-filter__item {
  display: inline-flex;
  cursor: pointer;
  user-select: none;
}

.gs-project-filter__item:hover {
  opacity: 0.9;
}
</style>
