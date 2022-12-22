import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => {
    return {
      isLoading: false,
      cartLoadingItem: '',
      messages: []
    }
  },
  actions: {
    pushMessage(data) {
      const { title, content, style = 'success' } = data
      this.messages.push({ title, content, style })
    }
  }
})
