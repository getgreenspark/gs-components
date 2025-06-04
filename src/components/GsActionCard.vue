<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  padding: string
  width?: string
  height?: string
}

withDefaults(defineProps<Props>(), {
  width: 'auto',
  height: 'auto',
})

const classes = computed(() => ['gs-action-card'])
</script>

<template>
  <div
    :class="classes"
    :style="{
      padding: `${padding}`,
      width: `${width || 'auto'}`,
      height: `${height || 'auto'}`,
    }"
    role="button"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.gs-action-card {
  border-radius: 8px;
  border: 1px solid var(--gray-light-CC);

  &:hover {
    border-color: var(--ui-green);
    cursor: pointer;
    color: var(--ui-green);
  }

  &.full-width {
    width: 100%;
  }
}
</style>
