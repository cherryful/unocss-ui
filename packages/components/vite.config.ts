import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Unocss(), // { mode: 'vue-scoped' })
    // Unocss({ mode: 'vue-scoped' }),
  ],
  build: {
    target: 'modules',
    // cssCodeSplit: true,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@unocss-ui/components',
      fileName: format => `components.${format}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
  },
})
