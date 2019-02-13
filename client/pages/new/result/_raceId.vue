<template>
<div class="w-95 mx-auto mt-4"> 
  <h4> 1. Find a race </h4>
  <div class="mb-3"> Search for your race to add your result to. </div>
  <SearchBar v-model="searchInput" @search="search"/>
  <div v-for="race in races">
    {{ race.name }} 
    <div class="btn btn-outline-primary btn-small" @click="selectRace(race._id)">
      Select
    </div>
  </div>
  <ResultEditor v-if="race.name" :race="race" :addMode="true"/>
</div>
</template>

<script>
const SearchBar = () => import('~/components/Search/SearchBar')
const ResultEditor = () => import('~/components/ResultEditor')
export default {
  components: { ResultEditor, SearchBar }, 
  async asyncData ({ params, $axios }) {
    let race = null
    if (params.raceId)
      race = await $axios.$get('/race/' + params.raceId)

    return {
      race: {},
      searchInput: "", 
      races: {}
    }
  }, 
  methods : {
    search: async function(typing) {
      if (this.searchInput) {
        this.races = await this.$axios.$get('search/races/' + this.searchInput)
      }
    }, 
    selectRace: async function(id) {
      this.raceId = id
      this.race = await this.$axios.$get('/race/' + id) || {}
    }
  }
}
</script>