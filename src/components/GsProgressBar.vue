<!-- GsProgressBar.vue -->
<script lang="ts" setup>
import { VProgressLinear } from 'vuetify/components'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsProgressBar',
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
  height: 8,
})

const getTextColor = (value: number) => {
  // If progress is past the center point (where the text is), use white text
  return value >= 50 ? 'var(--main-white)' : 'var(--main-black)'
}
</script>

<template>
  <div class="gs-progress-bar-wrapper">
    <VProgressLinear
      :bg-color="backgroundColor"
      :color="color"
      :height="height"
      :model-value="modelValue"
      class="gs-progress-bar"
      rounded
    >
      <template v-if="showPercentage" #default="{ value }">
        <GsTypography
          :style="{ color: getTextColor(value) }"
          class="gs-progress-bar__text"
          variant="caption"
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

.gs-progress-bar__text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
