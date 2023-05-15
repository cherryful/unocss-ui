import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetForms } from '@julr/unocss-preset-forms'
import { colors } from 'unocss/preset-mini'

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const nums = ['100', '200', '300', '400', '500', '600', '700', '800']
const sizes = ['sm', 'md', 'lg', 'full']

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
  safelist: [
    ...types.map(t => nums.map(n => `bg-${t}-${n}`)).flat(),
    ...types.map(t => nums.map(n => `border-${t}-${n}`)).flat(),
    ...types.map(t => nums.map(n => `text-${t}-${n}`)).flat(),
    ...types.map(t => nums.map(n => `focus:ring-${t}-${n}`)).flat(),
    ...types.map(t => `border-r-${t}-500`),
    ...sizes.map(s => `rounded-${s}`),
  ],
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
