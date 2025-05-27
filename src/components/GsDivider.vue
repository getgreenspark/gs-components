<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'GsDivider',
})

interface Props {
  color?: 'grey200' | 'grey250' | 'grey800' | 'green'
  length?: string
  thickness?: 'thin' | 'thick'
  margin?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'grey200',
  length: '100%',
  thickness: 'thick',
  margin: '0',
})

const dividerColor = computed(() => {
  switch (props.color) {
    case 'grey250':
      return 'var(--grey-scale-250)'
    case 'grey800':
      return 'var(--grey-scale-800)'
    case 'green':
      return 'var(--ui-green)'
    default:
      return 'var(--grey-scale-200)'
  }
})
</script>

<template>
  <hr
    :style="{
      borderColor: dividerColor,
      width: props.length,
      borderTopWidth: props.thickness === 'thick' ? '1px' : '0px',
      margin: `${props.margin} 0`,
    }"
    aria-orientation="horizontal"
    class="gs-divider"
    role="separator"
  />
</template>

<style lang="scss" scoped>
.gs-divider {
  height: 0;
  margin: 0;
  border-top-style: solid;
}
</style>
