import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('productStore', {
  state: () => {
    return {
      products: []
    }
  },
  actions: {
    // this
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      // this.isLoading = true
      axios.get(url).then(response => {
        this.products = response.data.products
        // console.log('products:', response)
        this.stock = this.products.map(item => item.id)
        // this.isLoading = false
      })
    }
  }
})
