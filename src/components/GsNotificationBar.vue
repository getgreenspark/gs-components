<template>
  <article class="gs-notification-bar">
    <div class="gs-notification-content">
      <img
        v-if="icon"
        :src="icon"
        :alt="title"
        class="gs-notification-icon"
      />
      <div class="gs-notification-text">
        <GsTypography
          v-if="title"
          variant="title-1"
          bold
          tag="h2"
          color="main-white"
        >
          {{ title }}
        </GsTypography>
        <GsTypography
          v-if="description"
          variant="big-description"
          color="main-white"
          class="gs-notification-description"
          v-html="description"
        />
      </div>
    </div>
    <GsButton
      type="success"
      :icon="buttonIcon"
      :full-width="isSmallScreen"
      @click="handleButtonClick"
    >
      {{ buttonLabel }}
    </GsButton>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import GsButton from './GsButton.vue'
import GsTypography from './GsTypography.vue'
import '../assets/style/colorVariables.css'

defineOptions({
  name: 'GsNotificationBar'
})

type NotificationBarProps = {
  icon?: string
  title?: string
  /**
   * The description text to display below the title.
   * Supports HTML content which will be safely rendered.
   * @example "Check out our <a href='#'>latest updates</a>"
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
  buttonIcon: ''
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
@import '../assets/style/colorVariables.css';

.gs-notification-bar {
  border-radius: 8px;
  background-color: var(--main-black);
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  font-family: Cabin, -apple-system, Roboto, Helvetica, sans-serif;
  justify-content: space-between;
  flex-wrap: wrap;

  :deep(a) {
    color: var(--main-white);
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