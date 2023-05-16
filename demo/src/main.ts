import '@unocss/reset/tailwind.css'
import '@unocss-ui/components/style.css'
import 'uno.css'

import unocssui from '@unocss-ui/components'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(unocssui)
app.mount('#app')
