<script setup lang="ts">
import { computed } from 'vue'
import { VIcon, VProgressCircular } from 'vuetify/components'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'link'
type ButtonSize = 'small' | 'large'
type ButtonTag = 'a' | 'button' | 'router-link'
type ButtonType = 'button' | 'submit' | 'reset'
type AnchorTarget = '_blank' | '_self' | '_parent' | '_top'

type ButtonProps = {
  tag?: ButtonTag
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  href?: string
  width?: string
  target?: AnchorTarget
  buttonType?: ButtonType
}

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  variant: 'primary',
  target: '_self',
})

const componentTag = computed(() => (props.href ? 'a' : props.tag || 'button'))
const rippleEffect = computed(() =>
  componentTag.value === 'a' ? false : { class: 'ripple-effect' },
)

const buttonClasses = computed(() => [
  'gs-button',
  `gs-${props.variant}`,
  props.size,
  {
    'full-width': props.fullWidth,
    'is-loading': props.loading,
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
    :type="props.buttonType"
    :style="{ width: width + 'px' }"
  >
    <v-icon v-if="props.icon && !props.loading" class="icon">
      {{ props.icon }}
    </v-icon>
    <span v-if="$slots.default && !props.loading" class="text">
      <slot />
    </span>
    <v-progress-circular v-if="props.loading" :size="loaderSize" indeterminate color="gray" />
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
  height: 36px;
  padding: 0 16px;
  text-transform: capitalize;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;

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

  .icon {
    margin-right: 8px;
  }

  &.small {
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
  }

  &.full-width {
    width: 100%;
  }

  &.gs-primary {
    color: var(--ui-white);
    background-color: var(--ui-green);
  }

  &.gs-secondary {
    background-color: var(--ui-white);
    border: 2px solid var(--ui-green);
    color: var(--ui-green);
  }

  &.gs-success {
    color: var(--ui-black);
    background-color: var(--ui-emerald-green);
  }

  &.gs-info {
    color: var(--gray);
    background-color: transparent;
  }

  &.gs-danger {
    color: var(--ui-white);
    background-color: var(--ui-red);
  }

  &.gs-link {
    color: var(--ui-green);
    background-color: transparent;
    padding: 0;
    width: auto;
    height: auto;
    text-decoration: none;

    &:hover,
    &:active,
    &:focus,
    &:not(:disabled):not(.disabled):active:focus {
      opacity: 1;
    }
  }
}
</style>
