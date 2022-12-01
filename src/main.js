import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
// 自定義的屬性名稱前方加上$，避免和區域元件內的變數產生衝突
app.config.globalProperties.$filters = {
  currency,
  date
}
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState

app.use(VueAxios, axios)
app.use(router)
app.component('LoadingCircle', Loading)
app.mount('#app')
