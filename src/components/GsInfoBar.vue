<script setup lang="ts">
import { computed } from 'vue'
import { VIcon } from 'vuetify/components'

type InfoBarType = 'default' | 'success' | 'error' | 'warning'

type InfoBarProps = {
  type?: InfoBarType
  title?: string
  message: string
  fullWidth?: boolean
}

const props = withDefaults(defineProps<InfoBarProps>(), {
  type: 'default',
})

const infoBarClasses = computed(() => [
  'gs-info-bar',
  `gs-${props.type}`,
  {
    'full-width': props.fullWidth,
  },
])
</script>

<template>
  <div :class="infoBarClasses" :style="{ width: props.fullWidth ? '100%' : 'fit-content' }" role="alert">
    <div style="display: flex; gap: 12px; align-items: center">
      <div style="display: flex; align-self: flex-start">
        <v-icon icon="mdi-information-outline" class="icon"></v-icon>
      </div>
      <div style="display: flex; flex-direction: column">
        <span v-if="props.title" class="title" v-html="props.title" />
        <span class="message" v-html="props.message" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gs-info-bar {
  height: fit-content;
  font-size: 16px;
  font-weight: normal;
  font-family: 'Cabin', sans-serif;
  line-height: normal;
  padding: 4px 8px;

  .title {
    font-weight: 700;
  }

  &.gs-success {
    background-color: var(--ui-opaque-green);

    .icon {
      color: var(--ui-green);
    }
  }

  &.gs-default {
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
