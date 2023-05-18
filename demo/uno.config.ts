import { defineConfig, presetUno } from 'unocss'
import { colors } from 'unocss/preset-mini'

// import { presetUnocssUI } from '@unocss-ui/preset'
import { presetUnocssUI } from 'unocss-ui'

export default defineConfig({
  theme: {
    colors: {
      primary: colors.red,
      secondary: colors.blue,
      accent: colors.green,
    },
  },
  presets: [
    presetUno(),
    presetUnocssUI(),
  ],
})
