import './assets/main.css'
import { MotionPlugin } from "@vueuse/motion";
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
const app = createApp(App)
const pinia =createPinia()
app.use(router)
app.use(MotionPlugin)
app.use(pinia)
app.mount('#app')
