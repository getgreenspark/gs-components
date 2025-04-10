import type { Meta, StoryObj } from '@storybook/vue3'
import GsTypography from '@/components/GsTypography.vue'
import '@/assets/style/variables.css'

const meta: Meta = {
  title: 'Foundation/01-Colours/Grey Scale',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Grey Scale

This story showcases the grey scale colors used in our design system.
        `
      }
    }
  }
}

export default meta

type Story = StoryObj

const greyScaleColors = [
  { name: 'Grey Scale 0 (White)', hex: '#FFFFFF', variable: 'grey-scale-0' },
  { name: 'Grey Scale 10', hex: '#FAFAFA', variable: 'grey-scale-10' },
  { name: 'Grey Scale 20', hex: '#F5F5F5', variable: 'grey-scale-20' },
  { name: 'Grey Scale 30', hex: '#EBEBEB', variable: 'grey-scale-30' },
  { name: 'Grey Scale 40', hex: '#DEDEDE', variable: 'grey-scale-40' },
  { name: 'Grey Scale 50', hex: '#BFBFBF', variable: 'grey-scale-50' },
  { name: 'Grey Scale 60', hex: '#A6A6A6', variable: 'grey-scale-60' },
  { name: 'Grey Scale 70', hex: '#8C8C8C', variable: 'grey-scale-70' },
  { name: 'Grey Scale 80', hex: '#737373', variable: 'grey-scale-80' },
  { name: 'Grey Scale 90', hex: '#595959', variable: 'grey-scale-90' },
  { name: 'Grey Scale 100', hex: '#404040', variable: 'grey-scale-100' },
  { name: 'Grey Scale 110', hex: '#262626', variable: 'grey-scale-110' },
  { name: 'Grey Scale 120', hex: '#0D0D0D', variable: '--grey-scale-120' },
  { name: 'Grey Scale 200', hex: '#CCCCCC', variable: '--grey-scale-200' },
  { name: 'Grey Scale 250', hex: '#DBDBDB', variable: '--grey-scale-250' },
  { name: 'Grey Scale 800', hex: '#323232', variable: '--grey-scale-800' }
]

export const GreyScale: Story = {
  render: () => ({
    components: { GsTypography },
    setup() {
      const shouldUseWhiteText = (hex: string) => {
        // Remove the hash
        const color = hex.substring(1)
        // Convert hex to RGB
        const r = parseInt(color.substring(0, 2), 16)
        const g = parseInt(color.substring(2, 4), 16)
        const b = parseInt(color.substring(4, 6), 16)
        // Calculate relative luminance using sRGB
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        // Use white text if luminance is less than 0.5
        return luminance < 0.5
      }

      return {
        greyScaleColors,
        shouldUseWhiteText
      }
    },
    template: /* html */ `
      <div class="color-palette">
        <div v-for="color in greyScaleColors" :key="color.variable" class="color-swatch" :style="{ backgroundColor: color.hex }">
          <GsTypography variant="body" class="color-name" :style="{ color: shouldUseWhiteText(color.hex) ? '#FFFFFF' : '#000000' }">{{ color.name }}</GsTypography>
          <GsTypography variant="caption" class="color-hex" :style="{ color: shouldUseWhiteText(color.hex) ? '#FFFFFF' : '#000000' }">{{ color.hex }}</GsTypography>
          <GsTypography variant="caption" class="color-variable" :style="{ color: shouldUseWhiteText(color.hex) ? '#FFFFFF' : '#000000' }">var({{ color.variable }})</GsTypography>
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
    `
  })
}
