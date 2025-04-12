<script lang="ts" setup>
import { computed } from 'vue'
import '../assets/style/variables.css'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsTags',
})

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
  | 'project-blue'
  | 'project-orange'
  | 'project-green'
  | 'project-turquoise'
  | 'project-purple'
  | 'project-pastel-blue'
  | 'project-pastel-orange'
  | 'project-pastel-green'
  | 'project-pastel-turquoise'
  | 'project-pastel-purple'
  | 'gray-light-7C'
  | 'none'

interface Props {
  label: string
  backgroundColor?: Color
  borderColor?: Color
  fontColor?: Color
  icon?: string
  iconSize?: number
  fontSize?: 'caption' | 'body' | 'description'
  bold?: boolean
  borderRadius?: '4px' | '8px'
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'ui-green',
  borderColor: 'none',
  fontColor: 'ui-white',
  icon: undefined,
  iconSize: 14,
  fontSize: 'body',
  bold: false,
  borderRadius: '4px',
})

const textColor = computed(() => {
  if (props.fontColor) {
    return `var(--${props.fontColor})`
  }

  // For grey scale colors, always use white text
  if (props.backgroundColor.startsWith('grey-scale-')) {
    return 'var(--ui-white)'
  }

  const pastelColors = [
    'project-pastel-blue',
    'project-pastel-orange',
    'project-pastel-green',
    'project-pastel-turquoise',
    'project-pastel-purple',
    'ui-beige',
  ]
  return pastelColors.includes(props.backgroundColor) ? 'var(--ui-black)' : 'var(--ui-white)'
})

const borderStyle = computed(() => {
  if (props.borderColor === 'none') return 'none'
  return `1px solid var(--${props.borderColor})`
})

const backgroundStyle = computed(() => {
  if (props.borderColor && !props.backgroundColor) return 'transparent'
  return `var(--${props.backgroundColor})`
})
</script>

<template>
  <div
    :style="{
      backgroundColor: backgroundStyle,
      border: borderStyle,
      borderRadius: props.borderRadius,
    }"
    class="gs-tags"
  >
    <img
      v-if="icon"
      :src="icon"
      :style="{ width: `${iconSize}px`, height: `${iconSize}px` }"
      class="gs-tags__icon"
      alt=""
    />
    <GsTypography
      :variant="fontSize"
      :bold="bold"
      :style="{ color: textColor }"
      class="gs-tags__label"
    >
      {{ label }}
    </GsTypography>
  </div>
</template>

<style scoped>
@import '../assets/style/variables.css';

.gs-tags {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
}

.gs-tags__icon {
  flex-shrink: 0;
}

.gs-tags__label {
  margin: 0;
  white-space: nowrap;
}
</style>
