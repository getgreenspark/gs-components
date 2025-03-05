import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ['src/components/*.vue', 'src/components/**/*.vue', 'src/*.ts', 'src/**/*.ts'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts', 'main.ts'],
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/GsComponents.ts',
      formats: ['es', 'cjs'],
      name: 'ViewerPlugin',
      fileName: (format) => `plugin.${format}.js`,
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          Vue: 'Vue',
        },
      },
    },
  },
})
