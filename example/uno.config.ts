import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetForms } from '@julr/unocss-preset-forms'
import { colors } from 'unocss/preset-mini'
import { presetUnocssUI } from '../packages/preset/src'

export default defineConfig({
  safelist: ['i-mdi:lightning-bolt', 'i-mdi:link-variant', 'i-mdi:language-markdown'],
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
    presetTypography({
      cssExtend: {
        code: {
          color: '#8b5cf6',
        },
      },
    }),
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
