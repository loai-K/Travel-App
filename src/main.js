import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'
import AppLink from "@/components/AppLink.vue";

createApp(App)
    .component('AppLink', AppLink)
    .use(router)
    .use(createPinia())
    .mount('#app')
