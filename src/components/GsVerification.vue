<!-- GsVerification.vue -->
<script setup lang="ts">
import GsTypography from './GsTypography.vue'
import GsIconWithText from './GsIconWithText.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'

defineOptions({
  name: 'GsVerification'
})

interface VerificationItem {
  /**
   * Path to the icon image
   */
  iconPath: string
  /**
   * Text to display next to the icon.
   * Supports HTML content which will be safely rendered.
   */
  text: string
}

interface Props {
  /**
   * Title text to display at the top of the component
   * @default "Verification"
   */
  title?: string
  /**
   * Array of verification items to display
   */
  items: VerificationItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Verification'
})

const isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 500
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

const textVariant = computed(() => isMobile.value ? 'body' : 'description')
</script>

<template>
  <section class="gs-verification">
    <GsTypography variant="description" bold tag="h3">
      {{ title }}
    </GsTypography>

    <div class="gs-verification__grid">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="gs-verification__item"
      >
        <GsIconWithText
          :icon-path="item.iconPath"
          :text="item.text"
          :text-variant="textVariant"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gs-verification {
  display: flex;
  max-width: 498px;
  flex-direction: column;
  align-items: stretch;
}

.gs-verification__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0 17px;
  margin-top: 10px;
}

.gs-verification__item {
  flex: 1 1 calc(50% - 10px);
  min-width: 200px;
  max-width: calc(50% - 10px);
}

@media (max-width: 991px) {
  .gs-verification__grid {
    max-width: 100%;
  }
}

@media (max-width: 500px) {
  .gs-verification__grid {
    gap: 0;
  }

  .gs-verification__item {
    max-width: 50%;
    flex: unset;
  }
}
</style>
