<style lang="less" scoped>
.week, .labels {
  border-bottom: 1px solid black;
}
.labels .col {
  text-align: center;
}
</style>
<template>
<div class="mt-4 mx-auto w-95"> 
  <h4> {{ athlete.name }}'s Logs </h4>
  <div> {{ athlete.trainer }}</div>
  <div> {{ athlete.team_id }}</div>
  <div class="labels row"> 
    <div class="col" v-for="day in daysOfWeek"> 
      <strong>{{ day }}</strong>
    </div>
  </div>
  <div class="week row" v-for="week in weeks">
    <div class="col" v-for="entry in week"> 
      <strong>{{ entry.dom }}</strong>
      <div v-for="run in entry.runs">
        {{ run.distance }} at {{ getPace(run.time, run.distance) }}
      </div>
      Slept {{ entry.sleep || "?" }} hrs
    </div> 
  </div>
</div>
</template>
<script>
let { 
  timeStringToDecimal, 
  timeDecimalToString, 
  formatDateUrl, 
  getDateFromUrl, 
  getPace 
} = require('~/utils/date.js')
import moment from 'moment'
export default {
  async asyncData ({ params, $axios, redirect }) {
    let entries
    try {
      entries = await $axios.$get('/log/athlete/' + params.id + '/month/')
    } catch(err) {
      redirect('/login')
    }

    // get athlete's profile data
    let athlete = await $axios.$get('/user/athlete/' + params.id)

    let mon = moment().startOf('isoWeek')
    let daysOfWeek = Array.apply(null, Array(7)).map((_, i) => {
      return mon.add(1, 'days').format("ddd")
    })

    // create an array of 4 weeks
    let weeks = Array.apply(null, Array(4)).map((_, i) => {
      // get the start of each week
      let startOfWeek = moment(getDateFromUrl(params.date)).subtract(7*i, 'days').startOf('isoWeek')

      // find corresponding data from entries and put it in its appropriate spot
      let week = Array.apply(null, Array(7)).map((_, j) => {
        let day = moment(startOfWeek).subtract(j, 'days')
        let date = day.format("DD MM YYYY")
        let dom = day.format("DD")

        let entry = entries.find(entry => moment(entry.date).format("DD MM YYYY") == date) || {}

        entry.dom = dom

        return entry
      })

      return week.reverse()

    })

    return {
      id: params.id, 
      weeks: weeks, 
      daysOfWeek, daysOfWeek,
      athlete: athlete
    }
  }, 
  methods: { 
    getPace: function(time, distance) {
      return getPace(time, distance)
    }
  }
}
</script>