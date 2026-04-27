<template>
  <div :class="['simple-table', { 'simple-table--clickable': rowsClickable }]" :style="tableStyle">
    <template v-if="loading">
      <div class="simple-table__loading">
        <v-skeleton-loader
          v-for="index in skeletonRowCount"
          :key="index"
          class="simple-table__skeleton"
          type="text"
        />
      </div>
    </template>

    <template v-else-if="items.length">
      <div class="simple-table__header">
        <span
          v-for="column in columns"
          :key="column.id"
          :aria-hidden="column.ariaHidden || undefined"
        >
          {{ column.label }}
        </span>
      </div>

      <component
        :is="rowsClickable ? 'button' : 'div'"
        v-for="item in items"
        :key="item.key"
        class="simple-table__row"
        v-bind="rowsClickable ? { type: 'button' } : {}"
        @click="handleRowClick(item)"
      >
        <slot name="row" :item="item" />
      </component>
    </template>

    <div v-else class="simple-table__empty">
      <slot name="empty" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

import type { SimpleTableColumn, SimpleTableItem } from '@/helpers/interfaces'

interface SimpleTableProps {
  columns: SimpleTableColumn[]
  items: SimpleTableItem[]
  loading?: boolean
  minHeight?: string
  skeletonRowCount?: number
  rowsClickable?: boolean
}

defineOptions({
  name: 'GsSimpleTable',
})

const props = withDefaults(defineProps<SimpleTableProps>(), {
  loading: false,
  minHeight: '304px',
  skeletonRowCount: 4,
  rowsClickable: true,
})

const emit = defineEmits<{
  (event: 'row-click', item: SimpleTableItem): void
}>()

const tableStyle = computed<CSSProperties>(() => ({
  '--simple-table-min-height': props.minHeight,
}))

const handleRowClick = (item: SimpleTableItem): void => {
  if (!props.rowsClickable) {
    return
  }

  emit('row-click', item)
}
</script>

<style lang="scss">
.simple-table {
  min-height: var(--simple-table-min-height);
  overflow: hidden;
  border: 1px solid var(--gray-light-CC);
  border-radius: var(--border-radius-small);
  background: var(--ui-white);
}

.simple-table__header,
.simple-table__row {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(120px, 1fr) 72px 20px;
  gap: 8px;
  align-items: center;
  padding: 0 8px 0 0;
}

.simple-table__header > span {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: var(--ui-black);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;
}

.simple-table__row {
  min-height: 50px;
  width: 100%;
  padding-left: 0;
  border-left: none;
  border-right: none;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  border-bottom: 1px solid var(--gray-light-CC);
  transition: background-color 0.2s ease;
}

.simple-table__cell {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 8px 12px;
  color: var(--ui-black);
  font-size: 14px;
  line-height: 1.2;
  text-align: left;
}

.simple-table__cell--primary {
  white-space: normal;
  word-break: break-word;
}

.simple-table__cell--metric {
  justify-content: flex-start;
}

.simple-table__chevron {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--ui-green);
}

.simple-table__empty {
  min-height: 154px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 24px 16px;
  text-align: center;
}

.simple-table__loading {
  padding: 16px;
}

.simple-table__skeleton {
  width: 100%;
}

.simple-table--clickable .simple-table__row {
  cursor: pointer;
}

.simple-table--clickable .simple-table__row:hover {
  background: rgb(0 0 0 / 2%);
}

@media (min-width: 600px) {
  .simple-table__header,
  .simple-table__row {
    grid-template-columns: minmax(0, 1.6fr) minmax(160px, 1.1fr) 88px 24px;
    gap: 16px;
    padding-right: 12px;
  }

  .simple-table__header > span,
  .simple-table__cell {
    padding-left: 16px;
    padding-right: 16px;
    font-size: 16px;
  }
}

@media (min-width: 960px) {
  .simple-table__header > span {
    font-size: 20px;
  }
}
</style>
