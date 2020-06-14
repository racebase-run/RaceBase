<style scoped>

</style>

<template>
<div>
  
  <div class="w-90 mx-auto">
    <h1 class="mt-4"> Races </h1>

    <div class="results-count mt-2 mb-3">{{ count }} results and counting</div>
  </div>

  <form class="search-form mb-3 w-90 mx-auto" @submit.prevent="search(false)">
    <div class="input-group search home-search">
      <input 
        type="text" 
        class="form-control" 
        v-model="searchInput"
        placeholder="Search" 
        @keyup="search(true)"
      />
      <span class="input-group-append" id="basic-addon2">
        
        <span class="input-group-text">
          <fa icon="search" @click="search(false)"></fa>
        </span>

      </span>
    </div>
  </form>

  <RaceTable
    :races="races"
    :lastPage="lastPage"
    :currentPage="currentPage"
  />

</div>
</template>

<script>
const RaceTable = () => import('~/components/RaceTable')

export default {
  components: {
    RaceTable
  },
  head () {
    return {
      title: "All Races - RaceBase", 
      meta: [{
        hid: "OpenGraph Image", 
        property: "og:image",
        content: process.env.ROOT_URL + '/images/opengraph/races.png'
      }, {
        hid: "OpenGraph Title", 
        property: "og:title", 
        content: "All Races"
      }]
    }
  },
  data () {
    return {
      searching: false, 
      typing: false,
      searchInput: ""
    }
  },
  async asyncData ({ $axios, params }) {
    let pageNum = params.page || "1"
    let page = await $axios.$get('race/list/' + pageNum + '/10')
    let count = await $axios.$get('result/count')

    count = Number(count.count).toLocaleString()

    let lastPage = page.page == page.pages

    return {
      races: page.docs, 
      count: count, 
      currentPage: pageNum,
      lastPage: lastPage
    }
  },
  methods : {
    search: async function(typing) {
      if (!this.searchInput) {
        let page = await this.$axios.$get('race/list/' + this.currentPage + '/10')
        this.races = page.docs
        this.lastPage = page.page == page.pages
      } else {
        this.$axios.$get('search/races/' + this.searchInput)
        .then((res) => {
          if (!typing || res.length > 0) {
            this.races = res; 
            this.searching = true; 
          } else {
            this.searching = false;
          }
        });   
      }
    }
  }
}
</script>

