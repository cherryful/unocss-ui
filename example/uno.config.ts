import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetForms } from '@julr/unocss-preset-forms'
import { colors } from 'unocss/preset-mini'
import { presetUnocssUI } from '../packages/preset/src/index'

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
    presetForms(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
      },
    }),
    presetUnocssUI(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
