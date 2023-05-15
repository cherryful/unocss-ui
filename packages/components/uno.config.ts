import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetForms } from '@julr/unocss-preset-forms'
import { presetUnocssUI } from '@unocss-ui/preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetForms(),
    presetUnocssUI(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
