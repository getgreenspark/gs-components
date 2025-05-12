<template>
  <div class="gs-tabs">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="gs-tab"
      :class="{ active: modelValue === tab.value }"
      :disabled="tab.disabled"
      @click="selectTab(tab)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export interface TabItem {
  label: string
  value: string
  disabled?: boolean
}

export default defineComponent({
  name: 'GsTabs',
  props: {
    tabs: {
      type: Array as PropType<TabItem[]>,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    selectTab(tab: TabItem) {
      this.$emit('update:modelValue', tab.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.gs-tabs {
  display: flex;
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.gs-tab {
  font-size: 16px;
  font-weight: normal;
  border-bottom: 1px solid transparent;
  cursor: pointer;

  @media (min-width: 991px) {
    font-size: 20px;
  }

  &[disabled] {
    color: var(--gray-light-A9);
    cursor: not-allowed;
    user-select: none;
  }

  &.active {
    font-weight: bold;
    border-bottom: 1px solid var(--ui-black);
  }
}
</style>
