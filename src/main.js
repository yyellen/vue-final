import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency } from './methods/filters'

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency
}
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingCircle', Loading)
app.mount('#app')
