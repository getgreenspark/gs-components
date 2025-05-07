<template>
  <article class="gs-manage-plan">
    <div class="image-container">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="plan-image"
      />
      <div v-if="showTag" class="trial-tag">
        <GsTags
          :label="tagText"
          backgroundColor="ui-black"
          fontColor="ui-white"
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
      >
        <div v-html="sanitizedDescription"></div>
      </GsTypography>
      <GsButton
        type="primary"
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
import { computed } from 'vue'

defineOptions({
  name: 'GsManagePlanSelector'
})

const props = defineProps({
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
  showTag: {
    type: Boolean,
    default: false
  },
  tagText: {
    type: String,
    default: 'Free trial'
  }
})

defineEmits(['action'])

// Sanitize HTML by only allowing safe tags and attributes
const sanitizedDescription = computed(() => {
  const div = document.createElement('div')
  div.innerHTML = props.description
  
  // Only allow specific tags and attributes
  const allowedTags = ['a', 'strong', 'em', 'b', 'i', 'span', 'br']
  const allowedAttributes = ['href', 'target', 'class', 'style']
  
  // Remove any tags that aren't in the allowed list
  const elements = div.getElementsByTagName('*')
  for (let i = elements.length - 1; i >= 0; i--) {
    if (!allowedTags.includes(elements[i].tagName.toLowerCase())) {
      elements[i].parentNode?.replaceChild(
        document.createTextNode(elements[i].textContent || ''),
        elements[i]
      )
    } else {
      // Remove any attributes that aren't in the allowed list
      const attributes = elements[i].attributes
      for (let j = attributes.length - 1; j >= 0; j--) {
        if (!allowedAttributes.includes(attributes[j].name.toLowerCase())) {
          elements[i].removeAttribute(attributes[j].name)
        }
      }
    }
  }
  
  return div.innerHTML
})
</script>

<style scoped>
.gs-manage-plan {
  display: flex;
  width: 286px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: var(--ui-white);
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

.plan-description :deep(a) {
  color: var(--ui-dark-blue);
  text-decoration: underline;
  
  &:hover {
    opacity: 0.8;
  }
}

.plan-description :deep(strong),
.plan-description :deep(b) {
  font-weight: bold;
}

.plan-description :deep(em),
.plan-description :deep(i) {
  font-style: italic;
}

.plan-description :deep(br) {
  display: block;
  content: '';
  margin-top: 8px;
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
