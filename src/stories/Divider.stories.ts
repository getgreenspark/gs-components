import type { Meta, StoryObj } from '@storybook/vue3'
import GsDivider from '@/components/GsDivider.vue'
import GsTypography from '@/components/GsTypography.vue'

const meta: Meta<typeof GsDivider> = {
  title: 'Components/Core/Divider',
  component: GsDivider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['grey200', 'grey250', 'grey800'],
      description: 'The color variant of the divider',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Divider

A horizontal divider component that adapts to its container width.

### Global Usage

\`\`\`vue
<template>
  <!-- Default grey200 divider -->
  <gs-divider />

  <!-- With specific color -->
  <gs-divider color="grey800" />
</template>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 500px;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof GsDivider>

export const Default: Story = {
  args: {
    color: 'grey200',
  },
}

export const AllVariants: Story = {
  render: () => ({
    components: { GsDivider, GsTypography },
    template: /* html */ `
      <div style="width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; background: white;">
          <div>
            <GsTypography variant="description" style="margin-bottom: 16px;">Grey 200 (Default) - #CCCCCC</GsTypography>
            <div style="padding: 8px 0; background: white;">
              <GsDivider color="grey200" />
            </div>
          </div>

          <div>
            <GsTypography variant="description" style="margin-bottom: 16px;">Grey 250 - #DBDBDB</GsTypography>
            <div style="padding: 8px 0; background: white;">
              <GsDivider color="grey250" />
            </div>
          </div>

          <div>
            <GsTypography variant="description" style="margin-bottom: 16px;">Grey 800 - #323232</GsTypography>
            <div style="padding: 8px 0; background: white;">
              <GsDivider color="grey800" />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
