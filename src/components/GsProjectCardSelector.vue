<script lang="ts" setup>
import GsTags from './GsTags.vue'
import GsTypography from './GsTypography.vue'
import GsDivider from './GsDivider.vue'
import GsButton from './GsButton.vue'

defineOptions({
  name: 'GsProjectCardSelector',
})

type TagBackgroundColor = 'ui-green' | 'ui-emerald-green' | 'ui-beige'

type Color =
  | 'ui-green'
  | 'ui-emerald-green'
  | 'ui-beige'
  | 'ui-black'
  | 'ui-white'
  | 'ui-red'
  | 'ui-yellow'
  | 'ui-blue'
  | 'ui-blue-light'
  | 'ui-purple-light'
  | 'ui-sky-blue'
  | 'ui-gold'
  | 'ui-brown'
  | 'ui-orange'
  | 'ui-torquoise'

interface Props {
  title: string
  subtitle: string
  /**
   * The description text to display in the card.
   * Supports HTML content which will be safely rendered.
   * @example "Learn more about our <a href='#'>impact projects</a>"
   */
  description: string
  /**
   * The location text to display in the card footer.
   * Supports HTML content which will be safely rendered.
   * @example "Located in <strong>Central Africa</strong>"
   */
  location: string
  imageUrl: string
  imageAlt?: string
  tagBackgroundColor?: TagBackgroundColor
  tagFontColor?: Color
  tagText?: string
  cardBackgroundColor?: 'grey-scale-10' | 'grey-scale-20'
  locationIcon?: string
  variant?: 'horizontal' | 'compact'
  readMoreVariant?: 'text' | 'chevron'
  enableHover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: '',
  tagBackgroundColor: 'ui-green',
  tagFontColor: undefined,
  tagText: 'XXX impact created',
  cardBackgroundColor: 'grey-scale-10',
  locationIcon: undefined,
  variant: 'horizontal',
  readMoreVariant: 'text',
  enableHover: false,
})

const emit = defineEmits<{
  (e: 'readMore'): void
}>()

const handleReadMore = () => {
  emit('readMore')
}
</script>

<template>
  <article
    :class="[
      `background-${cardBackgroundColor}`,
      `variant-${variant}`,
      'clickable',
      { 'hover-enabled': enableHover },
    ]"
    class="project-card"
    @click="handleReadMore"
  >
    <div class="image-wrapper">
      <img :alt="imageAlt" :src="imageUrl" class="card-image" />
    </div>
    <div class="content-wrapper">
      <GsTags
        v-if="variant === 'compact'"
        :background-color="tagBackgroundColor"
        :font-color="tagFontColor"
        :label="tagText"
        border-color="none"
        class="compact-tag"
      />
      <header class="card-header">
        <GsTypography bold variant="title-2">{{ title }}</GsTypography>
        <GsTags
          v-if="variant === 'horizontal'"
          :background-color="tagBackgroundColor"
          :font-color="tagFontColor"
          :label="tagText"
          border-color="none"
        />
      </header>

      <div class="content-section">
        <GsTypography variant="description">{{ subtitle }}</GsTypography>
        <GsTypography variant="body">
          <slot name="description">{{ description }}</slot>
        </GsTypography>
      </div>

      <GsDivider color="grey250" />

      <footer class="card-footer">
        <div class="location-wrapper">
          <div class="location-icon">
            <img v-if="locationIcon" :src="locationIcon" alt="Location icon" />
            <svg
              v-else
              fill="none"
              height="20"
              viewBox="0 0 16 20"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 0C11.7371 0 16 2.89412 16 8.41177C16 12.0824 13.3371 15.9529 8 20C2.66286 15.9529 0 12.0824 0 8.41177C0 2.89412 4.26286 0 8 0Z"
                fill="#1A975B"
                fill-rule="evenodd"
              />
              <path
                d="M11 7.41891C11 6.9672 10.7375 6.56786 10.3381 6.33218C10.5181 6.13579 10.625 5.88866 10.625 5.61861C10.625 4.98524 10.0381 4.47297 9.3125 4.47297C9.29375 4.47297 9.275 4.47461 9.25625 4.47624C9.29187 4.3715 9.3125 4.26184 9.3125 4.14564C9.3125 3.51227 8.72562 3 8 3C7.27437 3 6.6875 3.51227 6.6875 4.14564C6.6875 4.26021 6.70812 4.3715 6.74375 4.47624C6.725 4.47624 6.70625 4.47297 6.6875 4.47297C5.96188 4.47297 5.375 4.98524 5.375 5.61861C5.375 5.88866 5.48375 6.13742 5.66188 6.33218C5.2625 6.56786 5 6.96556 5 7.41891C5 7.87226 5.2625 8.26996 5.66188 8.50563C5.48188 8.70203 5.375 8.94916 5.375 9.2192C5.375 9.85258 5.96188 10.3648 6.6875 10.3648H9.3125C10.0381 10.3648 10.625 9.85258 10.625 9.2192C10.625 8.94916 10.5162 8.70039 10.3381 8.50563C10.7375 8.26996 11 7.87226 11 7.41891Z"
                fill="white"
              />
              <path
                d="M8.36 12.7871V10.3648H8.12H7.88V12.7871C7.88 13.014 7.88 12.9998 8.12 12.9998C8.36 12.9998 8.36 13.014 8.36 12.7871Z"
                fill="white"
              />
            </svg>
          </div>
          <GsTypography variant="body">
            <slot name="location">{{ location }}</slot>
          </GsTypography>
        </div>
        <GsButton v-if="readMoreVariant === 'text'" aria-hidden="true" tabindex="-1" type="link">
          Read more
        </GsButton>
        <div v-else aria-hidden="true" class="chevron-button" tabindex="-1">
          <img alt="Chevron right" class="chevron-icon" src="/public/chevron_right.svg" />
        </div>
      </footer>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border 0.2s ease;
  border: 1px solid transparent;
}

.clickable {
  cursor: pointer;
}

.variant-horizontal .image-wrapper {
  order: 2;
}

.variant-compact .image-wrapper {
  order: -1;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.card-header :deep(.gs-tags) {
  flex-shrink: 0;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.location-icon {
  width: 16px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.image-wrapper {
  flex-shrink: 0;
}

.card-image {
  border-radius: 8px;
  object-fit: cover;
}

.variant-horizontal .card-image {
  width: 300px;
  height: 100%;
  min-height: 100%;
}

.variant-compact .card-image {
  width: 100%;
  max-height: 140px;
}

.chevron-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chevron-icon {
  width: 24px;
  height: 24px;
}

.compact-tag {
  margin-bottom: -8px;
  align-self: flex-start;
}

@media (max-width: 991px) {
  .variant-horizontal {
    flex-direction: column;
  }

  .variant-horizontal .image-wrapper {
    order: -1;
  }

  .variant-horizontal .card-image {
    width: 100%;
    max-height: 140px;
    min-height: unset;
  }
}

:deep(a) {
  color: inherit;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
}
</style>
