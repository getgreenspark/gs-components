import type { Meta, StoryObj } from '@storybook/vue3'
import GsTypography from '@/components/GsTypography.vue'
import '@/assets/style/variables.css'

const meta: Meta<typeof GsTypography> = {
  title: 'Foundation/Typography',
  component: GsTypography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Typography Component

Our typography system is built using the Cabin font family and follows a consistent scale. Each variant has specific properties for:
- Font size
- Line height
- Letter spacing
- Optional bold weight

### Global Usage

Once you have installed and set up the GS Components library, you can use the typography component globally in your Vue application:

\`\`\`vue
<template>
  <gs-typography variant="h1" bold>Main Heading</gs-typography>
  <gs-typography variant="body">Regular text content</gs-typography>
  <gs-typography variant="caption" color="ui-green">Small green text</gs-typography>
</template>
\`\`\`

No need to import the component manually when using it globally.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'title-1',
        'title-2',
        'big-description',
        'description',
        'body',
        'caption',
        'minimum',
      ],
      description: 'The typography variant to use',
      table: {
        defaultValue: { summary: 'body' },
      },
    },
    bold: {
      control: 'boolean',
      description: 'Whether to use bold font weight',
    },
    tag: {
      control: 'text',
      description: 'The HTML tag to use for the text',
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    color: {
      control: 'select',
      options: ['ui-green', 'ui-emerald-green', 'ui-red', 'ui-black', 'ui-white'],
      description: 'Text color',
    },
  },
}

export default meta

export const Interactive: StoryObj<typeof meta> = {
  args: {
    variant: 'body',
    bold: false,
    tag: 'p',
    color: 'ui-black',
  },
  render: (args) => ({
    components: { GsTypography },
    setup() {
      return { args }
    },
    template: /* html */ `
      <GsTypography :variant="args.variant" :bold="args.bold" :is="args.tag" :color="args.color">
        {{ args.default }}
      </GsTypography>
    `,
  }),
}

export const TypeScale: StoryObj<typeof meta> = {
  render: () => ({
    components: { GsTypography },
    setup() {
      const scale = [
        { name: 'H1', variant: 'h1', specs: '48px / 56px' },
        { name: 'H2', variant: 'h2', specs: '44px / 52px' },
        { name: 'H3', variant: 'h3', specs: '40px / 48px' },
        { name: 'H4', variant: 'h4', specs: '36px / 44px' },
        { name: 'H5', variant: 'h5', specs: '32px / 40px' },
        { name: 'H6', variant: 'h6', specs: '28px / 36px' },
        { name: 'Title 1', variant: 'title-1', specs: '24px / 32px' },
        { name: 'Title 2', variant: 'title-2', specs: '20px / 28px' },
        { name: 'Big Description', variant: 'big-description', specs: '18px / 26px' },
        { name: 'Description', variant: 'description', specs: '16px / 24px' },
        { name: 'Body', variant: 'body', specs: '14px / 22px' },
        { name: 'Caption', variant: 'caption', specs: '12px / 20px' },
        { name: 'Minimum', variant: 'minimum', specs: '9px / 17px' },
      ]
      return {
        scale,
        sample: 'The quick brown fox jumps over the lazy dog',
      }
    },
    template: /* html */ `
      <div class="type-scale">
        <div v-for="type in scale" :key="type.variant" class="type-row">
          <GsTypography variant="caption" bold>{{ type.name }}</GsTypography>
          <GsTypography variant="caption" style="color: #666;">{{ type.specs }}</GsTypography>
          <GsTypography :variant="type.variant">{{ sample }}</GsTypography>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<GsTypography variant="h1">The quick brown fox jumps over the lazy dog</GsTypography>',
      },
    },
  },
}

export const Weights: StoryObj<typeof meta> = {
  render: () => ({
    components: { GsTypography },
    setup() {
      const samples = [
        { variant: 'h1', text: 'Regular & Bold Weights' },
        { variant: 'description', text: 'The quick brown fox jumps over the lazy dog' },
      ]
      return { samples }
    },
    template: /* html */ `
      <div class="weights">
        <div v-for="sample in samples" :key="sample.variant" class="weight-row">
          <GsTypography :variant="sample.variant">{{ sample.text }}</GsTypography>
          <GsTypography :variant="sample.variant" bold>{{ sample.text }}</GsTypography>
        </div>
      </div>
    `,
  }),
}

export const Colors: StoryObj<typeof meta> = {
  render: () => ({
    components: { GsTypography },
    setup() {
      const colors = [
        { name: 'Main Green', value: 'ui-green' },
        { name: 'Main Light Green', value: 'ui-light-green' },
        { name: 'Main Red', value: 'ui-red' },
        { name: 'Main Black', value: 'ui-black' },
        { name: 'Main White', value: 'ui-white' },
      ]
      return { colors }
    },
    template: /* html */ `
      <div class="colors" style="display: flex; flex-direction: column; gap: 16px;">
        <div v-for="color in colors" :key="color.value"
             style="display: flex; align-items: center; gap: 8px;">
          <GsTypography variant="caption" bold style="width: 120px;">{{ color.name }}:
          </GsTypography>
          <GsTypography variant="body" :color="color.value">
            The quick brown fox jumps over the lazy dog
          </GsTypography>
        </div>
      </div>
    `,
  }),
}
