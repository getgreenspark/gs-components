<template>
  <section :class="sectionClasses" v-bind="sectionAttrs">
    <header
      v-if="title || description || $slots.header || $slots.actions"
      :class="[
        'gs-page-section__header',
        { 'gs-page-section__header--with-actions': $slots.actions && !$slots.header },
      ]"
    >
      <slot name="header">
        <div
          :class="[
            'gs-page-section__heading',
            { 'gs-page-section__heading--with-description': description },
          ]"
        >
          <component
            :is="titleTag"
            v-if="title"
            :class="['gs-page-section__title', `gs-page-section__title--${titleSize}`]"
          >
            {{ title }}
          </component>
          <p v-if="description" class="gs-page-section__description">
            {{ description }}
          </p>
        </div>
        <div v-if="$slots.actions" class="gs-page-section__actions">
          <slot name="actions" />
        </div>
      </slot>
    </header>

    <div v-if="$slots.default" class="gs-page-section__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="gs-page-section__footer">
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import type {
  GsPageSectionContentGap,
  GsPageSectionPadding,
  GsPageSectionTitleSize,
  GsPageSectionTitleTag,
  GsPageSectionVariant,
} from '@/helpers/interfaces'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    titleTag?: GsPageSectionTitleTag
    titleSize?: GsPageSectionTitleSize
    variant?: GsPageSectionVariant
    padding?: GsPageSectionPadding
    flushOnMobile?: boolean
    stretch?: boolean
    contentGap?: GsPageSectionContentGap
  }>(),
  {
    titleTag: 'h2',
    titleSize: 'lg',
    variant: 'card',
    padding: 'default',
    flushOnMobile: false,
    stretch: false,
    contentGap: 'sm',
  },
)

const attrs = useAttrs()
const slots = useSlots()

const sectionClasses = computed(() => [
  'gs-page-section',
  `gs-page-section--${props.variant}`,
  `gs-page-section--padding-${props.padding}`,
  {
    'gs-page-section--flush-mobile': props.flushOnMobile,
    'gs-page-section--stretch': props.stretch,
    'gs-page-section--gap-md': props.contentGap === 'md',
    'gs-page-section--has-footer': Boolean(slots.footer),
  },
  attrs.class,
])

const sectionAttrs = computed(() => {
  const attrsCopy = { ...attrs }
  delete attrsCopy.class
  return attrsCopy
})
</script>

<style lang="scss" scoped>
.gs-page-section {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: var(--border-radius-big);
  background: var(--ui-white);

  &--padding-default {
    padding: 16px 8px;

    @media only screen and (min-width: 600px) {
      padding: 24px;
    }
  }

  &--padding-compact {
    padding: 16px;
  }

  &--card {
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
  }

  &--elevated {
    box-shadow: var(--box-shadow-wide);
  }

  &--flat {
    box-shadow: none;
  }

  &--flush-mobile {
    @media only screen and (max-width: 599px) {
      padding: 0;
    }
  }

  &--stretch {
    height: 100%;
    min-height: 100%;
  }

  &--gap-md {
    gap: 24px;
  }

  &--has-footer {
    justify-content: space-between;

    .gs-page-section__body {
      flex: 1 1 auto;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
  }
}

.gs-page-section__header--with-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media only screen and (max-width: 599px) {
    align-items: flex-start;
    flex-direction: column;
  }
}

.gs-page-section__heading--with-description {
  .gs-page-section__title {
    margin-bottom: 8px;
  }
}

.gs-page-section__title {
  margin: 0;
  color: var(--ui-black);
  font-weight: 700;
  line-height: 1.2;

  &--lg {
    font-size: 24px;
  }

  &--sm {
    font-size: 20px;
  }
}

.gs-page-section__description {
  margin: 0;
  font-size: 20px;
  line-height: 24px;
}

.gs-page-section__body {
  min-width: 0;
}

.gs-page-section__footer {
  margin-top: auto;
}
</style>
