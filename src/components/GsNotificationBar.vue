<template>
  <article class="gs-notification-bar">
    <div class="gs-notification-content">
      <img v-if="icon" :alt="title" :src="icon" class="gs-notification-icon" />
      <div class="gs-notification-text">
        <GsTypography v-if="title" bold color="ui-white" tag="h2" variant="title-1">
          {{ title }}
        </GsTypography>
        <GsTypography
          v-if="description"
          class="gs-notification-description"
          color="ui-white"
          variant="big-description"
        >
          <div v-html="sanitizedDescription"></div>
        </GsTypography>
      </div>
    </div>
    <GsButton
      :full-width="isSmallScreen"
      :icon="buttonIcon"
      type="success"
      @click="handleButtonClick"
    >
      {{ buttonLabel }}
    </GsButton>
  </article>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import GsButton from './GsButton.vue'
import GsTypography from './GsTypography.vue'
import '../assets/style/variables.css'

defineOptions({
  name: 'GsNotificationBar',
})

type NotificationBarProps = {
  icon?: string
  title?: string
  /**
   * The description text to display below the title.
   * This prop is used as a fallback when no description slot is provided.
   * Supports HTML content which will be safely rendered.
   * @example "Get started with our <a href='#'>premium features</a>"
   */
  description?: string
  buttonLabel?: string
  buttonIcon?: string
}

const props = withDefaults(defineProps<NotificationBarProps>(), {
  icon: '',
  title: '',
  description: '',
  buttonLabel: 'Action',
  buttonIcon: '',
})

// Sanitize HTML by only allowing safe tags and attributes
const sanitizedDescription = computed(() => {
  const div = document.createElement('div')
  div.innerHTML = props.description
  
  // Only allow specific tags and attributes
  const allowedTags = ['a', 'strong', 'em', 'b', 'i', 'span', 'br']
  const allowedAttributes = ['href', 'target', 'class', 'style']
  
  // Remove any tags that aren't in the allowed list
  const elements = div.getElementsByTagName('*')
  for (let i = elements.length - 1; i >= 0; i--) {
    if (!allowedTags.includes(elements[i].tagName.toLowerCase())) {
      elements[i].parentNode?.replaceChild(
        document.createTextNode(elements[i].textContent || ''),
        elements[i]
      )
    } else {
      // Remove any attributes that aren't in the allowed list
      const attributes = elements[i].attributes
      for (let j = attributes.length - 1; j >= 0; j--) {
        if (!allowedAttributes.includes(attributes[j].name.toLowerCase())) {
          elements[i].removeAttribute(attributes[j].name)
        }
      }
    }
  }
  
  return div.innerHTML
})

const emit = defineEmits<{
  (e: 'button-click'): void
}>()

const isSmallScreen = ref(false)

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const handleButtonClick = () => {
  emit('button-click')
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.css';

.gs-notification-bar {
  border-radius: 8px;
  background-color: var(--ui-black);
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  align-items: center;
  font-family:
    Cabin,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    padding: 16px;
    flex-direction: column;
    align-items: stretch;

    :deep(.gs-button) {
      margin-top: 8px;
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 16px;
  }
}

.gs-notification-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  min-width: 0; // Prevent flex item from overflowing
}

.gs-notification-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-top: 2px; // Align with text
}

.gs-notification-text {
  flex: 1;
  min-width: 0; // Prevent flex item from overflowing
}

.gs-notification-description {
  margin-top: 4px;
  opacity: 0.8;
}

.gs-notification-description :deep(a) {
  color: var(--ui-white);
  text-decoration: underline;
  opacity: 1;
  
  &:hover {
    opacity: 0.8;
  }
}

.gs-notification-description :deep(strong),
.gs-notification-description :deep(b) {
  font-weight: bold;
}

.gs-notification-description :deep(em),
.gs-notification-description :deep(i) {
  font-style: italic;
}

.gs-notification-description :deep(br) {
  display: block;
  content: '';
  margin-top: 8px;
}
</style>
