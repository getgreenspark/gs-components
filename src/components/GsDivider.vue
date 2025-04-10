<!-- GsDivider.vue -->
<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'GsDivider',
})

interface Props {
  /**
   * The color variant of the divider
   * @default 'grey200'
   */
  color?: 'grey200' | 'grey250' | 'grey800'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'grey200',
})

const dividerColor = computed(() => {
  switch (props.color) {
    case 'grey250':
      return 'var(--grey-scale-250)'
    case 'grey800':
      return 'var(--grey-scale-800)'
    default:
      return 'var(--grey-scale-200)'
  }
})
</script>

<template>
  <hr :style="{ borderColor: dividerColor }" class="gs-divider" />
</template>

<style scoped>
.gs-divider {
  width: 100%;
  height: 0;
  margin: 0;
  border: none;
  border-top: 0.5px solid;
}
</style>
