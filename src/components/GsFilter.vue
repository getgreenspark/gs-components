<template>
  <div class="filter-button-list">
    <button
      v-for="category in categories"
      :key="category"
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
  align-items: flex-start;
  gap: 8px;
  overflow-y: scroll;
  width: 100%;

  @media (min-width: 600px) {
    overflow: hidden;
  }
}

.filter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 6px;
  height: 28px;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: 'Cabin', sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: var(--ui-white);
  background-color: #7c7c7c;
  cursor: pointer;

  &.is-active {
    background-color: var(--ui-black);
  }
}

.filter-button-title {
  text-transform: capitalize;
}
</style>
