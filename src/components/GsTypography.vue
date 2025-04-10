<template>
  <component
    :is="tag"
    :class="['gs-typography', `gs-typography--${variant}`, { 'gs-typography--bold': bold }]"
    :style="{ color: `var(--${color})` }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'GsTypography',
})

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'title-1'
  | 'title-2'
  | 'big-description'
  | 'description'
  | 'body'
  | 'caption'
  | 'minimum'

withDefaults(
  defineProps<{
    variant: TypographyVariant
    bold?: boolean
    tag?: string
    color?: string
  }>(),
  {
    bold: false,
    tag: 'p',
    color: 'main-black',
  },
)
</script>

<style lang="scss" scoped>
.gs-typography {
  margin: 0;
  padding: 0;
  font-family:
    Cabin,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: var(--main-black);

  // H1 - 48px / 56px
  &--h1 {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // H2 - 44px / 52px
  &--h2 {
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // H3 - 40px / 48px
  &--h3 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // H4 - 36px / 44px
  &--h4 {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // H5 - 32px / 40px
  &--h5 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // H6 - 28px / 36px
  &--h6 {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // Title 1 - 24px / 32px
  &--title-1 {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // Title 2 - 20px / 28px
  &--title-2 {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // Big Description - 18px / 26px
  &--big-description {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // Description - 16px / 24px
  &--description {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // Body - 14px / 22px
  &--body {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // Caption - 12px / 20px
  &--caption {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }

  // Minimum - 9px / 17px
  &--minimum {
    font-size: 9px;
    line-height: 17px;
    letter-spacing: -0.01em;

    &.gs-typography--bold {
      font-weight: 700;
    }
  }
}
</style>
