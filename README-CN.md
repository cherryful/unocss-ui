# unocss-ui

[English](./README.md) | 简体中文

> 作者关于组件库的博文介绍：[基于原子化思想的 Vue3 组件库 UnoCSS UI](https://luzhenyu.blog.csdn.net/article/details/130799232)

这是一个基于 UnoCss 的 Vue3 组件库。其最大的特点是简单易用，几乎所有组件都只依赖于一个 `.vue` 文件，不需要太多其他代码的支持。

> ⚠️ 注意：这个组件库仍在开发中，目前仅适用于学习目的。

## 使用


```
pnpm add unocss unocss-ui @unocss/reset
```

在你的主入口文件中添加 `unocss-ui`


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

### 自定义

你可以通过 `theme` 选项来自定义组件库的主题。

> 目前，仅支持自定义颜色，你必须使用调色板中的颜色。

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

## 开发

### 安装依赖

```
git clone https://github.com/cherryful/unocss-ui
cd unocss-ui
pnpm install
```

开发和预览组件库:

```bash
pnpm dev:example
```

### 项目结构

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

最外层的根模块是 `unocss-ui-monorepo`，其中包含了以下子模块：
- `example`：用于开发组件时进行实时预览，以及作为一个示例项目展示
- `demo`：用于测试打包后的组件包是否正常（不能用来做开发时预览，因为导入的是打包后的 package）
- `@unocss-ui/components`：组件的源码
- `@unocss-ui/preset`：根据组件库自身需求抽取出来的 UnoCSS 的预设
- `unocss-ui`：项目的入口文件，在这里引用  `@unocss-ui/components` 和  `@unocss-ui/preset`

