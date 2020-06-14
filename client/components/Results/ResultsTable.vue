<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";

h4 {
  font-size: 16px;
  text-transform: uppercase;
}

.table-responsive {
  overflow-x: auto;
}

.team-toggle {
  color: @blue;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
}

td.team {
  font-size: 20px;
}

</style>

<template>
<div class="pb-5 mt-2">

  <h4 class="mb-2" v-if="results.length > 0">
    {{ event.name }}
  </h4>

  <div class="mb-3 team-toggle">
    <nuxt-link :to="'/races/' + id + '/' + event._id + '/team/all'"> Show Team Scores </nuxt-link>
  </div>

  <div class="results-container pb-0" 
    v-if="results.length > 0 && !loading" v-cloak>

    <div class="table-responsive">
      <table class="table table-striped mb-0">

        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Team</th>
            <th>History</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="result in results">

            <td class="data place-data nowrap">
              {{ result.place }}
            </td>

            <td class="nowrap">
              <nuxt-link :to="'/result/edit/' + result._id" v-if="$store.state.auth.user._id == result.user_id || !result.user_id">
                <fa icon="pencil-alt" class="pencil mr-1"></fa>
              </nuxt-link>
              <router-link v-if="result.athlete_id" :to="'/athlete/' + result.athlete_id">
                {{ result.athlete }}
              </router-link>
              <span v-if="!result.athlete_id">
                {{ result.athlete }}
              </span>
            </td>

            <td class="data time-data nowrap">
              {{ result.time }} 
              <fa icon="check" class="verified-data" v-if="result.verified"></fa>
            </td>

            <td class="data team-data nowrap">
              <router-link 
                v-if="result.team_id" 
                :to="'/team/' + result.team_id">
                {{ result.team }}
              </router-link>
              <span v-if="!result.team_id">{{ result.team }}</span>
            </td>

            <td class="data nowrap"> 
              <nuxt-link :to="'/result/history/' + result._id"> 
                View
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>

  <div class="panel panel-default panel-no-results" 
    v-if="results.length < 1 && !loading" v-cloak>
    <div class="panel-body">
      No results yet!
    </div>
  </div>

  <h4 class="mt-3" v-if="loading">Loading...</h4>

</div>
</template>

<script>
export default {
  props: ['event', 'id', 'results'],
  data () {
    return {
      loading: false
    }
  }
};
</script>