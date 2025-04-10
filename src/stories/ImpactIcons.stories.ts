import type { Meta, StoryObj } from '@storybook/vue3'
import GsTypography from '../components/GsTypography.vue'
import GsDivider from '../components/GsDivider.vue'

const meta = {
  title: 'Foundation/03-Icons/ImpactIcons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Icons

A collection of available icons in the design system.

### Usage

Icons are stored in the \`public/icons\` directory and can be used in components using the \`img\` tag:

\`\`\`vue
<template>
  <img src="/icons/impact_types/project_water.svg" alt="Water Project" width="24" height="24" />
  <img src="/icons/impact_types/project_water_black.svg" alt="Water Project Black" width="24" height="24" />
</template>
\`\`\`
        `,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ImpactIcons: Story = {
  render: () => ({
    components: { GsTypography, GsDivider },
    setup() {
      const icons = [
        {
          name: 'Water',
          path: '/icons/impact_types/project_water.svg',
          blackPath: '/icons/impact_types/project_water_black.svg',
          description:
            'white: /public/icons/impact_types/project_water.svg\nblack: /public/icons/impact_types/project_water_black.svg',
        },
        {
          name: 'Trees',
          path: '/icons/impact_types/project_trees.svg',
          blackPath: '/icons/impact_types/project_trees_black.svg',
          description:
            'white: /public/icons/impact_types/project_trees.svg\nblack: /public/icons/impact_types/project_trees_black.svg',
        },
        {
          name: 'Seaforestation',
          path: '/icons/impact_types/project_seaforestation.svg',
          blackPath: '/icons/impact_types/project_seaforestation_black.svg',
          description:
            'white: /public/icons/impact_types/project_seaforestation.svg\nblack: /public/icons/impact_types/project_seaforestation_black.svg',
        },
        {
          name: 'Plastic',
          path: '/icons/impact_types/project_plastic.svg',
          blackPath: '/icons/impact_types/project_plastic_black.svg',
          description:
            'white: /public/icons/impact_types/project_plastic.svg\nblack: /public/icons/impact_types/project_plastic_black.svg',
        },
        {
          name: 'Carbon',
          path: '/icons/impact_types/project_carbon.svg',
          blackPath: '/icons/impact_types/project_carbon_black.svg',
          description:
            'white: /public/icons/impact_types/project_carbon.svg\nblack: /public/icons/impact_types/project_carbon_black.svg',
        },
        {
          name: 'Bees',
          path: '/icons/impact_types/project_bees.svg',
          blackPath: '/icons/impact_types/project_bees_black.svg',
          description:
            'white: /public/icons/impact_types/project_bees.svg\nblack: /public/icons/impact_types/project_bees_black.svg',
        },
      ]

      return { icons }
    },
    template: `
      <div>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 24px;">
          <div v-for="icon in icons" :key="icon.name"
               style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <GsTypography variant="description" style="text-align: center;">{{ icon.name }}
            </GsTypography>

            <div
              style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: var(--main-black); border-radius: 8px;">
              <img :src="icon.path" :alt="icon.name" width="24" height="24" />
            </div>
            <GsTypography variant="description"
                          style="text-align: center; color: var(--grey-scale-60);">white:
              /public/icons/impact_types/{{ icon.name.toLowerCase() }}.svg
            </GsTypography>

            <div
              style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: var(--main-white); border-radius: 8px; border: 1px solid var(--grey-scale-40);">
              <img :src="icon.blackPath" :alt="icon.name + ' Black'" width="24" height="24" />
            </div>
            <GsTypography variant="description"
                          style="text-align: center; color: var(--grey-scale-60);">black:
              /public/icons/impact_types/{{ icon.name.toLowerCase() }}_black.svg
            </GsTypography>

          </div>
        </div>
      </div>
    `,
  }),
}
