<template>
  <div>Dashboard</div>
</template>

<script>
export default {
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    console.log(token)
    this.axios.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    console.log(api)
    this.axios.post(api, this.user).then(res => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
