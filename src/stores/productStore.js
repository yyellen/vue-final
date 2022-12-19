import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'

const status = statusStore()

export default defineStore('productStore', {
  state: () => {
    return {
      products: []
    }
  },
  getters: {
    sortProducts: state => state.products.sort((a, b) => a.price - b.price)
  },
  actions: {
    // this
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url).then(response => {
        this.products = response.data.products
        // console.log('products:', response)
        this.stock = this.products.map(item => item.id)
        status.isLoading = false
      })
    }
  }
})
