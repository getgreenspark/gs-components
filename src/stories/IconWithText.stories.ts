import type { Meta, StoryObj } from '@storybook/vue3'
import GsIconWithText from '@/components/GsIconWithText.vue'
import GsTypography from '@/components/GsTypography.vue'
import '@/assets/style/variables.css'

const meta: Meta<typeof GsIconWithText> = {
  title: 'Components/Core/IconWithText',
  component: GsIconWithText,
  tags: ['autodocs'],
  argTypes: {
    mdiIcon: {
      control: 'text',
      description: 'MDI icon name (e.g. "mdi-check")',
    },
    iconPath: {
      control: 'text',
      description: 'Path to custom icon',
    },
    iconAlt: {
      control: 'text',
      description: 'Alt text for custom icon',
    },
    iconSize: {
      control: 'number',
      description: 'Icon size in pixels',
    },
    iconColor: {
      control: 'text',
      description: 'Icon color using design system variables',
    },
    text: {
      control: 'text',
      description: 'Text content',
    },
    textVariant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'title-1',
        'title-2',
        'big-description',
        'description',
        'body',
        'caption',
        'minimum',
      ],
      description: 'Typography variant for the text',
    },
    tag: {
      control: 'text',
      description: 'HTML tag to use for the text',
    },
  },
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    mdiIcon: 'mdi-check',
    text: 'Feature included',
    textVariant: 'body',
    tag: 'p',
  },
}

export const CustomIcon: StoryObj<typeof meta> = {
  args: {
    iconPath: '/path/to/icon.svg',
    iconAlt: 'Custom icon',
    text: 'Custom icon example',
    textVariant: 'body',
    tag: 'p',
  },
}

export const IconColors: StoryObj<typeof meta> = {
  render: () => ({
    components: { GsIconWithText },
    template: /* html */ `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <GsIconWithText
          mdiIcon="mdi-check"
          iconColor="var(--ui-green)"
          text="Green icon"
          textVariant="body"
          tag="p"
        />
        <GsIconWithText
          mdiIcon="mdi-check"
          iconColor="var(--ui-red)"
          text="Red icon"
          textVariant="body"
          tag="p"
        />
        <GsIconWithText
          mdiIcon="mdi-check"
          iconColor="var(--ui-black)"
          text="Black icon"
          textVariant="body"
          tag="p"
        />
      </div>
    `,
  }),
}

export const IconSizes: StoryObj<typeof meta> = {
  render: () => ({
    components: { GsIconWithText },
    template: /* html */ `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <GsIconWithText
          mdiIcon="mdi-check"
          iconSize="16"
          text="Small icon (16px)"
          textVariant="body"
          tag="p"
        />
        <GsIconWithText
          mdiIcon="mdi-check"
          iconSize="24"
          text="Medium icon (24px)"
          textVariant="body"
          tag="p"
        />
        <GsIconWithText
          mdiIcon="mdi-check"
          iconSize="32"
          text="Large icon (32px)"
          textVariant="body"
          tag="p"
        />
      </div>
    `,
  }),
}

export const TextVariants: StoryObj<typeof meta> = {
  render: () => ({
    components: { GsIconWithText, GsTypography },
    template: /* html */ `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <GsTypography variant="h2" tag="h2">Headers</GsTypography>
          <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
            <GsIconWithText
              mdiIcon="mdi-check"
              text="H1 Text"
              textVariant="h1"
              tag="h1"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="H2 Text"
              textVariant="h2"
              tag="h2"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="H3 Text"
              textVariant="h3"
              tag="h3"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="H4 Text"
              textVariant="h4"
              tag="h4"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="H5 Text"
              textVariant="h5"
              tag="h5"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="H6 Text"
              textVariant="h6"
              tag="h6"
            />
          </div>
        </div>

        <div>
          <GsTypography variant="h2" tag="h2">Titles</GsTypography>
          <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
            <GsIconWithText
              mdiIcon="mdi-check"
              text="Title 1 Text"
              textVariant="title-1"
              tag="div"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="Title 2 Text"
              textVariant="title-2"
              tag="div"
            />
          </div>
        </div>

        <div>
          <GsTypography variant="h2" tag="h2">Body Text</GsTypography>
          <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
            <GsIconWithText
              mdiIcon="mdi-check"
              text="Big Description Text"
              textVariant="big-description"
              tag="p"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="Description Text"
              textVariant="description"
              tag="p"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="Body Text"
              textVariant="body"
              tag="p"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="Caption Text"
              textVariant="caption"
              tag="p"
            />
            <GsIconWithText
              mdiIcon="mdi-check"
              text="Minimum Text"
              textVariant="minimum"
              tag="p"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const HtmlTags: StoryObj<typeof meta> = {
  render: () => ({
    components: { GsIconWithText },
    template: /* html */ `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <GsIconWithText
          mdiIcon="mdi-check"
          text="Paragraph tag"
          textVariant="body"
          tag="p"
        />
        <GsIconWithText
          mdiIcon="mdi-check"
          text="Div tag"
          textVariant="body"
          tag="div"
        />
        <GsIconWithText
          mdiIcon="mdi-check"
          text="Span tag"
          textVariant="body"
          tag="span"
        />
        <GsIconWithText
          mdiIcon="mdi-check"
          text="Article tag"
          textVariant="body"
          tag="article"
        />
      </div>
    `,
  }),
}
