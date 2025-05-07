<script lang="ts" setup>
import { computed } from 'vue'
import { VIcon } from 'vuetify/components'

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
      <div class="gs-alert-bar__content">
        <div class="gs-alert-bar__icon">
          <v-icon class="icon me-3" icon="mdi-information-outline" size="16" />
        </div>
        <div class="d-flex flex-column">
          <span v-if="title" class="title" v-html="title" />
          <span class="message" v-html="message" />
        </div>
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
    :deep(.gs-typography) {
      color: var(--ui-white);
    }

    color: var(--ui-white);
    background: var(--ui-red);

    .icon {
      color: var(--ui-white);
    }
  }
}

.gs-alert-bar__content {
  display: flex;
  gap: 0px;
  flex: 1;
}

.gs-alert-bar__icon {
  display: flex;
  align-items: flex-start;
  margin-top: 2px;
}

.gs-alert-bar__text {
  flex: 1;
  min-width: 0;

  .title {
    margin-bottom: 4px;
  }

  .message {
    opacity: 0.8;
  }
}
</style>
