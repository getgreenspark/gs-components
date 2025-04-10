<script lang="ts" setup>
import { computed } from 'vue'
import '../assets/style/variables.css'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsTags',
})

type Color =
  | 'main-green'
  | 'main-light-green'
  | 'main-beige'
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
  | 'grey-scale-800'
  | 'grey-scale-80'
  | 'none'

interface Props {
  label: string
  backgroundColor?: Color
  borderColor?: Color
  fontColor?: Color
  icon?: string
  bold?: boolean
  fontSize?: 'caption' | 'body' | 'description'
  /**
   * Size of the icon in pixels
   * @default '14'
   */
  iconSize?: '14' | '16'
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'main-green',
  borderColor: 'none',
  fontColor: undefined,
  icon: undefined,
  bold: false,
  fontSize: 'caption',
  iconSize: '14',
})

const textColor = computed(() => {
  if (props.fontColor) {
    return `var(--${props.fontColor})`
  }

  // For grey scale colors, always use white text
  if (props.backgroundColor.startsWith('grey-scale-')) {
    return 'var(--main-white)'
  }

  const pastelColors = [
    'project-pastel-blue',
    'project-pastel-orange',
    'project-pastel-green',
    'project-pastel-turquoise',
    'project-pastel-purple',
    'main-beige',
  ]
  return pastelColors.includes(props.backgroundColor) ? 'var(--main-black)' : 'var(--main-white)'
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
      :style="{ filter: textColor === 'var(--main-black)' ? 'none' : 'brightness(0) invert(1)' }"
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
