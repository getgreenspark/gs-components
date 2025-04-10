<!-- GsSubmenu.vue -->
<template>
  <nav class="gs-submenu">
    <ul class="gs-submenu__list">
      <li
        v-for="(item, index) in localItems"
        :key="index"
        :class="{ 'gs-submenu__item--selected': item.selected }"
        class="gs-submenu__item"
        @click="handleItemClick(item, index)"
      >
        <GsTypography
          :class="{ 'gs-submenu__text--unselected': !item.selected }"
          bold
          tag="span"
          variant="description"
        >
          {{ item.text }}
        </GsTypography>
        <div v-if="item.selected" class="gs-submenu__divider" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsSubmenu',
})

interface MenuItem {
  text: string
  selected: boolean
}

interface Props {
  items: MenuItem[]
}

const props = defineProps<Props>()
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
    selected: i === index,
  }))

  // Update local state
  localItems.value = updatedItems

  // Emit both the clicked item and the updated items array
  emit('itemClick', { ...item, selected: true })
  emit('update:items', updatedItems)
}
</script>

<style scoped>
.gs-submenu {
  width: 100%;
}

.gs-submenu__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 24px;
}

.gs-submenu__item {
  position: relative;
  cursor: pointer;
  padding: 4px 0;
  min-width: max-content;
}

/* Add styles to prevent text shifting */
.gs-submenu__item :deep(.gs-typography) {
  display: block;
  font-feature-settings: 'tnum' on;
  white-space: nowrap;
}

.gs-submenu__item :deep(.gs-typography--bold) {
  padding: 0;
}

.gs-submenu__text--unselected {
  opacity: 0.6;
}

.gs-submenu__divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--grey-scale-800);
}
</style>
