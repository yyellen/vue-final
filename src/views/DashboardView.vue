<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'

export default {
  components: {
    Navbar
  },
  created () {
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
