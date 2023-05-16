import '@unocss/reset/tailwind.css'
import 'uno.css'

import { createApp } from 'vue'

// highlight.js
import './styles/highlight.js.css'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import xml from 'highlight.js/lib/languages/xml'
import hljs from 'highlight.js/lib/core'

// use code, for dev
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
