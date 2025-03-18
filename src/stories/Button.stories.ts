import type { Meta, StoryObj } from '@storybook/vue3'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsButton from '@/components/GsButton.vue'

const meta: Meta<typeof GsButton> = {
  title: 'Components/Button',
  component: GsButton,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: ['a', 'button', 'router-link'],
      description: 'The HTML tag to be used for the button component.',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'info', 'link'],
      description: 'The variant style of the button.',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'The size of the button.',
    },
    icon: {
      control: 'text',
      description: 'The icon to be displayed inside the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if set to true.',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner if set to true.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button take the full width of its container.',
    },
    href: {
      control: 'text',
      description: 'The URL to navigate to when the button is clicked.',
    },
    width: {
      control: 'text',
      description: 'The custom width of the button.',
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Specifies where to open the linked document.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsButton>

export const Default: Story = {
  args: {
    default: 'Button',
  },
}

export const Variants: Story = {
  render: (args) => ({
    components: { GsButton },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex ga-3">
        <GsButton type="primary">Primary</GsButton>
        <GsButton type="secondary">Secondary</GsButton>
        <GsButton type="tertiary">Tertiary</GsButton>
        <GsButton type="outlined">Outlined</GsButton>
        <GsButton type="success">Success</GsButton>
        <GsButton type="danger">Danger</GsButton>
        <GsButton type="info">Info</GsButton>
        <GsButton type="link">Link</GsButton>
        <GsButton type="icon" icon="mdi-bell" />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: (args) => ({
    components: { GsButton },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex ga-3">
        <GsButton size="small">Small Size</GsButton>
        <GsButton>Default Size</GsButton>
        <GsButton size="large">Large Size</GsButton>
      </div>
      <div class="mt-3" style="width: 335px;">
        <GsButton full-width size="large">Full Width</GsButton>
      </div>
    `,
  }),
}

export const Rounded: Story = {
  render: (args) => ({
    components: { GsButton },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex ga-3">
        <GsButton type="secondary" rounded>Rounded Button</GsButton>
        <GsButton type="success" rounded>Rounded Button</GsButton>
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  args: {
    icon: 'mdi-check',
    default: 'With Icon',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
