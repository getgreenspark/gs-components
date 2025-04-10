<!-- GsProgressBar.vue -->
<script setup lang="ts">
import { VProgressLinear } from 'vuetify/components'
import { computed } from 'vue'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsProgressBar'
})

type ProgressColor = 'main-black' | 'main-light-green' | 'main-red'
type BackgroundColor = 'main-white' | 'main-beige'

interface Props {
  /**
   * The current value of the progress bar (0-100)
   */
  modelValue: number
  /**
   * The color of the progress bar fill
   * @default 'main-light-green'
   */
  color?: ProgressColor
  /**
   * The background color of the progress bar
   * @default 'main-white'
   */
  backgroundColor?: BackgroundColor
  /**
   * Whether to show the percentage text
   * @default true
   */
  showPercentage?: boolean
  /**
   * Height of the progress bar in pixels
   * @default 8
   */
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'main-light-green',
  backgroundColor: 'main-white',
  showPercentage: true,
  height: 8
})

const progressBarColor = computed(() => `var(--${props.color})`)
const progressBarBackground = computed(() => `var(--${props.backgroundColor})`)

const getTextColor = (value: number) => {
  // If progress is past the center point (where the text is), use white text
  return value >= 50 ? 'var(--main-white)' : 'var(--main-black)'
}
</script>

<template>
  <div class="gs-progress-bar-wrapper">
    <VProgressLinear
      :model-value="modelValue"
      color="transparent"
      :height="height"
      rounded
      class="gs-progress-bar"
      :style="{
        '--progress-color': progressBarColor,
        '--background-color': progressBarBackground
      }"
    >
      <template v-if="showPercentage" #default="{ value }">
        <GsTypography
          variant="caption"
          :style="{ color: getTextColor(value) }"
          class="gs-progress-bar__text"
        >
          {{ Math.round(value) }}%
        </GsTypography>
      </template>
    </VProgressLinear>
  </div>
</template>

<style scoped>
.gs-progress-bar-wrapper {
  position: relative;
  width: 100%;
}

.gs-progress-bar {
  border-radius: 100px;
  overflow: hidden;
}

.gs-progress-bar :deep(.v-progress-linear__determinate) {
  background-color: var(--progress-color) !important;
}

.gs-progress-bar :deep(.v-progress-linear__background) {
  border-radius: 100px;
  background-color: var(--background-color) !important;
  opacity: 1 !important;
}

.gs-progress-bar__text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  line-height: 1;
  transition: color 0.2s ease;
}
</style> 