import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

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
      Vue(),
      // https://github.com/unocss/unocss
      Unocss(), // uno.config.ts
      visualizer({ open: true, gzipSize: true, brotliSize: true }),
    ],
    server: {
      port: 1234,
      proxy: {
        '/api': {
          target: 'http://localhost:8765',
          changeOrigin: true,
        },
      },
    },
  },
)
