<template>
  <div class="filter-button-list">
    <button
      v-for="(category, index) in categories"
      :key="index"
      :class="['filter-button', { 'is-active': category === modelValue }]"
      @click.prevent="searchByCategory(category)"
    >
      <span class="filter-button-title">
        {{ category }}
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'GsFilter',
  emits: ['update:modelValue'],
  methods: {
    searchByCategory(category: string) {
      this.$emit('update:modelValue', category)
    },
  },
  props: {
    modelValue: {
      type: String as PropType<string>,
    },
    categories: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.filter-button-list {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  width: calc(50% - 12px);
  overflow-y: scroll;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 600px) {
    gap: 16px;
    overflow: hidden;
  }
}

.filter-button {
  border-radius: var(--border-radius-big);
  padding: 5px 8px;
  font-size: 16px;
  line-height: 20px;
  color: var(--gray-light-FF);
  background-color: #7c7c7c;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  flex-shrink: 0;
}

.filter-button.is-active {
  background-color: var(--ui-black);
}
</style>
