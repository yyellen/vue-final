<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ 'disabled': pages.has_pre === false }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="prePage(prepage)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ 'disabled': pages.has_next === false }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage(nextpage)">
          <!-- 會跳到第1頁(預設) -->
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages', 'prepage', 'nextpage'], // pagination
  methods: {
    updatePage(page) {
      this.$emit('emit-page', page)
    },
    prePage(prepage) {
      this.$emit('emit-prepage', prepage)
    },
    nextPage(nextpage) {
      this.$emit('emit-nextpage', nextpage)
    }
  }
}
</script>
