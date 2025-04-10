import type { Meta, StoryObj } from '@storybook/vue3'
import GsTypography from '@/components/GsTypography.vue'
import '@/assets/style/variables.css'
import '@/stories/colorPalette.css'

const meta: Meta = {
  title: 'Foundation/01-Colours/Main Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Main Colors

This story showcases the main colors used in our design system.
        `,
      },
    },
  },
}

export default meta

type Story = StoryObj

const colors = [
  { name: 'Green', hex: '#336E6B', variable: 'main-green' },
  { name: 'Light Green', hex: '#47D18F', variable: 'main-light-green' },
  { name: 'Blue', hex: '#1B3352', variable: 'main-blue' },
  { name: 'Light Blue', hex: '#A6CFE2', variable: 'main-light-blue' },
  { name: 'Red', hex: '#E57066', variable: 'main-red' },
  { name: 'Yellow', hex: '#F5C26F', variable: 'main-yellow' },
  { name: 'Beige', hex: '#F2EBDB', variable: 'main-beige' },
  { name: 'Black', hex: '#393939', variable: 'main-black' },
  { name: 'White', hex: '#FDFDFD', variable: 'main-white' },
]

export const MainColors: Story = {
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
          >
            {{ color.name }}
          </GsTypography>
          <GsTypography variant="caption" class="color-hex"
          >
            {{ color.hex }}
          </GsTypography>
          <GsTypography variant="caption" class="color-variable"
          >
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
