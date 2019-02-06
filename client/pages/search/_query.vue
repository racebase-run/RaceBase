<style lang="less" scoped>

table td {
  white-space: nowrap;
}

strong {
  font-weight: 600;
}

</style>

<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">
<h1 class="mt-4 mb-3"> Results Search</h1>

<div class="mb-3">
  Want to search for a <strong>Race</strong> instead? 
  Click <nuxt-link to="/races/all"> here </nuxt-link>
</div>

<SearchResults :searchInput="searchInput" :currentPage="currentPage"/>

</div>
</template>

<script>
const SearchResults = () => import('~/components/SearchResults')
export default {
  components: { SearchResults },
  data () {
    return {
      results: {}, 
      searchInput: "", 
      lastPage: false, 
      currentPage: 1
    }
  }, 
  asyncData ({ params }) {
    let query = params.query ? decodeURI(params.query) : ""
    return {
      query : query, 
      searchInput: query
    }
  },
  created () {
    if (this.query)
      this.search()
  }, 
  methods : {
    search: async function() {
      if (this.searchInput != "") {

        let page = await this.$axios.get('search/results/' 
                                          + this.searchInput 
                                          + '/' 
                                          + this.currentPage 
                                          + '/10')


        this.results = page.data.docs
        this.lastPage = page.data.lastPage
      } 
      else
        this.results = {}
    }, 
    next: function() {
      this.currentPage++
      this.search()
    },
    prev: function() {
      this.currentPage--
      this.search()
    }
  }
}
</script>