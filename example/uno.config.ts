import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { colors } from 'unocss/preset-mini'

const types = [
  'primary',
  'secondary',
  'accent',
  'success',
  'info',
  'warning',
  'error',
]

const safeList = [
  ...types.map(v => `bg-${v}-100`),
  ...types.map(v => `hover:bg:${v}-100`),
]

export default defineConfig({
  safelist: safeList,
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
  // shortcuts: [],
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
