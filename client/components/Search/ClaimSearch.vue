<style lang="less" scoped>
.claim {
  padding: 3px 5px;
  text-transform: uppercase;
  font-size: 13px;
}
td {
  white-space: nowrap;
}
</style>
<template>
<div class="mb-5"> 
<SearchBar 
  v-model="searchInput"   
  @search="search"         
/>

<div class="results-container mb-3" v-if="Object.keys(results).length !== 0">
  <div class="table-responsive">
    <table class="table table-striped mb-0">
      <thead>
        <tr>
          <th></th>
          <th>Athlete ID</th>
          <th>Athlete Name</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in filtered">

          <td> 
            <div class="claim btn btn-primary" @click="claim(result.athlete_id)">
              Claim
            </div>
          </td>

          <td> 
            <a 
              v-if="result.athlete_id" 
              :href="'/athlete/' + result.athlete_id" 
              target="_blank"
            >
              {{ result.athlete_id }}
              &nbsp;<fa icon="external-link-alt"></fa>
            </a>
          </td>

          <td>
            {{ result.athlete }}
          </td>

          <td>
            <a 
              v-if="result.team_id" 
              :href="'/team/' + result.team_id" 
              target="_blank"
            >
              {{ result.team }}
              &nbsp;<fa icon="external-link-alt"></fa>
            </a>
            <span v-if="!result.team_id">{{ result.team }}</span>
          </td>   
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
import _ from 'underscore'
let Pagers = () => import('./Pagers')
let SearchBar = () => import('./SearchBar')

import search from '~/mixins/search'
export default {
  created() {
    if (this.user.athlete_id) this.$router.push('/welcome')
    this.searchInput = this.user.name ? this.user.name.toLowerCase() : ""
    this.search()
  },
  data () {
    return {
      filtered: []
    }
  },
  methods: {
    claim: async function(id) {
      this.$axios.$post('user/claim/' + this.user._id + '/' + id)
      .then(async (res) => {
        await this.$store.dispatch('auth/fetchUser')
        this.$router.push('/welcome')
      })
    }
  },
  computed: {
    user: function() {
      return this.$store.state.auth.user
    }
  },
  mixins: [search], 
  components: { SearchBar, Pagers }, 
  watch: {
    results: function(val) {
      let filtered = _.uniq(val, (x) => {
        return [ x.athlete_id, x.team, x.athlete ].join()
      })
      this.filtered = filtered
    }
  }
}
</script>