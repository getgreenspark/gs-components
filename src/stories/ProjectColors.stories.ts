import type { Meta, StoryObj } from '@storybook/vue3'
import GsTypography from '@/components/GsTypography.vue'
import '@/assets/style/variables.css'
import '@/stories/colorPalette.css'

const meta: Meta = {
  title: 'Foundation/Colours/Project Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Project Colors

This story showcases the project-specific colors used in our design system.
        `,
      },
    },
  },
}

export default meta

type Story = StoryObj

const projectColors = [
  { name: 'Blue', hex: '#1FAEF0', variable: 'project-blue' },
  { name: 'Orange', hex: '#FFB339', variable: 'project-orange' },
  { name: 'Green', hex: '#49E2A7', variable: 'project-green' },
  { name: 'Turquoise', hex: '#49A29F', variable: 'project-turquoise' },
  { name: 'Purple', hex: '#6572ED', variable: 'project-purple' },
  { name: 'Pastel Blue', hex: '#9CD2EB', variable: 'project-pastel-blue' },
  { name: 'Pastel Orange', hex: '#FFE7C0', variable: 'project-pastel-orange' },
  { name: 'Pastel Green', hex: '#CBEFE1', variable: 'project-pastel-green' },
  { name: 'Pastel Turquoise', hex: '#9BD3D3', variable: 'project-pastel-turquoise' },
  { name: 'Pastel Purple', hex: '#93B1FF', variable: 'project-pastel-purple' },
]

export const ProjectColors: Story = {
  render: () => ({
    components: { GsTypography },
    setup() {
      return { projectColors }
    },
    template: /* html */ `
      <div class="color-palette">
        <div v-for="color in projectColors" :key="color.hex" class="color-swatch"
             :style="{ backgroundColor: color.hex, color: ['#FDFDFD', '#FFE7C0', '#CBEFE1'].includes(color.hex) ? '#000' : '#fff' }">
          <GsTypography variant="body" class="color-name">{{ color.name }}</GsTypography>
          <GsTypography variant="caption" class="color-hex">{{ color.hex }}</GsTypography>
          <GsTypography variant="caption" class="color-variable">var(--{{ color.variable }})
          </GsTypography>
        </div>
      </div>
    `,
  }),
}
