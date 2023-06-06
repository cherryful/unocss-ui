# unocss-ui

English | [简体中文](./README-CN.md)

> 作者关于组件库的博文介绍：[基于原子化思想的 Vue3 组件库 UnoCSS UI](https://luzhenyu.blog.csdn.net/article/details/130799232)

This is a Vue3 component library based on UnoCss. Its simplicity is its biggest feature, as almost all components rely only on a single `.vue` file, without depending on too much other code. 

> ⚠️ This component library is still under construction and is currently only suitable for learning purposes.

## Usage


```
pnpm add unocss unocss-ui @unocss/reset
```

Add `unocss-ui` in your main entry file.


```ts
// main.ts
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

### Project Structure

```bash
unocss-ui-monorepo
├── demo # testing build package
│   ├── package.json
│   └── ...
├── example # real-time preview
│   ├── package.json
│   └── ...
├── packages
│   ├── components # source code of components
│   │   ├── package.json
│   │   └── ...
│   ├── preset # extracted preset
│   │   ├── package.json
│   │   └── ...
│   └── unocss-ui # entry file of the project
│       ├── package.json
│       └── ...
├── package.json # monorepo root package.json
├── pnpm-workspace.yaml
└── ...
```

The outermost root module is unocss-ui-monorepo, which contains the following sub-modules:

- `example`: For real-time preview during component development, as well as a showcase project
- `demo`: For testing whether the packaged component package is normal (cannot be used for development preview, because the imported package is after packaging)
- `@unocss-ui/components`: Source code of the components
- `@unocss-ui/preset`: The UnoCSS preset extracted for the component library's own needs
- `unocss-ui`: The project's entry file, referencing both @unocss-ui/components and @unocss-ui/preset