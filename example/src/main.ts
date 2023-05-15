import '@unocss/reset/tailwind.css'

// import 'unocss-ui/style.css' // for 1.
import 'uno.css'

import { createApp } from 'vue'

// highlight.js
import './styles/highlight.js.css'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import xml from 'highlight.js/lib/languages/xml'
import hljs from 'highlight.js/lib/core'

// 1. use package, for prod
// import unocssui from 'unocss-ui'

// 2. use code, for dev
import unocssui from '../../packages/components/src/index'

import App from './App.vue'
import router from './router'
import store from './store'

hljs.registerLanguage('xml', xml)

const app = createApp(App)
app.use(unocssui)
app.use(hljsVuePlugin)
app.use(router)
app.use(store)
app.mount('#app')
