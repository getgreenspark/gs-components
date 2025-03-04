<template>
  <component
    :is="componentTag"
    v-ripple="componentTag === 'a' ? false : { class: `${rippleColor}--text` }"
    :class="[
      'gs-button',
      `gs-${type}`,
      size,
      { 'is-active': active },
      { 'full-width': fullWidth },
      { outlined },
    ]"
    :style="{ width: width + 'px' }"
    :disabled="disabled"
    :href="href"
    :target="target"
    :type="buttonType"
  >
    <v-icon v-if="!!icon && !loading" class="gs-icon material-icons-outlined">
      {{ icon }}
    </v-icon>
    <span
      v-if="$slots.default"
      :class="[
        'text',
        { 'is-loading': loading },
        { 'with-icon': icon },
        { 'text-uppercase': uppercased },
        { 'text-capitalize': capitalized },
      ]"
    >
      <slot />
    </span>
    <v-progress-circular
      v-if="loading"
      id="loader"
      :size="loaderSize"
      indeterminate
      :color="spinnerColor"
    />
  </component>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type Tag = 'a' | 'button'
type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'icon'
  | 'clear'
  | 'router-link'
  | 'link'
  | 'delete'
  | 'monochrome'
  | 'danger'
type ButtonTypeV2 = 'primary-v2' | 'secondary-v2'
type ButtonSize = 'small' | 'normal' | 'large'
type AnchorTarget = '_blank' | '_self' | '_parent' | '_top'

export default defineComponent({
  name: 'GsButton',
  computed: {
    componentTag(): Tag {
      return this.href ? 'a' : this.tag || 'button'
    },
    spinnerColor(): string {
      switch (this.type) {
        case 'primary':
          return 'white'
        case 'danger':
          return '#212121'
        case 'primary-v2':
        case 'secondary':
          return this.active ? 'white' : 'green'
        case 'secondary-v2':
          return this.active ? 'white' : 'black'
        case 'clear':
          return 'grey'
        case 'delete':
          return 'white'
        default:
          return 'green'
      }
    },
    loaderSize(): number {
      switch (this.size) {
        case 'large':
          return 32
        case 'normal':
          return 26
        case 'small':
          return 20
        default:
          return 32
      }
    },
    rippleColor(): string {
      switch (this.type) {
        case 'secondary':
          return this.active ? 'gray' : 'green'
        case 'secondary-v2':
          return this.active ? 'gray' : 'black'
        default:
          return 'gray'
      }
    },
  },
  props: {
    tag: {
      type: String as PropType<Tag>,
      default: 'button',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'normal',
    },
    type: {
      type: String as PropType<ButtonType | ButtonTypeV2>,
      default: 'primary',
    },
    active: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
    },
    icon: {
      type: String,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    capitalized: {
      type: Boolean,
      default: true,
    },
    uppercased: {
      type: Boolean,
      default: false,
    },
    buttonType: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
    href: { type: String },
    target: { type: String as PropType<AnchorTarget>, default: '_self' },
  },
})
</script>

<style lang="scss" scoped>
$small-height: 28px;
$small-line-height: 20px;
$normal-height: 40px;
$normal-line-height: 24px;
$large-height: 54px;
$large-line-height: 28px;

a.gs-button {
  text-decoration: none;
}

.gs-button {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
}

.gs-button:disabled {
  background-color: var(--gray-light);
  border-color: var(--gray-light);
  color: var(--ui-white);
  cursor: not-allowed;
}

.gs-button:not(:disabled):hover {
  opacity: 0.8;
}

#loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

:deep(.ripple-green) {
  color: var(--ui-green);
}

/* sizes */
.gs-button {
  &.small {
    height: $small-height;
    font-size: 14px;
    line-height: 16px;
    padding: 0 10px;
    text-transform: none;
  }

  &.normal {
    height: $normal-height;
    font-size: 16px;
    line-height: 19px;
    padding: 0 16px;
  }

  &.large {
    height: $large-height;
    font-size: 18px;
    line-height: 20px;
    padding: 0 16px;
  }
}

.gs-button .text.with-icon {
  margin-left: 5px;
}

/* primary */
.gs-button.gs-primary {
  &:not(:disabled) {
    background-color: var(--ui-green);
    box-shadow: var(--box-shadow-button);
    color: var(--ui-white);
  }

  &:not(:disabled) .text {
    color: var(--ui-white);
  }
}

/* monochrome */
.gs-button.gs-monochrome {
  &:not(:disabled) {
    background-color: var(--ui-black);
    box-shadow: var(--box-shadow-button);
    color: var(--ui-white);
  }

  :not(:disabled) .text {
    color: var(--ui-white);
  }

  &.outlined {
    background-color: var(--gray-light-FF);
    color: var(--ui-black);
    box-shadow: none;
    border: 1px solid var(--ui-black);
  }
}

/* secondary */
.gs-button.gs-secondary {
  &:not(:disabled) {
    background-color: var(--ui-white);
    border: 2px solid var(--ui-green);
  }

  &:not(:disabled) .text {
    color: var(--ui-green);
  }

  /* secondary - active */
  &.is-active:not(:disabled) {
    background-color: var(--ui-green);
    color: var(--ui-white);
    border: none;
  }

  &.is-active:not(:disabled) .text {
    color: var(--ui-white);
  }

  &:not(:disabled) .gs-icon {
    color: var(--ui-green);
  }
}

/* primary-v2 */
.gs-button.gs-primary-v2 {
  &:not(:disabled) {
    background-color: var(--ui-green);
    color: var(--ui-white);
    box-shadow: none;

    .text {
      color: var(--ui-white);
    }

    &.outlined {
      background-color: var(--ui-white);
      color: var(--ui-green);
      border: 1px solid var(--ui-green);
    }
  }

  &:not(:disabled) &:disabled {
    background-color: var(--ui-black);
    box-shadow: var(--box-shadow-button);
    color: var(--ui-white);
    cursor: not-allowed;
  }
}

/* secondary-v2 */
.gs-button.gs-secondary-v2 {
  &:not(:disabled) {
    background-color: var(--ui-dark-gray);
    color: var(--ui-white);
    box-shadow: none;

    .text {
      color: var(--ui-white);
    }

    &.outlined {
      background-color: var(--ui-white);
      color: var(--ui-dark-gray);
      border: 1px solid var(--ui-dark-gray);

      .text {
        color: var(--ui-dark-gray);
      }
    }
  }

  &:not(:disabled) &:disabled {
    background-color: var(--gray-light);
    border-color: var(--gray-light);
    color: var(--ui-white);
    cursor: not-allowed;

    &.outlined {
      background-color: var(--ui-white);
      border-color: var(--gray-light);
      color: var(--gray-light);
      cursor: not-allowed;
    }
  }
}

/* danger */
.gs-button.gs-danger {
  &:not(:disabled) {
    background-color: var(--ui-emerald-green);
    color: var(--font-color-primary);
    box-shadow: none;

    .text {
      color: var(--font-color-primary);
    }

    &.outlined {
      background-color: var(--ui-white);
      color: var(--ui-emerald-green);
      border: 1px solid var(--ui-emerald-green);

      .text {
        color: var(--ui-white);
      }
    }
  }
}

.gs-button.gs-tertiary {
  border-style: solid;
  border-width: 1px;
  border-radius: 99px;

  &:not(:disabled) {
    background-color: transparent;
    border-color: var(--ui-green);
    color: var(--ui-green);
    box-shadow: none;

    .text {
      color: var(--ui-green);
    }

    &:hover {
      background: rgba(71, 209, 143, 0.2);
    }
  }

  &:not(:disabled) &:disabled {
    background-color: var(--gray-light);
    border-color: var(--gray-light);
    color: var(--ui-white);
    cursor: not-allowed;

    &.outlined {
      background-color: var(--ui-white);
      border-color: var(--gray-light);
      color: var(--gray-light);
      cursor: not-allowed;
    }
  }
}

.gs-button.gs-danger,
.gs-button.gs-primary-v2,
.gs-button.gs-secondary-v2,
.gs-button.tertiary,
.gs-button.gs-clear {
  min-width: 78px;
  border-radius: 8px;
  padding: 10px 24px;
  max-height: unset;
  overflow: visible;

  .gs-icon {
    width: 22px;
    height: 22px;
  }

  .text {
    font-size: 20px;
    line-height: $normal-line-height;
    font-weight: 700;
  }

  &.normal,
  &.small,
  &.large {
    height: 100%;
  }

  &.small {
    padding-top: calc((#{$small-height} - #{$small-line-height}) / 2);
    padding-bottom: calc((#{$small-height} - #{$small-line-height}) / 2);

    .text {
      line-height: $small-line-height;
      font-size: 16px;
    }
  }

  &.normal {
    padding-top: 11.5px;
    padding-bottom: 11.5px;

    .text {
      font-size: 14px;
      line-height: normal;
    }
  }

  &.large {
    padding-top: calc((#{$large-height} - #{$large-line-height}) / 2);
    padding-bottom: calc((#{$large-height} - #{$large-line-height}) / 2);

    .text {
      line-height: $large-line-height;
      font-size: 24px;
    }
  }
}

/* icon */
.gs-button.gs-icon {
  min-width: unset;
  box-sizing: content-box;
  padding: 4px 8px;
  border-radius: 8px;

  &:not(:disabled) {
    background-color: var(--ui-green);
    color: var(--ui-white);
    box-shadow: none;

    .text {
      color: var(--ui-white);
    }

    &.outlined {
      background-color: var(--ui-white);
      color: var(--ui-green);
      border: 1px solid var(--ui-green);
    }
  }

  &:not(:disabled) &:disabled {
    background-color: var(--ui-black);
    box-shadow: var(--box-shadow-button);
    color: var(--ui-white);
    cursor: not-allowed;
  }
}

/* clear */
.gs-button.gs-clear {
  &:not(:disabled) {
    background-color: transparent;
  }

  &:not(:disabled) .text {
    color: var(--gray-light-7C);
  }
}

.gs-button.full-width {
  width: 100%;
}

/* link */
.gs-button.gs-link {
  background-color: transparent;
  text-decoration: none;
  text-transform: none;
  padding: 0;
  width: auto;
  min-width: auto;
  border-radius: 0;
  display: block;
  position: relative;
}

/* delete */
.gs-button.gs-delete:not(:disabled) {
  background-color: var(--ui-red);
  box-shadow: var(--box-shadow-button);
}

.gs-button.gs-delete:not(:disabled) .text {
  color: var(--ui-white);
}

.gs-button.gs-link:hover {
  opacity: 1;
}

.gs-button.gs-link .text {
  color: var(--ui-green);
}

.gs-button:disabled .text {
  color: var(--ui-white);
}

.gs-button.gs-link:disabled .text {
  color: var(--gray);
}

.gs-button .text.is-loading {
  opacity: 0;
}

.gs-icon {
  color: inherit;
}
</style>
