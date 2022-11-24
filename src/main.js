import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency, date } from './methods/filters'

const app = createApp(App)
// 自定義的屬性名稱前方加上$，避免和區域元件內的變數產生衝突
app.config.globalProperties.$filters = {
  currency,
  date
}
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingCircle', Loading)
app.mount('#app')
