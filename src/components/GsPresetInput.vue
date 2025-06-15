<script lang="ts" setup>
import GsActionCard from './GsActionCard.vue'
import GsInput from './GsInput.vue'
import GsTooltip from './GsTooltip.vue'
import { computed, ref, watch } from 'vue'

interface Preset {
  label: string
  value: number
  info?: string
}

defineOptions({ name: 'GsPresetInput' })

const props = defineProps<{
  presets: Preset[]
  modelValue: number
  prefix?: string
  postfix?: string
  inputLabel?: string
  inputPlaceholder?: string
  inputRules?: ((...args: unknown[]) => unknown)[]
  inputHideDetails?: boolean
}>()

const selectedIndex = computed(() => {
  return props.presets.findIndex((preset) => preset.value === props.modelValue)
})

const isCustom = ref<boolean>(false)

watch(
  () => props.modelValue,
  (newVal) => {
    // If the value is not in the presets, set isCustom to true
    isCustom.value = props.presets.findIndex((preset) => preset.value === newVal) === -1
  },
  { immediate: true },
)

const emit = defineEmits<{
  (e: 'update:model-value', value: number): void
}>()

function onCustomInput(val: string | number) {
  const num = typeof val === 'number' ? val : Number(val)
  emit('update:model-value', num)
}

function selectPreset(idx: number) {
  isCustom.value = false
  emit('update:model-value', props.presets[idx].value)
}

function setCustomValue() {
  isCustom.value = true
  emit('update:model-value', 0)
}
</script>

<template>
  <div class="gs-preset-input">
    <div class="gs-preset-input__cards" role="radiogroup">
      <GsActionCard
        v-for="(preset, idx) in props.presets"
        :key="preset.value"
        :aria-label="preset.label"
        :selected="selectedIndex === idx"
        class="gs-preset-input__card"
        full-width
        padding="16px 24px"
        role="radio"
        @click="() => selectPreset(idx)"
      >
        <div class="gs-preset-input__card-content">
          <div class="gs-preset-input__card-label">
            {{ preset.label }}
            <GsTooltip
              v-if="preset.info"
              :text="preset.info"
              class="gs-preset-input__info"
            ></GsTooltip>
          </div>
          <div class="gs-preset-input__card-value">
            {{ props.prefix || '' }}{{ preset.value }}{{ props.postfix || '' }}
          </div>
        </div>
      </GsActionCard>
      <GsActionCard
        :selected="isCustom"
        aria-label="Set your own"
        class="gs-preset-input__card"
        padding="16px 24px"
        @click="setCustomValue"
      >
        <div class="gs-preset-input__card-content gs-preset-input__card-content--custom">
          <div class="gs-preset-input__card-label gs-preset-input__card-label--custom">
            Set your own
          </div>
        </div>
      </GsActionCard>
    </div>
    <div v-if="isCustom" class="gs-preset-input__input-wrapper">
      <GsInput
        :hide-details="props.inputHideDetails ?? true"
        :label="props.inputLabel || ''"
        :model-value="props.modelValue"
        :placeholder="props.inputPlaceholder"
        :rules="props.inputRules"
        :type="'number'"
        @update:model-value="onCustomInput"
      >
        <template #prepend-inner>
          <span v-if="props.prefix" class="gs-preset-input__input-prefix">{{ props.prefix }}</span>
        </template>
        <template #append-inner>
          <span v-if="props.postfix" class="gs-preset-input__input-postfix">{{
            props.postfix
          }}</span>
        </template>
      </GsInput>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gs-preset-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__cards {
    display: flex;
    gap: 24px;
    width: 100%;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 12px;
    }
  }

  &__card {
    flex: 1 1 0;
    min-width: 160px;
    max-width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-family: 'Cabin', sans-serif;
    font-size: 18px;
    font-weight: 600;

    &--custom {
      align-items: center;
      width: 100%;
      justify-content: center;
    }
  }

  &__card-label {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;

    &--custom {
      justify-content: center;
      width: 100%;
    }
  }

  &__info {
    margin-left: 6px;
    cursor: pointer;
  }

  &__card-value {
    font-size: 24px;
    font-weight: 700;
  }

  &__input-wrapper {
    margin-top: 8px;
    width: 100%;
  }

  &__input-prefix {
    font-size: 20px;
    margin-right: 4px;
  }

  &__input-postfix {
    font-size: 20px;
    margin-left: 4px;
  }
}
</style>
