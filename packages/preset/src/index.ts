import type { Preset } from 'unocss'
import { colors } from 'unocss/preset-mini'

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const nums = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const sizes = ['sm', 'md', 'lg', 'full']

export function presetUnocssUI(): Preset {
  return {
    name: '@unocss-ui/preset',
    safelist: [
      ...types.map(t => nums.map(n => `bg-${t}-${n}`)).flat(),
      ...types.map(t => nums.map(n => `hover:bg-${t}-${n}`)).flat(),
      ...types.map(t => nums.map(n => `border-${t}-${n}`)).flat(),
      ...types.map(t => nums.map(n => `text-${t}-${n}`)).flat(),
      ...types.map(t => nums.map(n => `focus:ring-${t}-${n}`)).flat(),
      ...types.map(t => nums.map(n => `focus:border-${t}-${n}`)).flat(),
      ...types.map(t => `border-r-${t}-500`),
      ...sizes.map(s => `rounded-${s}`),
    ],
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
  }
}
