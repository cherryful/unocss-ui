import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({ mode: 'vue-scoped' }),
  ],
  build: {
    target: 'modules',
    minify: true,
    cssCodeSplit: true, //
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'unocss-ui',
      fileName: format => `unocss-ui.${format}.js`,
    },
    emptyOutDir: false,
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
