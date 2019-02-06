<template>
<div class="w-90 mx-auto mt-4"> 
  <h2 class="mb-3"> Claim an Athlete ID </h2>
  <SearchResults :searchInput="searchInput" :currentPage="currentPage"/>
</div>
</template>

<script>
const SearchResults = () => import('~/components/SearchResults')
export default {
  asyncData ({ params }) {
    let query = params.query ? decodeURI(params.query) : ""
    return {
      searchInput: query
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  components: { SearchResults }
}
</script>