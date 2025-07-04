import type { Meta, StoryObj } from '@storybook/vue3-vite'
import GsDivider from '@/components/GsDivider.vue'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

const meta: Meta<typeof GsDivider> = {
  title: 'Components/Divider',
  component: GsDivider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['grey200', 'grey250', 'grey800', 'green'],
      description: 'The color variant of the divider',
    },
    thickness: {
      control: 'select',
      options: ['thin', 'thick'],
      description: 'The thickness of the divider',
    },
    length: {
      control: 'text',
      description: 'The length of the divider.',
    },
    margin: {
      control: 'text',
      description: 'The margin top and bottom of the divider.',
    },
  },
  parameters: {},
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
    components: { GsDivider },
    template: /* html */ `
      <div style="width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; background: white;">
          <div>
            <p>Grey 200 (Default) - #CCCCCC</p>
            <div style="padding: 8px 0; background: white;">
              <GsDivider color="grey200" />
            </div>
            <div style="padding: 8px 0; background: white;">
              <GsDivider thickness="thin" color="grey200" />
            </div>
          </div>

          <div>
            <p>Grey 250 - #DBDBDB</p>
            <div style="padding: 8px 0; background: white;">
              <GsDivider color="grey250" />
            </div>
            <div style="padding: 8px 0; background: white;">
              <GsDivider thickness="thin" color="grey250" />
            </div>
          </div>

          <div>
            <p>Grey 800 - #323232</p>
            <div style="padding: 8px 0; background: white;">
              <GsDivider color="grey800" />
            </div>
            <div style="padding: 8px 0; background: white;">
              <GsDivider thickness="thin" color="grey800" />
            </div>
          </div>
          <div>
            <p>Green - #3b755f</p>
            <div style="padding: 8px 0; background: white;">
              <GsDivider color="green" />
            </div>
            <div style="padding: 8px 0; background: white;">
              <GsDivider thickness="thin" color="green" />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
