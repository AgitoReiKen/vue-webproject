import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(VueCookies, { expires: '7d', httponly: true })
app.use(createPinia())
app.use(router)
app.mount('#app')
