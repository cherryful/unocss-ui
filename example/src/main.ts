import '@unocss/reset/tailwind.css'
import 'uno.css'

import { createApp } from 'vue'

import unocssui from '../../packages/components/src/index'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(unocssui)
app.use(router)
app.use(store)
app.mount('#app')
