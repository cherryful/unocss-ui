# unocss-ui

This is a Vue3 component library based on Unocss. Its simplicity is its biggest feature, as almost all components rely only on a single .vue file, without depending on too much other code. 

> ⚠️ This component library is still under construction and is currently only suitable for learning purposes.

## Usage


```
pnpm add unocss unocss-ui @unocss/reset
```

Add `unocss-ui` in your main entry file.


```ts
import '@unocss/reset/tailwind.css'
import 'unocss-ui/style.css'
import 'uno.css'

import unocssui from 'unocss-ui'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(unocssui).mount('#app')
```

### Customization

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

## Development

```
git clone https://github.com/cherryful/unocss-ui
cd unocss-ui
pnpm install
```

Develop and preview components.

```bash
pnpm dev:example
```
