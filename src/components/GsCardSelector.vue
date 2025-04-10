<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import GsTypography from './GsTypography.vue'
import GsRadioButton from './GsRadioButton.vue'

defineOptions({
  name: 'GsCardSelector'
})

interface Props {
  text: string
  selected?: boolean
  value: string | number
  name: string
  disabled?: boolean
  imageSrc?: string
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  disabled: false,
  imageSrc: undefined,
  imageAlt: ''
})

const emit = defineEmits<{
  (e: 'update:selected', value: boolean): void
  (e: 'change', value: string | number): void
}>()

const modelValue = ref<string | number | undefined>(undefined)

watch(() => props.selected, (newValue) => {
  modelValue.value = newValue ? props.value : undefined
}, { immediate: true })

const cardClasses = computed(() => [
  'gs-card-selector',
  {
    'gs-card-selector--selected': modelValue.value === props.value,
    'gs-card-selector--disabled': props.disabled
  }
])

const handleChange = (value: string | number | undefined) => {
  if (!props.disabled) {
    const isSelected = value === props.value
    emit('update:selected', isSelected)
    if (isSelected) {
      emit('change', props.value)
    }
  }
}

const handleCardClick = (event: MouseEvent) => {
  // Prevent click event if clicking on the radio button itself
  if (event.target instanceof Element && event.target.closest('.gs-radio-button')) {
    return
  }

  if (!props.disabled && !props.selected) {
    modelValue.value = props.value
    handleChange(props.value)
  }
}
</script>

<template>
  <article
    :class="cardClasses"
    role="article"
    @click="handleCardClick"
  >
    <div class="gs-card-selector__content">
      <div class="gs-card-selector__radio">
        <GsRadioButton
          :name="name"
          :value="value"
          :model-value="modelValue"
          :disabled="disabled"
          @update:model-value="handleChange"
          class="gs-radio-button"
        />
      </div>
      <GsTypography variant="body" class="gs-card-selector__text">
        {{ text }}
      </GsTypography>
    </div>
    <div class="gs-card-selector__image" :class="{ 'gs-card-selector__image--placeholder': !imageSrc }">
      <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt">
      <div v-else class="gs-card-selector__pattern"></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.gs-card-selector {
  border-radius: 12px;
  border: 1px solid var(--grey-scale-250);
  padding: 16px;
  transition: all 0.2s ease;
  cursor: pointer;
  background-color: var(--grey-scale-10);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 306px;
  min-width: 175px;

  &:hover:not(.gs-card-selector--disabled) {
    border-color: var(--main-light-green);
    background-color: var(--main-light-green-20);
  }

  &--selected {
    border-color: var(--main-light-green);
    background-color: var(--main-light-green-20);
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__content {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    margin-bottom: 16px;
    margin-left: -10px;
  }

  &__radio {
    flex: 0 0 auto;

    :deep(.v-selection-control) {
      flex: 0 0 auto;
    }
  }

  &__text {
    color: var(--grey-scale-900);
    flex: 1;
  }

  &__image {
    position: relative;
    width: 100%;
    height: 120px;
    border-radius: 4px;
    overflow: hidden;
    background-color: var(--grey-scale-50);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &--placeholder {
      background-color: var(--grey-scale-50);
    }
  }

  &__pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(45deg, var(--grey-scale-100) 25%, transparent 25%),
      linear-gradient(-45deg, var(--grey-scale-100) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--grey-scale-100) 75%),
      linear-gradient(-45deg, transparent 75%, var(--grey-scale-100) 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    opacity: 0.5;
  }
}
</style>
