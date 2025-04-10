import type { Meta, StoryObj } from '@storybook/vue3'
import GsProjectCardSelector from '@/components/GsProjectCardSelector.vue'

const meta: Meta<typeof GsProjectCardSelector> = {
  title: 'Components/Selectors/ProjectCardSelector',
  component: GsProjectCardSelector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Project Card Selector

A versatile card component for displaying project information with various layouts and styles.

### Global Usage

\`\`\`vue
<template>
  <gs-project-card-selector
    title="Project Title"
    subtitle="Project Subtitle"
    description="Project description text goes here."
    location="Location, Country"
    image-url="/path/to/image.jpg"
    image-alt="Project image"
    tag-text="Impact created"
    variant="horizontal"
    read-more-variant="text"
    :enable-hover="true"
    @read-more="handleReadMore"
  />
</template>

<script setup lang="ts">
const handleReadMore = () => {
  // Handle read more action
}
</script>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'compact'],
    },
    readMoreVariant: {
      control: 'select',
      options: ['text', 'chevron'],
    },
    enableHover: {
      control: 'boolean',
      description: 'Enable hover effects (shadow and border)',
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    location: { control: 'text' },
    imageUrl: { control: 'text' },
    imageAlt: { control: 'text' },
    locationIcon: { control: 'text' },
    cardBackgroundColor: {
      control: 'select',
      options: ['grey-scale-10', 'grey-scale-20'],
    },
    tagBackgroundColor: {
      control: 'select',
      options: ['ui-green', 'ui-emerald-green', 'ui-beige'],
    },
    tagFontColor: {
      control: 'select',
      options: [
        'ui-green',
        'ui-light-green',
        'ui-beige',
        'project-blue',
        'project-orange',
        'project-green',
        'project-turquoise',
        'project-purple',
        'project-pastel-blue',
        'project-pastel-orange',
        'project-pastel-green',
        'project-pastel-turquoise',
        'project-pastel-purple',
        'none',
      ],
    },
    tagText: { control: 'text' },
  },
}

export default meta

export const Horizontal: StoryObj<typeof meta> = {
  args: {
    variant: 'horizontal',
    readMoreVariant: 'text',
    enableHover: true,
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    description:
      'This is a description of the project. It can be quite long and will wrap to multiple lines if needed.',
    location: 'Location, Country',
    imageUrl: 'https://picsum.photos/300/140',
    imageAlt: 'Project image',
    tagBackgroundColor: 'ui-green',
    tagText: 'XXX impact created',
  },
}

export const Compact: StoryObj<typeof meta> = {
  args: {
    variant: 'compact',
    readMoreVariant: 'chevron',
    enableHover: true,
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    description:
      'This is a description of the project. It can be quite long and will wrap to multiple lines if needed.',
    location: 'Location, Country',
    imageUrl: 'https://picsum.photos/300/140',
    imageAlt: 'Project image',
    tagBackgroundColor: 'ui-green',
    tagText: 'XXX impact created',
  },
}

export const Default: StoryObj<typeof meta> = {
  args: {
    variant: 'compact',
    readMoreVariant: 'chevron',
    enableHover: true,
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    description:
      'This is a description of the project. It can be quite long and will wrap to multiple lines if needed.',
    location: 'Location, Country',
    imageUrl: 'https://picsum.photos/300/140',
    imageAlt: 'Project image',
    tagBackgroundColor: 'ui-green',
    tagText: 'XXX impact created',
  },
}

export const DifferentTagColors: StoryObj<typeof meta> = {
  args: {
    variant: 'horizontal',
    readMoreVariant: 'text',
    enableHover: true,
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    description:
      'This is a description of the project. It can be quite long and will wrap to multiple lines if needed.',
    location: 'Location, Country',
    imageUrl: 'https://picsum.photos/300/140',
    imageAlt: 'Project image',
    tagText: 'XXX impact created',
  },
  render: (args) => ({
    components: { GsProjectCardSelector },
    setup() {
      return { args }
    },
    template: /* html */ `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <GsProjectCardSelector
          v-bind="args"
          tag-background-color="ui-green"
        />
        <GsProjectCardSelector
          v-bind="args"
          tag-background-color="ui-emerald-green"
        />
        <GsProjectCardSelector
          v-bind="args"
          tag-background-color="ui-beige"
        />
      </div>
    `,
  }),
}
