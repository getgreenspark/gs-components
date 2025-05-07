import type { Meta, StoryObj } from '@storybook/vue3'
import GsTypography from '@/components/GsTypography.vue'
import '@/assets/style/variables.css'
import '@/stories/colorPalette.css'

const meta: Meta = {
  title: 'Foundation/Colours/UI Colours',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## UI Colors

This story showcases the UI colors used in our design system.
        `,
      },
    },
  },
}

export default meta

type Story = StoryObj

const colors = [
  { name: 'Green', hex: '#3b755f', variable: 'ui-green' },
  { name: 'Green Light', hex: '#afc6bd', variable: 'ui-green-light' },
  { name: 'Blue', hex: '#2e3a8c', variable: 'ui-blue' },
  { name: 'Blue Light', hex: '#4e8dd6', variable: 'ui-blue-light' },
  { name: 'Red', hex: '#e57066', variable: 'ui-red' },
  { name: 'Yellow', hex: '#f5c26f', variable: 'ui-yellow' },
  { name: 'Beige', hex: '#f2ebdb', variable: 'ui-beige' },
  { name: 'Black', hex: '#212121', variable: 'ui-black' },
  { name: 'White', hex: '#f9f9f9', variable: 'ui-white' },
  { name: 'Emerald Green', hex: '#47d18f', variable: 'ui-emerald-green' },
  { name: 'Sky Blue', hex: '#3cafe5', variable: 'ui-sky-blue' },
  { name: 'Gold', hex: '#d9b479', variable: 'ui-gold' },
]

export const Default: Story = {
  render: () => ({
    components: { GsTypography },
    setup() {
      return { colors }
    },
    template: /* html */ `
      <div class="color-palette">
        <div v-for="color in colors" :key="color.hex" class="color-swatch"
             :style="{ backgroundColor: color.hex }">
          <GsTypography variant="body" class="color-name"
                        :style="{ color: ['#3b755f', '#2e3a8c', '#212121'].includes(color.hex) ? '#FFFFFF' : '#000000' }">
            {{ color.name }}
          </GsTypography>
          <GsTypography variant="caption" class="color-hex"
                        :style="{ color: ['#3b755f', '#2e3a8c', '#212121'].includes(color.hex) ? '#FFFFFF' : '#000000' }">
            {{ color.hex }}
          </GsTypography>
          <GsTypography variant="caption" class="color-variable"
                        :style="{ color: ['#3b755f', '#2e3a8c', '#212121'].includes(color.hex) ? '#FFFFFF' : '#000000' }">
            var(--{{ color.variable }})
          </GsTypography>
        </div>
      </div>
    `,
    styles: /* css */ `
      <style>
        .color-palette {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          padding: 16px;
        }

        .color-swatch {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px;
          height: 150px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .color-name {
          font-weight: 600;
          margin-bottom: 4px;
        }

        .color-hex, .color-variable {
          opacity: 0.8;
        }
      </style>
    `,
  }),
}
