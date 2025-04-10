<template>
  <article class="gs-notification-bar">
    <div class="gs-notification-content">
      <img v-if="icon" :alt="title" :src="icon" class="gs-notification-icon" />
      <div class="gs-notification-text">
        <GsTypography v-if="title" bold color="main-white" tag="h2" variant="title-1">
          {{ title }}
        </GsTypography>
        <GsTypography
          v-if="description"
          class="gs-notification-description"
          color="main-white"
          variant="big-description"
        >
          <slot name="description">{{ description }}</slot>
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
import { onMounted, onUnmounted, ref } from 'vue'
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
  font-family:
    Cabin,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  justify-content: space-between;
  flex-wrap: wrap;

  :deep(a) {
    color: var(--ui-white);
    text-decoration: underline;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

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
    align-items: center;
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
  width: 24px;
  height: 24px;
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
</style>
