<script setup lang="ts">
import { computed } from 'vue'
import { VIcon } from 'vuetify/components'
import GsTypography from './GsTypography.vue'

type AlertBarType = 'info' | 'success' | 'error' | 'warning'

interface Props {
  /**
   * The type of alert to display
   */
  type?: AlertBarType
  /**
   * Optional title for the alert.
   * Supports HTML content which will be safely rendered.
   * @example "<strong>Important:</strong> Please note"
   */
  title?: string
  /**
   * The main message to display.
   * Supports HTML content which will be safely rendered.
   * @example "Visit our <a href='#'>documentation</a> for more info"
   */
  message: string
  /**
   * Makes the alert take the full width of its container
   */
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
})

const alertBarClasses = computed(() => [
  'gs-alert-bar',
  `gs-${props.type}`,
  {
    'full-width': props.fullWidth,
  },
])
</script>

<template>
  <div :class="alertBarClasses" role="alert">
    <div class="d-flex">
      <v-icon icon="mdi-information-outline" class="icon me-3" size="16" />
      <div class="d-flex flex-column">
        <GsTypography v-if="title" variant="description" bold :class="'title'" v-html="title" />
        <GsTypography variant="description" :class="'message'" v-html="message" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gs-alert-bar {
  font-family: 'Cabin', sans-serif;
  font-size: 16px;
  line-height: 19px;
  height: fit-content;
  width: fit-content;
  padding: 4px 8px;

  &.full-width {
    width: 100%;
  }

  &.gs-success {
    background-color: var(--ui-opaque-green);

    .icon {
      color: var(--ui-green);
    }
  }

  &.gs-info {
    background-color: var(--gray-light-CC);
    border: 1px solid var(--gray-light-A9);
  }

  &.gs-warning {
    border: 1px solid var(--red);
    background: var(--ui-red-20);

    .icon {
      color: var(--red);
    }
  }

  &.gs-error {
    color: var(--ui-white);
    background: var(--ui-red);

    .icon {
      color: var(--ui-white);
    }
  }
}
</style>
