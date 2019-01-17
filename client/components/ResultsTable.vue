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
    {{ eventList[eventNum] }}
  </h4>

  <div class="mb-3 team-toggle" v-if="teamResults.length > 0">
    <span
      @click="showTeams = true" 
      v-if="!showTeams"> 
      Show Team Scores 
    </span>
    
    <span 
      @click="showTeams = false" 
      v-if="showTeams"> 
      Hide Team Scores 
    </span>
  </div>

  <div class="results-container pb-0" 
    v-if="results.length > 0 && !loading" v-cloak>

    <div class="table-responsive mb-3" v-if="teamResults && showTeams">
      <table class="table table-striped mb-2">
        <thead>
          <tr> 
            <th> Team </th>
            <th> Athletes </th>
            <th> Score </th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="result in teamResults"> 
            <td class="team">
              <router-link :to="'/team/' + result.team_id">
                {{ result.team }} 
              </router-link>
            </td>
            <td> 
              <div v-for="athlete in result.athletes">
                <router-link :to="'/athlete/' + athlete.athlete_id">
                  {{ athlete.athlete }}
                </router-link>: {{ athlete.place }}
              </div>
            </td>
            <td> {{ result.score }} </td>
          </tr>
        </tbody>

      </table>
    </div>

    <div class="table-responsive">
      <table class="table table-striped mb-0">

        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Team</th>
            <th class="nowrap">
              <fa icon="user"></fa>
            </th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="result in results">

            <td class="data place-data nowrap">
              {{ result.place }}
            </td>

            <td class="nowrap">
              <a v-if="$store.state.auth.user._id == result.user_id || !result.user_id" 
                @click="$emit('openEditWindow', result)">
                <fa icon="pencil-alt"></fa>
              </a>
              &nbsp;
              <router-link v-if="result.athlete_id" :to="'/athlete/' + result.athlete_id">
                {{ result.athlete }}
              </router-link>
              <span v-if="!result.athlete_id">
                {{ result.athlete }}
              </span>
            </td>

            <td class="data time-data nowrap">
              {{ result.time }} 
              &nbsp;
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

            <td class="data author-data nowrap">
              {{ result.user }}
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
  props: ['eventList', 'eventNum', 'id', 'results', 'teamResults'],
  data () {
    return {
      loading: false, 
      showTeams: false
    }
  }
};
</script>