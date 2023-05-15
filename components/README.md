# unocss-ui

This is a Vue3 component library based on Unocss. Its simplicity is its biggest feature, as almost all components rely only on a single .vue file, without depending on too much other code. 

⚠️ This component library is still under construction and is currently only suitable for learning purposes.

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

## Development

```
git clone https://github.com/cherryful/unocss-ui
cd unocss-ui
pnpm install
```


Develop and preview components.

```
pnpm dev:example
```

Build and preview.

```
pnpm build:npm
pnpm dev:demo
```