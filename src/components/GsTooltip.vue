<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  text: string
  variant?: 'light' | 'dark'
  placement?: 'top' | 'bottom' | 'left' | 'right'
  iconSize?: 16 | 20 | 24
}>()

const variantClass = computed(() =>
  props.variant === 'light' ? 'gs-tooltip--light' : 'gs-tooltip--dark',
)
const tooltipLocation = computed(() => props.placement || 'top')
</script>

<template>
  <div class="gs-tooltip">
    <v-tooltip
      :class="[variantClass]"
      :interactive="true"
      :location="tooltipLocation"
      :open-on-click="true"
      close-delay="100"
      height="auto"
      max-width="250px"
      open-delay="100"
      width="auto"
      z-index="2"
    >
      <template #activator="{ props: tooltipProps }">
        <div class="gs-tooltip__icon-wrapper" v-bind="tooltipProps">
          <v-icon
            :icon="'mdi-information-outline'"
            :size="iconSize || 16"
            class="gs-tooltip__icon"
          />
        </div>
      </template>
      <div class="gs-tooltip__popup">{{ props.text }}</div>
    </v-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.gs-tooltip__popup {
  font-family: 'Cabin', sans-serif !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  padding: 4px 8px !important;
}

.gs-tooltip {
  &--dark {
    :deep(.v-overlay__content),
    :deep(.v-tooltip__arrow) {
      background: var(--ui-black) !important;
      color: var(--gray-light-FF) !important;
      padding: 0 !important;
      box-shadow: 0 3px 6px -3px rgba(23, 24, 24, 0.08);
    }
  }

  &--light {
    :deep(.v-overlay__content),
    :deep(.v-tooltip__arrow) {
      background: var(--gray-light-FF) !important;
      color: var(--ui-black) !important;
      padding: 0 !important;
      box-shadow: 0 3px 6px -3px rgba(23, 24, 24, 0.08);
    }
  }
}
</style>
