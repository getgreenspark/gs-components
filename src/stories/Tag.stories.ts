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
      const iconVariants = [
        null,
        'mdi-check',
        'https://storage.googleapis.com/integration-logos/shopify-logo.png',
      ]
      return { args, colorOptions, iconVariants }
    },
    template: `
      <div class="d-flex ga-4">
        <div
          v-for="color in colorOptions"
          :key="color"
          class="d-flex flex-column ga-4"
        >
          <GsTag
            v-for="icon in iconVariants"
            :key="icon || 'no-icon'"
            :background-color="color"
            :icon="icon"
            v-bind="args"
          />
        </div>
      </div>
    `,
  }),
}
