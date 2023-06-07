// for eslint
import {
  defineConfig,
  presetIcons,
  presetUno,
} from 'unocss'

import { presetUnocssUI } from './packages/preset/src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetUnocssUI(),
  ],
})
