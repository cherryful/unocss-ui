import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    vue(),
    unocss({ presets: [presetUno()] }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
})
