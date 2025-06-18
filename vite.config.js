import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        vuetify({ autoImport: true }),
        dts({
            outDir: 'dist',
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.app.json',
            include: [
                'src/components/*.vue',
                'src/components/**/*.vue',
                'src/*.ts',
                'src/plugins/*.ts',
                'src/helpers/*.ts',
            ],
        }),
    ],
    build: {
        minify: 'esbuild',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'GsComponents',
            fileName: (format) => `gs-components.${format}.js`,
        },
        rollupOptions: {
            treeshake: true,
            external: ['vue', 'vuetify', '@mdi/font'],
            output: {
                globals: {
                    vue: 'Vue',
                    vuetify: 'Vuetify',
                },
                manualChunks: {
                    helpers: ['./src/helpers/*.ts'],
                },
            },
        },
    },
});
