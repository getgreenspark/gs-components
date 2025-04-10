<template>
  <article class="gs-manage-plan">
    <div class="image-container">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="plan-image"
      />
      <div v-if="hasTrial" class="trial-tag">
        <GsTags
          :label="tagText"
          backgroundColor="main-black"
          fontColor="main-white"
          bold
          fontSize="caption"
        />
      </div>
    </div>
    <div class="content-wrapper">
      <GsTypography
        variant="title-2"
        bold
        class="plan-title"
      >
        {{ title }}
      </GsTypography>
      <GsTypography
        variant="body"
        class="plan-description"
        v-html="description"
      />
      <GsButton
        :icon="buttonIcon"
        full-width
        @click="$emit('action')"
      >
        {{ buttonText }}
      </GsButton>
    </div>
  </article>
</template>

<script setup lang="ts">
import GsTypography from './GsTypography.vue'
import GsButton from './GsButton.vue'
import GsTags from './GsTags.vue'

defineOptions({
  name: 'GsManagePlan'
})

defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    /**
     * The description text to display below the title.
     * Supports HTML content which will be safely rendered.
     * @example "Get started with our <a href='#'>premium features</a>"
     */
  },
  buttonText: {
    type: String,
    default: 'Manage'
  },
  buttonIcon: {
    type: String,
    default: ''
  },
  hasTrial: {
    type: Boolean,
    default: false
  },
  tagText: {
    type: String,
    default: 'Free trial'
  }
})

defineEmits(['action'])
</script>

<style scoped>
.gs-manage-plan {
  display: flex;
  width: 286px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: var(--main-white);
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 100%;
  height: 140px;
}

.plan-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trial-tag {
  position: absolute;
  top: 8px;
  left: 8px;
}

.content-wrapper {
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  border: 1px solid var(--grey-scale-60);
  border-top: none;
  border-radius: 0 0 8px 8px;
}

.plan-title {
  margin: 0;
  width: 100%;
}

.plan-description {
  margin: 0;
  width: 100%;
}

:deep(a) {
  color: inherit;
  text-decoration: underline;
  
  &:hover {
    opacity: 0.8;
  }
}

@media (max-width: 991px) {
  .gs-manage-plan {
    width: 100%;
    max-width: 286px;
  }
}

@media (max-width: 640px) {
  .gs-manage-plan {
    width: 100%;
    max-width: none;
  }

  .content-wrapper {
    padding: 12px;
  }
}
</style> 