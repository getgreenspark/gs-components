import type { Meta, StoryObj } from '@storybook/vue3'
import GsTag from '@/components/GsTag.vue'

const colorOptions = ['beige', 'black', 'pastel-green', 'grey', 'emerald-green']

const meta: Meta<typeof GsTag> = {
  title: 'Components/Tags',
  component: GsTag,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text content of the tag',
    },
    backgroundColor: {
      control: 'select',
      options: colorOptions,
      description: 'Background color of the tag',
    },
    icon: {
      control: 'text',
      description: 'Optional path of icon (eg: /public/icons/impact_types/project_trees.svg)',
    },
    bold: {
      control: 'boolean',
      description: 'Whether the text should be bold',
    },
  },
  parameters: {},
}

export default meta
type Story = StoryObj<typeof GsTag>

export const Default: Story = {
  args: {
    label: 'Tag text',
  },
}

export const Variants: Story = {
  args: {
    label: 'Tag text',
  },
  render: (args) => ({
    components: { GsTag },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex ga-4">
        <div class="d-flex flex-column ga-4">
          <GsTag :background-color="'beige'" v-bind="args" />
          <GsTag :background-color="'beige'" icon="mdi-check" v-bind="args" />
          <GsTag :background-color="'beige'" icon="https://storage.googleapis.com/integration-logos/shopify-logo.png"
                 v-bind="args" />
        </div>
        <div class="d-flex flex-column ga-4">
          <GsTag :background-color="'black'" v-bind="args" />
          <GsTag :background-color="'black'" icon="mdi-check" v-bind="args" />
          <GsTag :background-color="'black'" icon="https://storage.googleapis.com/integration-logos/shopify-logo.png"
                 v-bind="args" />
        </div>
        <div class="d-flex flex-column ga-4">
          <GsTag :background-color="'pastel-green'" v-bind="args" />
          <GsTag :background-color="'pastel-green'" icon="mdi-check" v-bind="args" />
          <GsTag :background-color="'pastel-green'"
                 icon="https://storage.googleapis.com/integration-logos/shopify-logo.png"
                 v-bind="args" />
        </div>
        <div class="d-flex flex-column ga-4">

          <GsTag :background-color="'emerald-green'" v-bind="args" />
          <GsTag :background-color="'emerald-green'" icon="mdi-check" v-bind="args" />
          <GsTag :background-color="'emerald-green'"
                 icon="https://storage.googleapis.com/integration-logos/shopify-logo.png"
                 v-bind="args" />
        </div>
        <div class="d-flex flex-column ga-4">
          <GsTag :background-color="'grey'" v-bind="args" />
          <GsTag :background-color="'grey'" icon="mdi-check" v-bind="args" />
          <GsTag :background-color="'grey'" icon="https://storage.googleapis.com/integration-logos/shopify-logo.png"
                 v-bind="args" />
        </div>
      </div>
    `,
  }),
}
