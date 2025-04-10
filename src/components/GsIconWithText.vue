<template>
  <article class="gs-icon-with-text" role="region">
    <div class="icon-wrapper">
      <img v-if="iconPath" :alt="iconAlt" :src="iconPath" class="custom-icon" />
      <v-icon v-else-if="mdiIcon" :color="iconColor" :icon="mdiIcon" :size="iconSize" />
    </div>
    <div class="text-wrapper">
      <GsTypography :tag="tag" :variant="textVariant" class="text-content">
        <slot name="text">{{ text }}</slot>
      </GsTypography>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { VIcon } from 'vuetify/components'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsIconWithText',
})

interface Props {
  /** MDI icon name (e.g. 'mdi-check') */
  mdiIcon?: string
  /** Path to custom icon */
  iconPath?: string
  /** Alt text for custom icon */
  iconAlt?: string
  /** Icon size in pixels */
  iconSize?: string | number
  /** Icon color using design system variables */
  iconColor?: string
  /**
   * Text content to display next to the icon.
   * Supports HTML content which will be safely rendered.
   * @example "Check out our <a href='#'>documentation</a>"
   */
  text: string
  /** Typography variant for the text */
  textVariant?:
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
  /** HTML tag to use for the text */
  tag?: string
}

withDefaults(defineProps<Props>(), {
  iconSize: 20,
  iconColor: 'var(--main-black)',
  textVariant: 'body',
  tag: 'p',
})
</script>

<style scoped>
.gs-icon-with-text {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.custom-icon {
  width: 14px;
  height: 14px;
}

.text-wrapper {
  flex: 1;
}

.text-content {
  margin: 0;
}

:deep(a) {
  color: inherit;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
}

@media (max-width: 991px) {
  .gs-icon-with-text {
    padding: 6px 0;
  }
}

@media (max-width: 640px) {
  .gs-icon-with-text {
    padding: 4px 0;
    gap: 6px;
  }
}
</style>
