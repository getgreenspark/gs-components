<script lang="ts" setup>
import { VProgressLinear } from 'vuetify/components'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsProgressBar',
})

type ProgressColor = 'ui-black' | 'ui-emerald-green' | 'ui-red'
type BackgroundColor = 'ui-white' | 'ui-beige'

interface Props {
  /**
   * The current value of the progress bar (0-100)
   */
  modelValue: number
  /**
   * The color of the progress bar fill
   * @default 'ui-emerald-green'
   */
  color?: ProgressColor
  /**
   * The background color of the progress bar
   * @default 'ui-white'
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

const _props = withDefaults(defineProps<Props>(), {
  color: 'ui-emerald-green',
  backgroundColor: 'ui-white',
  showPercentage: true,
  height: 8,
})

const getTextColor = (value: number) => {
  // If progress is past the center point (where the text is), use white text
  return value >= 50 ? 'var(--ui-white)' : 'var(--ui-black)'
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
