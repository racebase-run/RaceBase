export default {
  data() {
    return {
      results: {}, 
      query: "", 
      currentPage: 1, 
      lastPage: false, 
      searchInput: ""
    }
  },
  methods : {
    search: async function(paging) {
      if (!paging)
        this.currentPage = 1

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
      this.search(true)
    },
    prev: function() {
      this.currentPage--
      this.search(true)
    }
  }
}