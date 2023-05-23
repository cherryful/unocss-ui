import type { Preset } from 'unocss'
import { colors } from 'unocss/preset-mini'

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const sizes = ['sm', 'md', 'lg', 'full']
const fractions = ['1/2', '1/3', '1/4', '1/5', '1/6', 'full', '80', '96', '120', 'sm', 'md', 'lg']
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export function presetUnocssUI(): Preset {
  return {
    name: '@unocss-ui/preset',
    safelist: [
      ...types.map(t => levels.map(l => `bg-${t}-${l}`)).flat(),
      ...types.map(t => levels.map(l => `hover:bg-${t}-${l}`)).flat(),
      ...types.map(t => levels.map(l => `border-${t}-${l}`)).flat(),
      ...types.map(t => levels.map(l => `text-${t}-${l}`)).flat(),
      ...types.map(t => levels.map(l => `focus:ring-${t}-${l}`)).flat(),
      ...types.map(t => levels.map(l => `focus:border-${t}-${l}`)).flat(),
      ...fractions.map(f => `w-${f} h-${f}`.split(' ')).flat(),
      ...types.map(t => `border-r-${t}-500`),
      ...sizes.map(s => `rounded-${s}`),
      ...levels.map(l => `duration-${l}`),
      ...nums.map(n => `border-${n}`),
      ...nums.map(n => `border-t-${n}`),
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
