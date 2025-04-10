<!-- GsRadioButton.vue -->
<script setup lang="ts">
import { VRadio } from 'vuetify/components'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsRadioButton'
})

interface Props {
  /**
   * The model value for the radio button
   */
  modelValue?: any
  /**
   * The value of this radio button
   */
  value?: any
  /**
   * The label text for the radio button
   */
  label?: string
  /**
   * Whether the radio button is disabled
   * @default false
   */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  value: undefined,
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: any]
}>()
</script>

<template>
  <VRadio
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :value="value"
    :disabled="disabled"
    class="gs-radio"
  >
    <template #label>
      <GsTypography variant="description">{{ label }}</GsTypography>
    </template>
  </VRadio>
</template>

<style scoped>
.gs-radio {
  cursor: pointer;
}
</style> 