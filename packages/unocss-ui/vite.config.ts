import { resolve } from 'node:path'
import fs from 'node:fs/promises'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { ResolvedConfig } from 'vite'

let config: ResolvedConfig = undefined!

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'unocss-ui',
      fileName: format => `unocss-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    {
      name: 'vite-plugin-copy-style',
      apply: 'build',
      enforce: 'post',
      configResolved(_config) {
        config = _config
      },
      async closeBundle() {
        const { build, root } = config
        const { outDir } = build
        await fs.copyFile(
          resolve(__dirname, 'src/style.css'),
          resolve(root, outDir, 'style.css'))
      },
    },
  ],
})
