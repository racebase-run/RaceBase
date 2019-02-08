<template>
<div>

<SearchBar
  v-model="interface" 
  @search="search"         
/>

<h3 v-if="Object.keys(results).length === 0" class="no-results pt-3">
  <span v-if="interface">No search results</span>
  <span v-else>Type a query above to see results</span>
</h3>

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
            <fa icon="user"></fa>
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

<Pagers
  v-if="Object.keys(results).length !== 0 && !lastPage"
  :currentPage="currentPage"
  @prev="prev" @next="next"
  :lastPage="lastPage"
/>

</div>
</template>
<script>
const SearchBar = () => import('./SearchBar')
const Pagers = () => import('./Pagers')
import search from '~/mixins/search'
export default {
  props: ['value'],
  mixins: [search],
  components: { SearchBar, Pagers },
  watch: { 
    interface: function(newVal) {
      this.searchInput = this.interface || ""
    }
  }, 
  created () {
    this.searchInput = this.value
    if (this.value)
      this.search()
  },
  computed: {
    interface: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>