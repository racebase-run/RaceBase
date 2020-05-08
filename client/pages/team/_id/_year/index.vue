<style lang="less" scoped> 
h4, h5 {
  font-weight: 600;
  text-transform: uppercase;
}

.race-title {
  font-weight: 600; 
  font-size: 23px; 
}

.header-link {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
}
</style>

<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-4 mt-4">
  <h5 class="mb-3"> 
    <small>{{curYear}} Team Results <fa :icon="['fas', 'users']"></fa> </small>
  </h5>

  <div class="d-flex align-items-center mb-2">
    <h4 class="mr-4 mb-0 pb-0"> @{{ teamId }} </h4>
    <nuxt-link :to="'/team/' + teamId + '/schedule'" class="btn btn-default header-link mr-2">
      <fa icon="calendar-alt"></fa> Meet Schedule
    </nuxt-link>
    <nuxt-link class="btn btn-default header-link mr-2" :to="'/team/' + teamId + '/' + curYear + '/athletes'"> 
      Athletes
    </nuxt-link>
    <button type="button" class="btn btn-default dropdown-toggle header-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Year
    </button>
    <ul class="dropdown-menu dropdown-menu-right">
      <li v-for="year in years">
        <nuxt-link
          class="dropdown-item"
          :to="{ 
            params: { 
              year: year, 
            } 
          }"
        >
          {{ year }}
        </nuxt-link>
      </li>
    </ul>
  </div>

  <div class="results-container mb-4 mt-3" v-for="id in race_ids">
    <div class="race-title">
      <a :href="'/races/' + id">
        {{ races[id].name }}
      </a>
    </div>
    <div v-for="event in Object.keys(races[id].events)">
      <nuxt-link :to="'/races/' + id + '/' + event + '/team/' + teamId"> 
        {{ races[id].events[event].name }}
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script>

let removeDuplicates = function(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

import _ from 'underscore'
export default {
  head () {
    return {
      title: this.teamId + ' - RaceBase', 
      meta: [{
        hid: "OpenGraph Title", 
        property: "og:title", 
        content: this.teamId + " - Team Results"
      }, {
        hid: "OpenGraph Image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/team.png'
      }, {
        hid: 'Description', 
        name: 'description', 
        content: "View " + this.teamId + "'s results on RaceBase, the Internet's first community sourced results database"
      }, {
        hid: "OpenGraph Description", 
        property: 'og:description', 
        content: "View " + this.teamId + "'s race results on RaceBase, the Internet's first community sourced results database"
      }]
    }
  },
  async asyncData ({ $axios, params, redirect }) {
    let teamId = params.id;

    let years = await $axios.$get('team/' + teamId + '/years');
    let curYear = params.year || years[0];

    let races = await $axios.$get('team/' + teamId + '/year/' + curYear + '/races'); 

    if (!races)
      redirect('/notfound')
    
    let athletes = []; 

    return {
      years: years, 
      curYear: curYear, 
      athletes: athletes, 
      teamId: teamId, 
      races: races,
      race_ids: Object.keys(races)
    }
  },
  methods : {
    updateResults: async function() {
      let resultsData = await this.$axios
        .$get(
             'result/list/team/' 
             + this.teamId 
             + '/' 
             + this.curYear 
        )
      if (resultsData)
        this.results = resultsData
    }
  }, 
  watch: {
    $route: function () {
      this.curYear = this.$route.params.year || this.years[0]
      this.updateResults()
    } 
  }
};
</script>