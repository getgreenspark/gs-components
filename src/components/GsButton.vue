<script setup lang="ts">
import { computed } from 'vue'
import { VIcon, VProgressCircular } from 'vuetify/components'

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger'
  | 'info'
  | 'link'
  | 'icon'
  | 'outlined'
type ButtonSize = 'small' | 'large'
type ButtonTag = 'a' | 'button' | 'router-link'
type AnchorTarget = '_blank' | '_self' | '_parent' | '_top'

type ButtonProps = {
  tag?: ButtonTag
  type?: ButtonType
  size?: ButtonSize
  icon?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  href?: string
  width?: string
  target?: AnchorTarget
}

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  type: 'primary',
  target: '_self',
})

const componentTag = computed(() => (props.href ? 'a' : props.tag || 'button'))
const rippleEffect = computed(() =>
  componentTag.value === 'a' ? false : { class: 'ripple-effect' },
)

const buttonClasses = computed(() => [
  'gs-button',
  `gs-${props.type}`,
  props.size,
  {
    'full-width': props.fullWidth,
    'is-loading': props.loading,
    'with-icon': props.icon,
  },
])

const loaderSize = computed(() => {
  switch (props.size) {
    case 'small':
      return 20
    case 'large':
      return 32
    default:
      return 26
  }
})
</script>

<template>
  <component
    :is="componentTag"
    v-ripple="rippleEffect"
    :class="buttonClasses"
    :disabled="props.disabled || props.loading"
    :href="props.href"
    :target="props.target"
    :style="{ width: width + 'px' }"
    type="button"
  >
    <v-icon v-if="props.icon && !props.loading" class="icon">
      {{ props.icon }}
    </v-icon>
    <span v-if="$slots.default" class="text">
      <slot />
    </span>
    <v-progress-circular
      v-if="props.loading"
      class="loader"
      :size="loaderSize"
      indeterminate
      color="gray"
    />
  </component>
</template>

<style lang="scss" scoped>
.gs-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  line-height: 19px;
  min-width: 64px;
  height: 40px;
  padding: 0 16px;
  text-transform: capitalize;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  user-select: none;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus,
  &:not(:disabled):not(.disabled):active:focus {
    opacity: 0.8;
  }

  &:disabled:not(.is-loading) {
    background-color: var(--gray-light) !important;
    color: var(--ui-white) !important;
    border-color: var(--gray-light) !important;
    cursor: not-allowed;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .text {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &.with-icon {
    gap: 4px;

    &.large {
      font-size: 24px;
      line-height: 28px;
    }
  }

  &.is-loading {
    .text {
      opacity: 0;
    }
  }

  &.full-width {
    width: 100%;
  }

  &.small,
  &.gs-link {
    height: 28px;
    font-size: 14px;
    line-height: 16px;
    padding: 0 10px;
  }

  &.large {
    height: 54px;
    font-size: 18px;
    line-height: 20px;
    padding: 0 16px;

    &.full-width {
      font-size: 24px;
      line-height: 28px;
    }
  }

  &.gs-primary {
    color: var(--ui-white);
    background-color: var(--ui-green);
  }

  &.gs-secondary {
    background-color: transparent;
    border: 2px solid var(--ui-green);
    color: var(--ui-green);
    transition: background-color 100ms ease-in-out;

    &:hover,
    &:active,
    &:focus,
    &:not(:disabled):not(.disabled):active:focus {
      opacity: 1;
      background-color: #3b755f33;
    }
  }

  &.gs-tertiary {
    color: var(--ui-white);
    background-color: var(--ui-dark-gray);
  }

  &.gs-success {
    color: var(--ui-black);
    background-color: var(--ui-emerald-green);
    transition: all 100ms ease-in-out;
    border: 2px solid transparent;

    &:hover,
    &:active,
    &:focus,
    &:not(:disabled):not(.disabled):active:focus {
      opacity: 1;
      border: 2px solid var(--ui-green);
    }
  }

  &.gs-info {
    color: var(--ui-black);
    background-color: transparent;
  }

  &.gs-danger {
    color: var(--ui-white);
    background-color: var(--ui-red);
  }

  &.gs-icon {
    min-width: unset;
    padding: 4px 8px;
    color: var(--ui-white);
    background-color: var(--ui-green);
  }

  &.gs-outlined {
    border: 1px solid var(--ui-black);
    color: var(--ui-black);
    background-color: var(--ui-white);
  }

  &.gs-link {
    color: var(--ui-green);
    background-color: transparent;
    padding: 0;
    width: auto;
    height: auto;
    text-decoration: none;
    gap: 0;

    &:hover,
    &:active,
    &:focus,
    &:not(:disabled):not(.disabled):active:focus {
      opacity: 1;
    }
  }
}
</style>
