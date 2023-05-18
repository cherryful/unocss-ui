# @unocss-ui/preset

The preset for UnocssUI. It's used as style support for components and also as a standalone package.

## Usage

Default, it's included in `unocss-ui`, you don't need to install it again.

For standalone usage, you can install it by:

```
pnpm add -D @unocss-ui/preset
```

Add preset into unocss config.

```ts
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { colors } from 'unocss/preset-mini'

// import { presetUnocssUI } from 'unocss-ui'
import { presetUnocssUI } from '@unocss-ui/preset'

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

Then you can use the css classes like this:

```html
<div class="bg-primary-500"> TEST </div>
<!-- Equivalent to -->
<div class="bg-red-500"> TEST </div>
```