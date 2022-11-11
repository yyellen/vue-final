import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingCircle', Loading)
app.mount('#app')
