<template>
  <div>
    <Navbar />
    <div class="container-fluid mt-3 position-relative">
      <ToastMessages />
      <router-view />
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import Navbar from '@/components/NavBar.vue'

export default {
  components: {
    Navbar,
    ToastMessages
  },
  // provide讓內層元件都可以使用外層的功能，不需要重複注入
  provide() {
    return {
      emitter
    }
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.axios.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.axios.post(api, this.user).then(res => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
