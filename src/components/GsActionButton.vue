<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import { VBtn, VMenu, VList, VListItem, VIcon } from 'vuetify/components'

export interface ActionButtonItem {
  icon: string
  title: string
  text: string
  to?: string
}

type ActionButtonProps = {
  label?: string
  items?: ActionButtonItem[]
  disabled?: boolean
  fullWidth?: boolean
  width?: string
}

const props = withDefaults(defineProps<ActionButtonProps>(), {
  label: 'Actions',
  items: () => [],
})

const emit = defineEmits<{
  (e: 'select', item: ActionButtonItem, index: number): void
}>()

const router = getCurrentInstance()?.appContext.config.globalProperties.$router

function onItemClick(item: ActionButtonItem, index: number) {
  if (item.to && router) {
    router.push(item.to)
  }
  emit('select', item, index)
}
</script>

<template>
  <v-menu :offset="7" location="bottom" :close-on-content-click="true">
    <template #activator="{ props: menuProps }">
      <v-btn
        v-bind="menuProps"
        :class="['gs-action-button', { 'gs-action-button--full-width': props.fullWidth }]"
        :style="props.width ? { width: props.width } : undefined"
        :disabled="props.disabled"
      >
        <template #prepend>
          <v-icon size="20">mdi-plus</v-icon>
        </template>
        <span class="gs-action-button__label">{{ props.label }}</span>
        <template #append>
          <v-icon size="20">mdi-chevron-down</v-icon>
        </template>
      </v-btn>
    </template>

    <v-list class="gs-action-button__menu" :style="props.width ? { width: props.width } : undefined">
      <v-list-item
        v-for="(item, index) in props.items"
        :key="index"
        class="gs-action-button__item"
        @click="onItemClick(item, index)"
      >
        <div class="gs-action-button__item-content">
          <v-icon class="gs-action-button__item-icon" size="22">
            {{ item.icon }}
          </v-icon>
          <div class="gs-action-button__item-text">
            <span class="gs-action-button__item-title">{{ item.title }}</span>
            <span class="gs-action-button__item-description">{{ item.text }}</span>
          </div>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style lang="scss" scoped>
.gs-action-button {
  height: 41px !important;
  border-radius: 8px !important;
  background-color: #212121 !important;
  color: #f9f9f9 !important;
  font-family: 'Cabin', sans-serif;
  font-size: 20px !important;
  text-transform: none;
  letter-spacing: normal;
  padding: 0 16px !important;

  &--full-width {
    width: 100% !important;
  }

  &__label {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
  }
}
</style>

<style lang="scss">
.gs-action-button__menu {
  width: 210px;
  background-color: #fff !important;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15) !important;
  border-radius: 8px !important;
  padding: 0 !important;

  .gs-action-button__item {
    display: flex;
    padding: 14px 12px !important;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    min-height: unset !important;
    cursor: pointer;

    &:hover {
      background-color: #dbdbdb;
    }

    .v-list-item__content {
      padding: 0;
    }
  }

  .gs-action-button__item-content {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .gs-action-button__item-icon {
    flex-shrink: 0;
    color: #212121;
  }

  .gs-action-button__item-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .gs-action-button__item-title {
    font-family: 'Cabin', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
    color: #212121;
  }

  .gs-action-button__item-description {
    font-family: 'Cabin', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    color: #212121;
  }
}
</style>
