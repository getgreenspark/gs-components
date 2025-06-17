import type { Meta, StoryObj } from '@storybook/vue3'
import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsTooltip from '@/components/GsTooltip.vue'

const meta: Meta<typeof GsTooltip> = {
  title: 'Components/Tooltip',
  component: GsTooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Tooltip text',
    },
    variant: {
      control: 'select',
      options: ['dark', 'light'],
      description: 'Tooltip background variant',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip placement',
    },
    iconSize: {
      control: 'select',
      options: [16, 20, 24],
      description: 'Size of the icon inside the tooltip',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    variant: 'dark',
    placement: 'top',
    iconSize: 16,
  },
  render: (args) => ({
    components: { GsTooltip },
    setup() {
      return { args }
    },
    template: `
      <GsTooltip v-bind="args" />`,
  }),
}

export const Light: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    variant: 'light',
    placement: 'top',
    iconSize: 16,
  },
  render: (args) => ({
    components: { GsTooltip },
    setup() {
      return { args }
    },
    template: `
      <GsTooltip v-bind="args" />`,
  }),
}

export const Sizes: Story = {
  args: {
    variant: 'dark',
    placement: 'top',
    iconSize: 16,
  },
  render: (args) => ({
    components: { GsTooltip },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 10px; flex-direction: column">
        <GsTooltip v-bind="args" :icon-size="16" :text="'Icon size 16'" />
        <GsTooltip v-bind="args" :icon-size="20" :text="'Icon size 20'" />
        <GsTooltip v-bind="args" :icon-size="24" :text="'Icon size 24'" />
      </div>
    `,
  }),
}

export const CustomActivator: Story = {
  args: {
    variant: 'dark',
    placement: 'top',
    iconSize: 16,
  },
  render: (args) => ({
    components: { GsTooltip },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 10px; flex-direction: column">
        <GsTooltip v-bind="args" :text="'Custom activator'">
          <template #activator="{ props }">
            <div
              v-bind="props"
              style="height: 40px; width: 40px; background-color: red"
            ></div>
          </template>
        </GsTooltip>
      </div>
    `,
  }),
}
