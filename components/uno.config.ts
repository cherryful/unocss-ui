import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetForms } from '@julr/unocss-preset-forms'
import { colors } from 'unocss/preset-mini'

export default defineConfig({
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.teal,
      accent: colors.pink,
      success: colors.green,
      info: colors.blue,
      warning: colors.yellow,
      error: colors.red,
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetForms(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
