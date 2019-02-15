<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

.event {
  padding: 3px 8px;
  font-size: 16px;
  .fa-check {
    font-size: 12px;
  }
}
label {
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-right: 10px;
  color: @dark-grey;
  font-size: 14px;
}
</style>
<template>
<div class="w-95 mx-auto mt-4 mb-5"> 
  <div class="mb-3"> 
    To create a result, follow the <strong>five simple steps</strong> below. 
  </div>
  <h4> 1. Find a race </h4>
  <div class="mb-3"> Search for a race to add your result to. </div>
  <SearchBar v-model="searchInput" @search="search"/>
  <div v-for="race in races" class="d-flex align-items-center mb-2">
    <div
      v-if="curRace._id == race._id" 
      class="btn btn-primary btn-small mr-3" 
    >
      Selected <fa icon="check"></fa>
    </div>
    <div
      v-else
      class="btn btn-outline-primary btn-small mr-3" 
      @click="selectRace(race._id)"
    >
      Select
    </div>
    <nuxt-link :to="'/races/' + race._id">
      {{ race.name }}
    </nuxt-link>
    &nbsp; on {{ race.date }}
  </div>
  <div> 
    Can't find the race you're looking for? Create one 
    <strong><nuxt-link to="/user/content"> here </nuxt-link></strong>
  </div>
  
  <div class="mt-4" v-if="curRace.name">
    <h4> 2. Choose your event </h4>
    <div>
      <label class="form-check-label mb-3">
        <input 
          v-model="womens"
          :value="true" 
          type="radio"
        /> Women's &nbsp; 

        <input 
          v-model="womens"
          :value="false" 
          type="radio"
        /> Men's
      </label>
    </div>
    
    <div class="d-flex align-items-center mb-3" v-if="events">
      <div 
        v-for="event in events" 
        class="event btn d-inline-block mr-2"
        :class="result.event == event ? 'btn-primary' : 'btn-outline-dark'"
        @click="result.event != event ? selectEvent(event) : result.event = ''"
      >
        {{ event }} 
        <fa class="ml-1" icon="check" v-if="result.event == event"></fa>
      </div>
      <div>
        <div class="input-group">
          <input
            type="text"
            v-model="newEvent"
            placeholder="Add your own..."
            class="form-control" />
          <div class="input-group-append">
            <button 
              class="btn btn-outline-primary" 
              type="button" 
              @click="result.event = newEvent"
              v-if="newEvent != result.event || !result.event"
            >
              <fa icon="plus"></fa>
            </button>
            <button 
              class="btn btn-primary" 
              type="button" 
              @click="result.event = ''"
              v-else
            >
              <fa icon="check"></fa>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="mt-4" v-if="result.event">
    <h4> 3. Find your team </h4>
    <SearchBar v-model="teamSearchInput" @search="teamSearch"/>
    <div>
      <div v-for="team in teams" class="mb-2 d-flex align-items-center">
        <div 
          class="btn btn-outline-primary btn-small" 
          @click="selectTeam(team)" 
          v-if="result.team != team.team">
          Select
        </div>
        <div 
          class="btn btn-primary btn-small" 
          @click="removeTeam" 
          v-else>
          Selected <fa icon="check"></fa>
        </div>
        <nuxt-link :to="'/team/' + team.team_id" class="ml-2">
          {{ team.team }}
        </nuxt-link>
      </div>
      <div> 
        Can't find your team? Create a new one: 
        <div class="mt-3 mb-2 d-flex align-items-center w-50">
          <input 
            type="text" 
            class="form-control flex-shrink-1 mr-2" 
            v-model="newTeam.name"
            placeholder="Team name"/>
          <input 
            type="text" 
            class="form-control flex-shrink-1 mr-2" 
            v-model="newTeam.team_id"
            placeholder="Team ID"/>
          <div 
            class="btn flex-shrink-0" 
            :class="customTeam ? 'btn-primary' : 'btn-outline-primary'"
            @click="createCustomTeam"
          > 
            Add Team <fa v-if="customTeam" icon="check"></fa>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-4" v-if="result.team">
    <h4> 4. Enter a few details </h4>
    <form class="d-flex w-75 align-items-center"> 
      <label class="flex-shrink-0"> Finishing time </label>
      <input 
        type="text" 
        v-model="result.time"
        class="form-control flex-shrink-1 mr-3" 
        placeholder="15:30, 98:10..."
      />
      <label class="flex-shrink-1"> <fa icon="trophy"></fa> </label>
      <input 
        type="number" 
        v-model="result.place"
        class="form-control flex-shrink-1" 
        placeholder="Place"
      />
    </form>
  </div>

  <div class="mt-4" v-if="result.time && result.place">
    <h4> 5. Who's result is this?  </h4>
    <div>
      <label class="form-check-label mb-3">
        <input 
          v-model="mine"
          :value="true" 
          type="radio"
        /> Mine &nbsp; 

        <input 
          v-model="mine"
          :value="false" 
          type="radio"
        /> Someone else's
      </label>
    </div>
    
    <div v-if="!mine" class="d-flex w-75 align-items-center">
      <label class="flex-shrink-0"> Athlete's name </label>
      <input 
        type="text" 
        class="form-control flex-shrink-1 mr-3" 
        placeholder="John Appleseed"
        v-model="result.athlete"
      />
      <label class="flex-shrink-0"> Athlete's ID </label>
      <input 
        type="text" 
        class="form-control flex-shrink-1" 
        placeholder="jappleseed"
        v-model="result.athlete_id"
      />
    </div>

  </div>

    <div class="progress mt-4">
      <div class="progress-bar" role="progressbar" :style="'width: ' + (step / 5) * 100 + '%'" 
      :aria-valuenow="step" aria-valuemin="0" aria-valuemax="5"></div>
    </div>
    <div class="mt-2"> <strong>{{ step }} of 5</strong> completed</div>

  <div 
    class="btn btn-primary mt-3" 
    @click="createResult"
    v-if="result.time && result.place"
  > 
    Create Result 
  </div>

</div>
</template>

<script>
import _ from 'underscore'
const SearchBar = () => import('~/components/Search/SearchBar')
const ResultEditor = () => import('~/components/ResultEditor')
export default {
  components: { ResultEditor, SearchBar }, 
  async asyncData ({ params, $axios, store }) {
    let user = store.state.auth.user
    let curRace = {}
    let raceName = ""
    let events = {}
    if (params.raceId) {
      curRace = await $axios.$get('/race/' + params.raceId)
      raceName = curRace.name
      events = await $axios.$get('/race/' + params.raceId + '/mens/events')
    }

    return {
      mine: true, 
      curRace: curRace,
      teamSearchInput: "",
      searchInput: "", 
      races: {}, 
      teams: {},
      womens: false, 
      events: events, 
      user: user,
      newEvent: "",
      newTeam: {
        team_id: "",
        team: ""
      },
      result: {
        time: "",
        athlete: "",
        athlete_id: "",
        race: raceName,
        race_id: params.raceId, 
        womens: false,
        team: "",
        team_id: "",
        place: null,
        event: "",
        date: ""
      }
    }
  }, 
  methods : {
    search: async function() {
      if (this.searchInput) 
        this.races = await this.$axios.$get('search/races/' + this.searchInput)
    }, 
    teamSearch: async function() {
      if (this.teamSearchInput) {
        let teams = await this.$axios.$get('search/results/' + this.teamSearchInput + '/1/50')
        this.teams = _.uniq(teams.docs, 'team')
      } else {
        this.teams = {}
      }
    },
    selectRace: async function(id) {
      this.raceId = id
      this.curRace = await this.$axios.$get('/race/' + id) || {}
      this.events = await this.$axios.$get('/race/' + id + '/' + this.gender + '/events')
    }, 
    selectEvent: function(event) {
      this.result.event = event; 
    }, 
    selectTeam: function(team) {
      this.result.team = team.team; 
      this.result.team_id = team.team_id;
    }, 
    createResult: async function() {
      if (this.mine) {
        this.result.athlete = this.user.name
        this.result.athlete_id = this.user.athlete_id
      } 
      this.result.womens = this.womens ? true : false
      this.result.date = this.curRace.date
      let response = await this.$axios.$post('result', this.result)
      if (response) this.$router.push('/new/result/success')
    }, 
    createCustomTeam: function() {
      this.result.team = this.newTeam.name
      this.result.team_id = this.newTeam.team_id
    },
    removeTeam: function() {
      this.result.team = ''
      this.result.team_id = ''
    }
  }, 
  watch: {
    womens: async function() {
      if (this.curRace._id)
        this.events = await this.$axios.$get('/race/' + this.curRace._id + '/' + this.gender + '/events')
    }, 
    curRace: function() {
      this.result.race = this.curRace.name
      this.result.race_id = this.curRace._id
    }
  },
  computed: {
    gender: function() {
      return this.womens ? 'womens' : 'mens'
    }, 
    step: function() {
      if (this.result.place && this.result.time) return 4
      else if (this.result.team) return 3
      else if (this.result.event) return 2
      else if (this.curRace.name) return 1
      else return 0
    }, 
    customTeam: function() {
      if (this.newTeam.name == this.result.team 
          && this.newTeam.team_id == this.result.team_id)
        return true
      else 
        return false
    }
  }
}
</script>