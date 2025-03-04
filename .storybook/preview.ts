import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import { registerPlugins } from '../src/plugins'

setup((app) => {
  registerPlugins(app)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
      canvas: {
        layout: 'centered',
      },
    },
    layout: 'centered',
  },
}

export default preview
