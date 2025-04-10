<template>
  <section class="gs-floating-action-menu">
    <div class="gs-floating-action-menu__content">
      <GsTypography
        :variant="isMobile ? 'description' : 'big-description'"
        bold
        class="gs-floating-action-menu__title"
        tag="h2"
      >
        {{ title }}
      </GsTypography>
      <GsTypography
        v-if="!isMobile"
        class="gs-floating-action-menu__description"
        tag="p"
        variant="description"
      >
        {{ description }}
      </GsTypography>
    </div>

    <div class="gs-floating-action-menu__actions">
      <GsButton fullWidth type="secondary" @click="$emit('primary-action')">
        {{ primaryButtonText }}
      </GsButton>
      <GsButton fullWidth type="primary" @click="$emit('secondary-action')">
        {{ secondaryButtonText }}
      </GsButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import GsTypography from './GsTypography.vue'
import GsButton from './GsButton.vue'

defineOptions({
  name: 'GsFloatingActionMenu',
})

interface Props {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Ready to take action and support this project?',
  description: 'Add a tailored impact or create an automation to help drive change!',
  primaryButtonText: 'Tailored impact',
  secondaryButtonText: 'Add automation',
})

defineEmits(['primary-action', 'secondary-action'])

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 640
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.gs-floating-action-menu {
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  background-color: var(--grey-scale-10);
  box-shadow: 0 -4px 5px 0px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  width: 100%;
}

.gs-floating-action-menu__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
}

.gs-floating-action-menu__title,
.gs-floating-action-menu__description {
  color: var(--ui-black);
  margin: 0;
}

.gs-floating-action-menu__description {
  text-align: left;
}

.gs-floating-action-menu__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
}

@media (max-width: 991px) {
  .gs-floating-action-menu {
    flex-direction: column;
  }

  .gs-floating-action-menu__actions {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .gs-floating-action-menu__actions {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .gs-floating-action-menu__actions {
    flex-direction: column;
  }

  .gs-floating-action-menu {
    align-items: unset;
  }

  .gs-floating-action-menu {
    flex-direction: column;
  }

  .gs-floating-action-menu__actions :deep(.gs-button) {
    width: 100%;
  }
}

@media (max-width: 390px) {
  .gs-floating-action-menu__content {
    width: 100%;
  }

  .gs-floating-action-menu__title {
    width: 100%;
    text-align: center;
  }
}
</style>
