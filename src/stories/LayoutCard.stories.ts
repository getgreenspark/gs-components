import type { Meta, StoryObj } from '@storybook/vue3-vite'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsLayoutCard from '@/components/GsLayoutCard.vue'

const STORY_WIDTH = '720px'

const meta: Meta<typeof GsLayoutCard> = {
  title: 'Components/LayoutCard',
  component: GsLayoutCard,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: `<div style="width: 100%; max-width: ${STORY_WIDTH}; margin: 0 auto;"><story /></div>`,
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    titleTag: { control: 'select', options: ['h2', 'h3'] },
    titleSize: { control: 'select', options: ['sm', 'lg'] },
    variant: { control: 'select', options: ['card', 'elevated', 'flat'] },
    padding: { control: 'select', options: ['default', 'compact'] },
    flushOnMobile: { control: 'boolean' },
    stretch: { control: 'boolean' },
    contentGap: { control: 'select', options: ['sm', 'md'] },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Section title',
    description: 'Optional section description',
  },
  render: (args) => ({
    components: { GsLayoutCard },
    setup() {
      return { args }
    },
    template: `
      <GsLayoutCard v-bind="args">
        <p style="margin: 0;">
          Section content goes here. Use this area for charts, lists, maps, or any page content
          that belongs inside a titled card section.
        </p>
      </GsLayoutCard>
    `,
  }),
}

export const WithActionsAndFooter: Story = {
  args: {
    title: 'Active integrations',
    variant: 'elevated',
    stretch: true,
    contentGap: 'md',
  },
  render: (args) => ({
    components: { GsLayoutCard },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 280px;">
        <GsLayoutCard v-bind="args">
          <template #actions>
            <button type="button">Action</button>
          </template>
          <p style="margin: 0;">
            Flexible body content with a header action and a footer pinned to the bottom of the
            section when stretch is enabled.
          </p>
          <template #footer>
            <button type="button" style="width: 100%;">Footer action</button>
          </template>
        </GsLayoutCard>
      </div>
    `,
  }),
}

export const FlatCompact: Story = {
  args: {
    title: 'Project location',
    titleSize: 'sm',
    variant: 'flat',
    padding: 'compact',
  },
  render: (args) => ({
    components: { GsLayoutCard },
    setup() {
      return { args }
    },
    template: `
      <GsLayoutCard v-bind="args">
        <p style="margin: 0;">
          Flat, compact sections work well for map panels and side-by-side layouts where the card
          should stay flush with surrounding content without an extra shadow.
        </p>
      </GsLayoutCard>
    `,
  }),
}
