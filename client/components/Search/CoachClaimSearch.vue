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
          <th>Team ID</th>
          <th>Team Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in filtered">

          <td> 
            <button class="claim btn btn-secondary" v-if="result.taken" disabled>
              Taken
            </button>
            <div class="claim btn btn-primary" @click="claim(result.team_id)">
              Claim
            </div>
          </td>

          <td> 
            <a 
              v-if="result.team_id" 
              :href="'/athlete/' + result.team_id" 
              target="_blank"
            >
              {{ result.team_id }}
              &nbsp;<fa icon="external-link-alt"></fa>
            </a>
          </td>

          <td>
            {{ result.team }}
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
    if (this.user.team_id) this.$router.push('/welcome')
  },
  data () {
    return {
      filtered: []
    }
  },
  methods: {
    claim: async function(id) {
      try {
        let res = await this.$axios.$post('/team/claim/' + id)
        if (res = "Successfully claimed team")
        this.$router.push("/welcome")
      } catch (e) {
        console.log(e.response.data)
      }
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
    results: async function(val) {
      let filtered = _.uniq(val, (x) => {
        return [ x.team ].join()
      })

      for (const team of filtered) {
        try {
          let taken = await this.$axios.$get('/team/public/' + team.team_id)
          if (taken) team.taken = true
        } catch (e) { console.log(e.response.data) }
      }

      this.filtered = filtered
    }
  }
}
</script>