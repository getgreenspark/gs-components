import type { Meta, StoryObj } from '@storybook/vue3'
import GsTags from '@/components/GsTags.vue'
import GsTypography from '@/components/GsTypography.vue'
import GsDivider from '@/components/GsDivider.vue'

const colorOptions = [
  'none',
  'main-green',
  'main-light-green',
  'main-beige',
  'project-blue',
  'project-orange',
  'project-green',
  'project-turquoise',
  'project-purple',
  'project-pastel-blue',
  'project-pastel-orange',
  'project-pastel-green',
  'project-pastel-turquoise',
  'project-pastel-purple',
]

const meta: Meta<typeof GsTags> = {
  title: 'Components/Navigation/Tags',
  component: GsTags,
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
    borderColor: {
      control: 'select',
      options: colorOptions,
      description: 'Border color of the tag',
    },
    fontColor: {
      control: 'select',
      options: colorOptions,
      description: 'Font color of the tag',
    },
    icon: {
      control: 'text',
      description: 'Optional path of icon (eg: /public/icons/impact_types/project_trees.svg)',
    },
    iconSize: {
      control: 'select',
      options: ['14', '16'],
      description: 'Size of the icon in pixels',
      defaultValue: '14',
    },
    bold: {
      control: 'boolean',
      description: 'Whether the text should be bold',
    },
    fontSize: {
      control: 'select',
      options: ['caption', 'body', 'description'],
      description: 'Font size variant for the tag text',
      defaultValue: 'caption',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Tags

A tag component that can display text with an optional icon.

### Global Usage

\`\`\`vue
<template>
  <!-- Basic usage -->
  <gs-tags 
    label="Tag text"
    background-color="main-green"
  />

  <!-- With border -->
  <gs-tags 
    label="Tag text"
    border-color="main-green"
  />

  <!-- With custom font color -->
  <gs-tags 
    label="Tag text"
    background-color="main-green"
    font-color="main-beige"
  />

  <!-- With icon -->
  <gs-tags 
    label="Tag text"
    background-color="main-green"
    icon="/public/icons/impact_types/project_trees.svg"
    icon-size="14"
  />
</template>
\`\`\`
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GsTags>

export const MainGreen: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'main-green',
  },
}

export const MainLightGreen: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'main-light-green',
  },
}

export const MainBeige: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'main-beige',
  },
}

export const ProjectBlue: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-blue',
  },
}

export const ProjectOrange: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-orange',
  },
}

export const ProjectGreen: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-green',
  },
}

export const ProjectTurquoise: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-turquoise',
  },
}

export const ProjectPurple: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-purple',
  },
}

export const ProjectPastelBlue: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-pastel-blue',
  },
}

export const ProjectPastelOrange: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-pastel-orange',
  },
}

export const ProjectPastelGreen: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-pastel-green',
  },
}

export const ProjectPastelTurquoise: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-pastel-turquoise',
  },
}

export const ProjectPastelPurple: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'project-pastel-purple',
  },
}

export const WithBorder: Story = {
  args: {
    label: 'Tag text',
    borderColor: 'main-green',
  },
}

export const WithCustomFontColor: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'main-green',
    fontColor: 'main-beige',
  },
}

export const NoBorder: Story = {
  args: {
    label: 'Tag text',
    backgroundColor: 'main-green',
    borderColor: 'none',
  },
}

export const AllStates: Story = {
  render: () => ({
    components: { GsTags, GsTypography, GsDivider },
    template: /* html */ `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Font Sizes</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="Caption size" background-color="main-green" fontSize="caption" />
            <GsTags label="Body size" background-color="main-green" fontSize="body" />
            <GsTags label="Description size" background-color="main-green" fontSize="description" />
          </div>
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Main Colors</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="Main Green" background-color="main-green" border-color="none" />
            <GsTags label="Main Light Green" background-color="main-light-green" border-color="none" />
            <GsTags label="Main Beige" background-color="main-beige" border-color="none" />
          </div>
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Project Colors</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="Blue" background-color="project-blue" />
            <GsTags label="Orange" background-color="project-orange" />
            <GsTags label="Green" background-color="project-green" />
            <GsTags label="Turquoise" background-color="project-turquoise" />
            <GsTags label="Purple" background-color="project-purple" />
          </div>
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Project Pastel Colors</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="Pastel Blue" background-color="project-pastel-blue" />
            <GsTags label="Pastel Orange" background-color="project-pastel-orange" />
            <GsTags label="Pastel Green" background-color="project-pastel-green" />
            <GsTags label="Pastel Turquoise" background-color="project-pastel-turquoise" />
            <GsTags label="Pastel Purple" background-color="project-pastel-purple" />
          </div>
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">With Border</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="Main Green" border-color="main-green" />
            <GsTags label="Project Blue" border-color="project-blue" />
            <GsTags label="Pastel Blue" border-color="project-pastel-blue" />
          </div>
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">With Custom Font Color</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="Green with Beige text" background-color="main-green" font-color="main-beige" />
            <GsTags label="Blue with Orange text" background-color="project-blue" font-color="project-orange" />
            <GsTags label="Pastel with Main text" background-color="project-pastel-blue" font-color="main-green" />
          </div>
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">With Icon</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="With icon" background-color="main-green" icon="/public/icons/impact_types/project_trees.svg" />
            <GsTags label="With icon" background-color="project-blue" icon="/public/icons/impact_types/project_trees.svg" />
            <GsTags label="With icon" background-color="project-pastel-blue" icon="/public/icons/impact_types/project_trees.svg" />
          </div>
        </div>

        <GsDivider color="grey200" />

        <div>
          <GsTypography variant="description" style="margin-bottom: 16px;">Text Weight</GsTypography>
          <div style="display: flex; gap: 16px;">
            <GsTags label="Regular weight" background-color="main-green" />
            <GsTags label="Bold weight" background-color="main-green" :bold="true" />
          </div>
        </div>
      </div>
    `,
  }),
}
