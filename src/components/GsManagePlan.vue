<template>
  <div :class="{ 'gs-manage-plan--disabled': disabled }" class="gs-manage-plan">
    <div class="gs-manage-plan__content">
      <img :alt="title" :src="icon" class="gs-manage-plan__icon" />
      <div class="gs-manage-plan__text">
        <GsTypography bold tag="h2" variant="title-1">
          {{ title }}
        </GsTypography>
        <GsTypography variant="big-description">
          <slot name="description">{{ description }}</slot>
        </GsTypography>
      </div>
    </div>
    <GsButton
      :full-width="isSmallScreen"
      :icon="buttonIcon"
      type="success"
      @click="handleButtonClick"
    >
      {{ buttonLabel }}
    </GsButton>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import GsButton from './GsButton.vue'
import GsTypography from './GsTypography.vue'

defineOptions({
  name: 'GsManagePlan',
})

interface Props {
  icon: string
  title: string
  description?: string
  buttonLabel?: string
  buttonIcon?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  buttonLabel: 'Manage',
  buttonIcon: 'mdi-cog',
  disabled: false,
})

const emit = defineEmits<{
  (e: 'button-click'): void
}>()

const isSmallScreen = ref(false)

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const handleButtonClick = () => {
  emit('button-click')
}
</script>

<style lang="scss" scoped>
.gs-manage-plan {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--main-white);
  border: 1px solid var(--gray-light-CD);
  gap: 16px;

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 767px) {
    padding: 16px;
    flex-direction: column;
    align-items: stretch;

    :deep(.gs-button) {
      margin-top: 8px;
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 16px;
    align-items: center;
  }
}

.gs-manage-plan__content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.gs-manage-plan__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.gs-manage-plan__text {
  flex: 1;
  min-width: 0;

  .gs-typography {
    margin-bottom: 4px;
  }
}
</style>
