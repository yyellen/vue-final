import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => {
    return {
      isLoading: false,
      cartLoadingItem: ''
    }
  }
})
