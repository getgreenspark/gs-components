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
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'ui-green',
  borderColor: 'none',
  fontColor: 'ui-white',
  icon: undefined,
  iconSize: 14,
  fontSize: 'body',
  bold: false,
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
    }"
    class="gs-tags"
  >
    <img
      v-if="icon"
      :height="iconSize"
      :src="icon"
      :style="{ filter: textColor === 'var(--ui-black)' ? 'none' : 'brightness(0) invert(1)' }"
      :width="iconSize"
      alt=""
    />
    <GsTypography
      :style="{
        color: textColor,
        fontWeight: bold ? '700' : '400',
      }"
      :variant="fontSize"
    >
      {{ label }}
    </GsTypography>
  </div>
</template>

<style scoped>
@import '../assets/style/variables.css';

.gs-tags {
  border-radius: 4px;
  display: inline-flex;
  padding: 4px 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
</style>
