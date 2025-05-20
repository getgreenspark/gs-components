<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'GsTag',
})

type Color = 'beige' | 'black' | 'pastel-green' | 'grey' | 'emerald-green'

interface Props {
  label: string
  backgroundColor?: Color
  icon?: string
  bold?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'pastel-green',
  icon: undefined,
  bold: false,
})

const textColor = computed(() => {
  return props.backgroundColor === 'black' ? 'var(--ui-white)' : 'var(--ui-black)'
})

const iconColor = computed(() => {
  switch (props.backgroundColor) {
    case 'black':
      return 'var(--ui-white)'
    case 'grey':
      return 'var(--ui-black)'
    default:
      return 'var(--ui-green)'
  }
})
const computedBackgroundColor = computed(() => {
  switch (props.backgroundColor) {
    case 'black':
      return 'var(--ui-black)'
    case 'grey':
      return 'var(--grey-scale-200)'
    case 'beige':
      return 'var(--ui-beige)'
    case 'emerald-green':
      return 'var(--ui-emerald-green)'
    default:
      return 'var(--project-pastel-green)'
  }
})
</script>

<template>
  <div
    :style="{
      backgroundColor: `${computedBackgroundColor}`,
      gap: label ? '4px' : '0',
    }"
    class="gs-tag"
  >
    <v-icon
      v-if="icon && icon.startsWith('mdi')"
      :icon="icon"
      :size="'16px'"
      :style="{ color: iconColor }"
      class="gs-tag__icon"
    />
    <img
      v-else-if="icon && !icon.startsWith('mdi')"
      :src="icon"
      :style="{ width: '16px' }"
      alt=""
      class="gs-tag__icon"
    />
    <span :style="{ color: textColor, fontWeight: bold ? 'bold' : 'normal' }" class="gs-tag__label">
      {{ label }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.gs-tag {
  font-family: 'Cabin', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 8px;
  height: 25px;
  width: fit-content;
}

.gs-tag__icon {
  flex-shrink: 0;
}

.gs-tag__label {
  margin: 0;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
