<script lang="ts" setup>
import { VRadio } from 'vuetify/components'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsRadioButton',
})

interface Props {
  /**
   * The model value for the radio button
   */
  modelValue?: string | number | undefined
  /**
   * The value of this radio button
   */
  value?: string | number | undefined
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
  disabled: false,
})

defineEmits<{
  'update:modelValue': [value: string | number | undefined]
}>()
</script>

<template>
  <VRadio
    :disabled="disabled"
    :model-value="modelValue"
    :value="value"
    class="gs-radio"
    @update:model-value="$emit('update:modelValue', $event)"
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
