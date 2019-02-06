<template>
<div>

<form class="search-form mb-3" @submit.prevent="search(false); currentPage = 1">
  <div class="input-group">
    <input 
      type="text" 
      placeholder="search" 
      v-model="searchInput" 
      class="form-control"
      @keyup="search(true); currentPage = 1"
    />
    <div class="input-group-append">
      <span class="input-group-text">
        <fa icon="search" @click="search(false); currentPage = 1"></fa>
      </span>
    </div>
  </div>
</form>

<h3 v-if="Object.keys(results).length === 0" class="no-results pt-3">No search results</h3>

<div class="results-container mb-2" v-if="Object.keys(results).length !== 0">
  <div class="table-responsive">
    <table class="table table-striped mb-0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Race</th>
          <th>Time</th>
          <th>Team</th>
          <th class="author-data-header">
            <span class="fas fa-user"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results">

          <td>
            <a v-if="result.athlete_id" :href="'/athlete/' + result.athlete_id">
              {{ result.athlete }}
            </a>
            <span v-if="!result.athlete_id">{{ result.athlete }}</span>
          </td>

          <td>
            <nuxt-link :to="'/races/' + result.race_id">
              {{ result.race }}
            </nuxt-link>
          </td>

          <td class="data time-data">
            {{ result.time }} 
            &nbsp;
          </td>
          <td>
            <a v-if="result.team_id" :href="'/team/' + result.team_id">
              {{ result.team }}
            </a>
            <span v-if="!result.team_id">{{ result.team }}</span>
          </td>   
          <td>{{ result.user }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="btn-group-wrap pb-4" v-if="Object.keys(results).length !== 0 && !lastPage">
  <div class="btn-group pager" role="pager" aria-label="Pager">
    <button type="button" class="btn btn-default" v-if="currentPage > 1" @click="prev()">Prev</button>
    <button type="button" class="btn btn-default" v-if="!lastPage" @click="next()">Next</button>
  </div>
</div>

</div>
</template>
<script>
export default {
  props: ['searchInput', 'currentPage'],
  data() {
    return {
      results: {}
    }
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