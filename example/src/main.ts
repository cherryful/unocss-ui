import '@unocss/reset/tailwind.css'
import 'uno.css'

import { createApp } from 'vue'

// use package
import 'unocss-ui/style.css'
import unocssui from 'unocss-ui'

// use code
// import unocssui from '../../packages/components/src/index'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(unocssui)
app.use(router)
app.use(store)
app.mount('#app')
