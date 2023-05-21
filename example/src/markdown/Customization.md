# Customization

You can customize the theme of the component library by passing in the `theme` option.

> Currently, only customization of colors is supported, and you must use the colors of the palette.

```ts
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { colors } from 'unocss/preset-mini'

import { presetUnocssUI } from 'unocss-ui'

export default defineConfig({
  theme: {
    colors: {
      primary: colors.red,
      secondary: colors.orange,
      accent: colors.yellow,
      success: colors.green,
      info: colors.blue,
      warning: colors.indigo,
      error: colors.violet,
    },
  },
  presets: [
    presetUno(),
    presetUnocssUI(),
  ],
})
```