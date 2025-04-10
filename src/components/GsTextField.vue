<script lang="ts" setup>
import { VTextField } from 'vuetify/components'

defineOptions({
  name: 'GsTextField',
})

interface Props {
  /**
   * The model value for the input
   */
  modelValue?: string
  /**
   * Label text for the input
   */
  label?: string
  /**
   * Placeholder text when input is empty
   */
  placeholder?: string
  /**
   * Description text to show below the input
   */
  description?: string
  /**
   * Whether the input has an error
   * @default false
   */
  error?: boolean
  /**
   * Error message to display
   */
  errorMessage?: string
  /**
   * Whether the input is in a success state
   * @default false
   */
  success?: boolean
  /**
   * Success message to display
   */
  successMessage?: string
  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
  error: false,
  success: false,
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <VTextField
    :disabled="disabled"
    :error="error"
    :error-messages="error ? errorMessage : undefined"
    :label="label"
    :messages="!error && !success ? description : success ? successMessage : undefined"
    :model-value="modelValue"
    :placeholder="placeholder"
    :success="success"
    class="gs-text-field"
    density="comfortable"
    variant="outlined"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<style scoped>
.gs-text-field :deep(.v-field__input) {
  min-height: 48px;
}
</style>
