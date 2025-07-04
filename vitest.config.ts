import { defineConfig, mergeConfig } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import viteConfig from './vite.config'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(
  mergeConfig(viteConfig, {
    test: {
      extends: true,
      projects: [
        {
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
              storybookScript: 'yarn storybook --ci',
            }),
          ],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              provider: 'playwright',
              headless: true,
              instances: [{ browser: 'chromium' }],
            },
            setupFiles: ['./.storybook/vitest.setup.ts'],
          },
        },
      ],
    },
  }),
)
