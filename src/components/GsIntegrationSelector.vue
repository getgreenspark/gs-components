<!-- GsIntegrationSelector.vue -->
<script setup lang="ts">
import '@/assets/style/colorVariables.css'
import GsTypography from './GsTypography.vue'
import GsTags from './GsTags.vue'

defineOptions({
  name: 'GsIntegrationSelector'
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
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  label: 'Integration name',
  icon: '',
  tagLabel: undefined
})

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <div
    class="gs-integration-selector"
    :class="{
      'gs-integration-selector--selected': modelValue,
      'gs-integration-selector--disabled': disabled
    }"
    @click="!disabled && $emit('update:modelValue', !modelValue)"
  >
    <div class="gs-integration-selector__content">
      <div class="gs-integration-selector__icon">
        <img v-if="icon" :src="icon" alt="" width="24" height="24" />
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#00B67A" />
        </svg>
      </div>
      <GsTypography variant="big-description" v-html="label" />
    </div>
    <GsTags
      v-if="tagLabel"
      :label="tagLabel"
      background-color="main-green"
      bold="true"
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
  border-color: var(--main-green);
}

.gs-integration-selector--selected {
  border-color: var(--main-green);
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