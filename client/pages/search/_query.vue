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

<ResultsSearch v-model="searchInput" :currentPage="currentPage"/>

</div>
</template>

<script>
const ResultsSearch = () => import('~/components/Search/ResultsSearch')
export default {
  components: { ResultsSearch },
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
      searchInput: query
    }
  }
}
</script>