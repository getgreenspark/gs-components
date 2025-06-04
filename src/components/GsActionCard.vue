<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  padding: string
  width?: string
  height?: string
  disabled?: boolean
  fullWidth?: boolean
  ariaLabel?: string
  selected?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
  height: 'auto',
  disabled: false,
  fullWidth: false,
  selected: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const classes = computed(() => [
  'gs-action-card',
  {
    'gs-action-card--disabled': props.disabled,
    'gs-action-card--full-width': props.fullWidth,
    'gs-action-card--selected': props.selected,
  },
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <div
    :aria-disabled="disabled"
    :aria-label="ariaLabel"
    :class="classes"
    :style="{
      padding,
      width,
      height,
    }"
    role="button"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.gs-action-card {
  font-family: 'Cabin', sans-serif;
  border-radius: 8px;
  border: 1px solid var(--gray-light-CC);
  transition: all 0.2s ease-in-out;

  &:hover:not(.gs-action-card--disabled) {
    border-color: var(--ui-green);
    cursor: pointer;
    color: var(--ui-green);
  }

  &:focus-visible {
    outline: 2px solid var(--ui-green);
    outline-offset: 2px;
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--full-width {
    width: 100%;
  }

  &--selected {
    border-color: var(--ui-green);
    color: var(--ui-green);
  }
}
</style>
