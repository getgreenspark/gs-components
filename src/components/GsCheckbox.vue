<!-- GsCheckbox.vue -->
<script lang="ts" setup>
import { VCheckbox } from 'vuetify/components'
import { computed } from 'vue'

defineOptions({
  name: 'GsCheckbox',
})

type TextSize = 'description' | 'body'

interface Props {
  /**
   * The model value for the checkbox
   */
  modelValue?: boolean
  /**
   * The label text to display next to the checkbox.
   * Supports HTML content which will be safely rendered.
   * @example "I agree to the <a href='#'>Terms & Conditions</a>"
   */
  label?: string
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * The size of the label text
   * @default 'description'
   */
  textSize?: TextSize
  /**
   * Whether the label text should be bold
   * @default false
   */
  bold?: boolean
  errorMessages?: string | string[]
  hideDetails?: boolean
  density?: 'default' | 'comfortable' | 'compact'
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: '',
  disabled: false,
  textSize: 'description',
  bold: false,
  errorMessages: '',
  hideDetails: false,
  density: 'default',
  color: 'primary',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div :class="{ 'gs-checkbox--disabled': disabled }" class="gs-checkbox">
    <v-checkbox
      v-model="model"
      :color="color"
      :density="density"
      :disabled="disabled"
      :error-messages="errorMessages"
      :hide-details="hideDetails"
      :label="label"
      :ripple="false"
    >
      <template v-if="label" #label>
        <slot name="label">{{ label }}</slot>
      </template>
    </v-checkbox>
  </div>
</template>

<style lang="scss" scoped>
.gs-checkbox {
  width: 100%;

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  :deep(.v-checkbox) {
    width: 100%;
  }

  :deep(.v-checkbox__input) {
    margin-right: 8px;
  }

  :deep(.v-checkbox__label) {
    font-size: 14px;
    line-height: 22px;
    color: var(--main-black);
  }
}
</style>
