import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'

const status = statusStore()

export default defineStore('cartStore', {
  state: () => {
    return {
      cart: {}
    }
  },
  actions: {
    // this
    addToCart(id) {
      status.cartLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      axios.post(url, { data: cart }).then(response => {
        status.cartLoadingItem = ''
        // if (this.$httpMessageState(response, '加入購物車')) this.getCart()
        this.getCart()
      })
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(url).then(response => {
        this.cart = response.data.data
        status.isLoading = false
      })
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      status.isLoading = true
      status.cartLoadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart }).then(response => {
        console.log(response)
        this.getCart()
        status.cartLoadingItem = ''
        status.isLoading = false
      })
    },
    removeCartItem(id) {
      status.cartLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      status.isLoading = true
      axios.delete(url).then(response => {
        // if (this.$httpMessageState(response, '移除購物車品項')) this.getCart()
        this.getCart()
        status.cartLoadingItem = ''
        status.isLoading = false
      })
    }
  }
})
