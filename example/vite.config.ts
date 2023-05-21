import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Markdown from 'vite-plugin-vue-markdown'

import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(
  {
    base: '/unocss-ui/',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: [
      Vue({ include: [/\.vue$/, /\.md$/] }),
      Unocss(), // uno.config.ts
      Markdown(),
      visualizer({ open: true, gzipSize: true, brotliSize: true }),
    ],
    // server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8765',
    //     changeOrigin: true,
    //   },
    // },
    // },
  },
)
