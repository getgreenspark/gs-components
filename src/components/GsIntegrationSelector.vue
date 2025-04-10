<script lang="ts" setup>
import '@/assets/style/variables.css'
import GsTypography from './GsTypography.vue'
import GsTags from './GsTags.vue'
import { computed } from 'vue'

defineOptions({
  name: 'GsIntegrationSelector',
})

interface Props {
  modelValue?: boolean
  /**
   * The label text to display next to the icon.
   * Supports HTML content which will be safely rendered.
   * @example "Connect to <strong>Slack</strong>"
   */
  label?: string
  disabled?: boolean
  icon?: string
  tagLabel?: string
  errorMessages?: string | string[]
  hideDetails?: boolean
  density?: 'default' | 'comfortable' | 'compact'
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  label: 'Integration name',
  icon: '',
  tagLabel: undefined,
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
  set: (value: boolean) => emit('update:modelValue', value),
})

const handleChange = (value: boolean) => {
  emit('change', value)
}
</script>

<template>
  <div
    :class="{
      'gs-integration-selector--selected': model,
      'gs-integration-selector--disabled': disabled,
    }"
    class="gs-integration-selector"
    @click="!disabled && handleChange(!model)"
  >
    <div class="gs-integration-selector__content">
      <div class="gs-integration-selector__icon">
        <img v-if="icon" :src="icon" alt="" height="24" width="24" />
        <svg v-else fill="none" height="24" viewBox="0 0 24 24" width="24">
          <rect fill="#00B67A" height="24" width="24" />
        </svg>
      </div>
      <GsTypography variant="big-description">
        <slot name="label">{{ label }}</slot>
      </GsTypography>
    </div>
    <GsTags
      v-if="tagLabel"
      :label="tagLabel"
      background-color="ui-green"
      bold
      class="gs-integration-selector__tag"
    />
  </div>
</template>

<style scoped>
.gs-integration-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 290px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--grey-scale-40);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.gs-integration-selector:hover:not(.gs-integration-selector--disabled) {
  border-color: var(--ui-green);
}

.gs-integration-selector--selected {
  border-color: var(--ui-green);
}

.gs-integration-selector--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.gs-integration-selector__content {
  display: flex;
  align-items: center;
  gap: 24px;
}

.gs-integration-selector__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gs-integration-selector__icon img {
  object-fit: contain;
}

.gs-integration-selector__tag {
  position: absolute;
  top: 5px;
  right: 5px;
}

.gs-integration-selector :deep(a) {
  color: inherit;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
}
</style>
