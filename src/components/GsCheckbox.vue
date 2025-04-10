<!-- GsCheckbox.vue -->
<script setup lang="ts">
import { VCheckbox } from 'vuetify/components'
import GsTypography from './GsTypography.vue'
import { computed } from 'vue'

defineOptions({
  name: 'GsCheckbox'
})

type TextSize = 'description' | 'body'

interface Props {
  /**
   * The model value for the checkbox
   */
  modelValue: boolean
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
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  textSize: 'description',
  bold: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isChecked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div 
    class="gs-checkbox-wrapper"
    @click="!disabled && (isChecked = !isChecked)"
  >
    <VCheckbox
      v-model="isChecked"
      :disabled="disabled"
      class="gs-checkbox"
      density="compact"
      hide-details
    >
      <template v-if="label" #label>
        <GsTypography
          :variant="textSize"
          :bold="bold"
          v-html="label"
        />
      </template>
    </VCheckbox>
  </div>
</template>

<style lang="scss" scoped>
.gs-checkbox-wrapper {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  
  &:has(.v-checkbox--disabled) {
    cursor: not-allowed;
  }

  :deep(a) {
    color: inherit;
    text-decoration: underline;
    
    &:hover {
      opacity: 0.8;
    }
  }
}

.gs-checkbox {
  :deep(.v-selection-control) {
    min-height: unset;
  }

  :deep(.v-selection-control__wrapper) {
    margin-right: 4px;
  }

  :deep(.v-selection-control--dirty .v-selection-control__input > .v-icon) {
    color: var(--main-black);
    background-color: transparent;
  }

  :deep(.v-checkbox-btn .v-btn.v-btn--icon.v-btn--density-compact) {
    width: 20px;
    height: 20px;
  }

  :deep(.v-selection-control__input) {
    .v-btn {
      border: 2px solid var(--main-black);
      background-color: transparent !important;
      color: var(--main-black) !important;

      &::before {
        display: none;
      }
    }

    .v-btn--variant-plain {
      border: 2px solid var(--main-black) !important;
      opacity: 1;
    }
  }

  :deep(.v-selection-control-group) {
    .v-selection-control__input {
      .v-btn {
        border-color: var(--main-black) !important;
      }
    }
  }
}
</style> 