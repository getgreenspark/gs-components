<script lang="ts" setup>
import { computed } from 'vue'
import { VColorPicker } from 'vuetify/components'

interface Props {
  label?: string
  placeholder?: string
  disabled?: boolean
  colorModes?: ColorModes[]
  clearable?: boolean
}

type ColorModes = 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hexa'

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select a color',
  clearable: false,
})

const model = defineModel<string>({ default: '' })

const allowedColorModes = computed<ColorModes[]>(() =>
  props.colorModes?.length ? props.colorModes : ['hex'],
)

const colorPickerClasses = computed(() => [
  'gs-color-picker',
  {
    'gs-color-picker-disabled': props.disabled,
  },
])

const handleClear = () => {
  model.value = ''
}

const handleColorChange = (value: string) => {
  model.value = value
}
</script>

<template>
  <v-menu :close-on-content-click="false" close-on-back location="top" offset="15">
    <template v-slot:activator="{ props: menuProps }">
      <div
        :aria-label="`Open color picker. Current color: ${model || 'white'}`"
        :class="colorPickerClasses"
        role="button"
        tabindex="0"
        v-bind="menuProps"
        @click.stop
      >
        <label v-if="label" class="gs-color-picker-label">{{ label }}</label>
        <v-text-field
          v-model="model"
          :aria-label="label || placeholder"
          :disabled="disabled"
          :placeholder="placeholder"
          flat
          readonly
          variant="outlined"
        >
          <template v-slot:prepend>
            <div :style="{ backgroundColor: model || '#FFFFFF' }" class="gs-color-picker-swatch">
              <span class="sr-only">{{ model || 'white' }}</span>
            </div>
          </template>
          <template v-if="clearable && model && !disabled" v-slot:append>
            <v-icon
              aria-label="Clear color selection"
              icon="mdi-close"
              role="button"
              size="small"
              tabindex="0"
              @click.stop="handleClear"
            />
          </template>
        </v-text-field>
      </div>
    </template>

    <v-card>
      <v-card-text class="pa-0">
        <v-color-picker
          v-model="model"
          :aria-label="`Color picker for ${label || 'color selection'}`"
          :modes="allowedColorModes"
          @update:model-value="handleColorChange"
        />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style lang="scss" scoped>
.gs-color-picker {
  min-width: 180px;
  width: 100%;
  cursor: pointer;

  &.gs-color-picker-disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  :deep(.v-field) {
    border: 0;
  }

  :deep(.v-field__outline) {
    --v-field-border-width: 0px;
  }

  :deep(.v-field__input) {
    cursor: pointer;
    padding: 0;
  }

  :deep(.v-input) {
    border: 1px solid var(--gray-light-CD);
    border-radius: 4px;
    transition: border-color 0.2s ease;

    &:hover,
    &:focus-within {
      border-color: var(--ui-green);
    }
  }

  :deep(.v-input__prepend) {
    margin-right: 10px;
    padding-left: 16px;
  }

  :deep(.v-input__details) {
    display: none;
  }

  :deep(.v-input--horizontal .v-input__append) {
    margin-inline-end: 16px;
  }
}

.gs-color-picker-label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
}

.gs-color-picker-swatch {
  cursor: pointer;
  height: 20px;
  width: 20px;
  border: 1px solid var(--gray-light-CD);
  outline: none;
  border-radius: 2px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--ui-green);
    outline-offset: 2px;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
