import type { Preset } from 'unocss'
import { colors } from 'unocss/preset-mini'

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const nums = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const sizes = ['sm', 'md', 'lg', 'full']
const fractions = ['1/2', '1/3', '1/4', '1/5', '1/6', 'full', '80', '96', '120', 'sm', 'md', 'lg']

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
      ...fractions.map(f => `w-${f} h-${f}`.split(' ')).flat(),
      ...types.map(t => `border-r-${t}-500`),
      ...sizes.map(s => `rounded-${s}`),
      ...nums.map(n => `duration-${n}`),
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
