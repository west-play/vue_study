import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(router).mount('#app')


window.Kakao.init("944384033bdf784cd3996a7efa1b50c0");