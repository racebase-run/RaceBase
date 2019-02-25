<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5 mt-4">
  <h1 v-if="results.length != 0" v-cloak> 
    {{ teamName }} 
    <small>Team Results</small>
  </h1>
  <h1 v-else>There is no team with that ID!</h1>

  <div class="d-flex align-items-center mb-2">
    <h5 class="mr-4 mb-0"> @{{ teamId }} </h5>
    <nuxt-link :to="'/team/' + teamId + '/schedule'">
      <fa icon="calendar-alt"></fa> Meet Schedule
    </nuxt-link>
  </div>

  <div v-if="results.length != 0" class="btn-group-wrap team-dropdowns">

    <div class="btn btn-default" @click="showAthletes = !showAthletes">
      Athletes
      <span  v-show="!showAthletes" key="down-arrow">
        <fa icon="chevron-circle-down"></fa>
      </span>
      <span v-show="showAthletes" key="up-arrow">
        <fa icon="chevron-circle-up"></fa>
      </span>
    </div>

    <div class="btn-group dropdown-btn-group">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Year
      </button>
      <ul class="dropdown-menu dropdown-menu-right">
        <li v-for="year in years">
          <nuxt-link
            class="dropdown-item"
            :to="{ 
              params: { 
                year: year, 
                gender: curGender || 'mens' 
              } 
            }"
          >
            {{ year }}
          </nuxt-link>
        </li>
      </ul>
    </div>

      <gender-picker 
        class="ml-1"
        v-if="results.length != 0"
        :gender="curGender"
      />

  </div>

  <div class="card p-3" v-if="showAthletes">
    <h4>Athletes</h4>
    <div class="panel-body">
      <div class="row">
        <div class="col-sm-6">
          <ul class="list-group">
            <li><b>{{ (curGender == 'mens') ? "Mens" : "Womens" }}</b></li>
            <li v-for="athlete in athletes">
              <nuxt-link v-if="athlete.athlete_id" :to="'/athlete/' + athlete.athlete_id">{{ athlete.athlete }}</nuxt-link>
              <span v-if="!athlete.athlete_id">{{ athlete.athlete }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="panel panel-default panel-no-results" v-if="results.length == 0">
    <div class="panel-body">
      No results!
    </div>
  </div>

  <div class="results-container mb-4 mt-3" v-for="event in results">
    <h5>
      <a :href="'/races/' + event[0].race_id">
        {{ event[0].race }}
      </a>
    </h5>
    <div>{{ event[0].event }}</div>
    <div v-if="event[0].date" class="mb-3"> {{ event[0].date }}</div>
    <div class="table-responsive">
      <table class="table database table-striped mb-0">

        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th class="author-data-header">
              <fa icon="user"></fa>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="result in event">          
            <td class="data place-data">
              {{ result.place }}
            </td>

            <td class="data name-data">
              <a v-if="result.athlete_id" :href="'/athlete/' + result.athlete_id">
                {{ result.athlete }}
              </a>
              <span v-if="!result.athlete_id">
                {{ result.athlete }}
              </span>
            </td>

            <td class="data time-data">
              {{ result.time }}
              &nbsp;
              <fa icon="check" class="verified-data" v-if="result.verified"></fa>
            </td>

            <td class="data author-data">
              {{ result.user }}
            </td>
          </tr>
        </tbody>
      </table>
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
const GenderPicker = () => import('~/components/GenderPicker')
export default {
  components: {
    GenderPicker
  },
  head () {
    return {
      title: this.teamName + ' - RaceBase', 
      meta: [{
        hid: "OpenGraph Title", 
        property: "og:title", 
        content: this.teamName + " - Team Results"
      }, {
        hid: "OpenGraph Image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/team.png'
      }, {
        hid: 'Description', 
        name: 'description', 
        content: "View " + this.teamName + "'s results on RaceBase, the Internet's first community sourced results database"
      }, {
        hid: "OpenGraph Description", 
        property: 'og:description', 
        content: "View " + this.teamName + "'s race results on RaceBase, the Internet's first community sourced results database"
      }]
    }
  },
  data () {
    return {
      showAthletes: false,
    }
  }, 
  async asyncData ({ $axios, params, redirect }) {
    let teamId = params.id
    let curGender = params.gender || "mens"

    let years = await $axios
                      .$get(
                            'result/list/team/' 
                            + teamId 
                            + '/' 
                            + curGender
                            + '/years'
                      )

    if (!years || !years.length)
      redirect('/team/notfound')

    let curYear = params.year || years[0]

    if (!years.includes(curYear)) 
      curYear = years[0]

    let resultsData = await $axios
                        .$get(
                             'result/list/team/' 
                             + teamId 
                             + '/' 
                             + curYear 
                             + '/' 
                             + curGender
                        )


    if (!resultsData)
      redirect('/notfound')

    let results = _.groupBy(_.sortBy(resultsData, 'place'), 'event')

    let athletes = removeDuplicates(resultsData, 'athlete')
    
    let teamName = resultsData[0].team

    return {
      teamId: teamId, 
      years: years, 
      curYear: curYear, 
      results: results, 
      athletes: athletes, 
      teamName: teamName, 
      curGender 
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
                             + '/' 
                             + this.curGender
                        )
      if (resultsData)
        this.results = resultsData
    }
  }, 
  watch: {
    $route: function () {
      this.curGender = this.$route.params.gender || "mens"
      this.curYear = this.$route.params.year || this.years[0]
      this.updateResults()
    } 
  }
};
</script>