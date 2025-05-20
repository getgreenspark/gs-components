<template>
  <v-text-field
    v-bind="$attrs"
    variant="outlined"
    color="green"
    flat
    class="gs-input"
    :hide-details="hideDetails"
    :label="label"
    :model-value="modelValue"
    @update:model-value="input"
    @blur="blur"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { RulesMixin } from '@/helpers/RulesMixin'

export default defineComponent({
  name: 'GsInput',
  mixins: [RulesMixin],
  emits: ['update:modelValue', 'blur', 'update:error'],
  methods: {
    input(v: string): void {
      this.$emit('update:modelValue', v)
    },
    blur(e: MouseEvent): void {
      this.$emit('blur', e)
    },
    updateError(e: KeyboardEvent): void {
      this.$emit('update:error', e)
    },
  },
  props: {
    modelValue: {
      type: [String, Number],
    },
    hideDetails: {
      default: true,
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
.gs-input {
  padding: 4px 0px 0px;

  :deep(.v-input__details) {
    padding: 8px 0px 0;

    .v-messages {
      font-size: 14px;
      font-weight: 700;
      line-height: normal;
      font-family: 'Cabin', sans-serif;
      color: var(--ui-black);
      opacity: 1;
    }
  }
}
</style>
