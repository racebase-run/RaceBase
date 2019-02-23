<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

.shoe {
  width: 25px;
}

.labels {
  border-bottom: 1px solid @ultra-light-grey;
  .col {
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
  }
}

.sleep {
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  .fa-bed {
    font-size: 14px;
    margin-right: 2px;
    color: @orange;
  }
}

.week, .week > .col {
  border-style: solid;
  border-color: @ultra-light-grey;
}
.week        { border-width:  0px  0   0    1px }
.week > .col { border-width:  0    1px 1px  0   }

.week {

  .mileage {
    font-size: 24px;
    color: @bright-blue;
    text-align: center;
    font-weight: 500;
  }

  label {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 13px;
    color: @label-grey;
    margin-bottom: 0px;
  }

  .pace {
    text-align: center;
    color: @bright-blue;
  }

  .run-count {
    font-size: 15px;
    text-align: center; 
    text-transform: uppercase;
    font-weight: 500;
  }

  .dom {
    position: absolute;
    right: 10px;
    top: 5px;
    font-weight: 500;
    font-size: 15px;
    text-align: right;
    & a {
      color: black;
    }
    &.today {
      text-align: center;
      border-radius: 100px;
      color: white;
      background: @pink;
      padding-bottom: 0px;
      @size: 27px;
      line-height: @size;
      width: @size;
      height: @size;
      & a {
        color: white;
      }
    }
  } 

  .note {
    position: absolute;
    left: 10px;
    top: 5px;
    font-weight: 800; 
    a { color: @bright-blue; }
  }
}

.total {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}

</style>
<template>
<div class="mt-4 mx-auto w-95"> 
  <h4> {{ athlete.name }}'s Logs </h4>
  <div> 
    <object type="image/svg+xml" data="/images/trainer-blue.svg" class="shoe mr-1">
    </object>
    {{ athlete.trainer }}
  </div>
  <div class="calendar container-fluid mt-3 mb-5">
    <div class="labels row py-2"> 
      <div class="col" v-for="day in daysOfWeek"> 
        <strong>{{ day }}</strong>
      </div>
      <div class="col"> <strong> Total </strong> </div>
    </div>
    <div class="week row" v-for="week in weeks">
      <div class="col p-3" v-for="entry in week.data"> 
        <div class="dom ml-auto" :class="entry.today ? 'today' : ''">
          <nuxt-link :to="'/athlete/' + athlete.athlete_id + '/log/' + formatDateUrl(moment(entry.date))">
            {{ entry.dom }}
          </nuxt-link>
        </div>

        <div class="mileage mt-2" v-if="entry.totalMileage > 0"> 
          {{ entry.totalMileage || "0" }}
          <label> mi </label>
        </div>

        <div class="pace mb-1" v-if="entry.totalMileage > 0">
          {{ entry.avgPace || "0:00" }}
          <label> min / mi </label>
        </div>

        <div class="run-count" v-if="entry.runs && entry.totalMileage > 0">
          <div class="mb-2" v-if="entry.runs.length > 1"> {{ entry.runs.length }} runs</div>
        </div>

        <div v-if="entry.sleep" class="sleep"> 
          <fa icon="bed"></fa> {{ entry.sleep }} hrs
        </div>

        <div class="note" v-if="entry.note">
          <nuxt-link :to="'/athlete/' + athlete.athlete_id + '/log/' + formatDateUrl(moment(entry.date))">!</nuxt-link>
        </div>

      </div> 
      <div class="col d-flex total px-2 align-items-center justify-content-center"> 
        <div> {{ week.totalMileage }} <label> mi </label></div>
      </div>
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

let roundToHundredths = function(n) { return Math.round(n * 100) / 100 }
let sumRuns = function(runs) {
  if (!runs) return { totalMileage: 0, totalElev: 0, totalTime: "0:00" }
  var totalMileage = 0
  var totalElev = 0
  var totalTime = 0

  for (var i = 0, l = runs.length; i < l; i++ ) {
    totalMileage += runs[i].distance || 0
    totalElev += runs[i].elevationGain || 0
    totalTime += timeStringToDecimal(runs[i].time)
  }
  return { 
    totalMileage: roundToHundredths(totalMileage), 
    totalElev: roundToHundredths(totalElev), 
    totalTime: timeDecimalToString(roundToHundredths(totalTime))
  }
}

let sumWeek = function(week) {
  var total = 0
  for (var i = 0, l = week.length; i < l; i++ ) {
    if (week[i].totalMileage)
      total += week[i].totalMileage || 0
  }
  return Math.round(total * 100) / 100
} 

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
      let endOfWeek = moment().subtract(7*i, 'days').endOf('isoWeek')

      // find corresponding data from entries and put it in its appropriate spot
      let week = Array.apply(null, Array(7)).map((_, j) => {
        let day = moment(endOfWeek).subtract(j, 'days')
        let date = day.format("DD MM YYYY")
        let dom = day.format("DD")

        // mark the entry with the day of the month
        let entry = entries.find(entry => moment(entry.date).format("DD MM YYYY") == date) || {}
        entry.dom = dom

        // set date for each entry 
        entry.date = day.toDate()

        // sum all runs on the entry
        if (entry.runs) {
          let sums = sumRuns(entry.runs)
          entry.totalMileage = sums.totalMileage
          entry.avgPace = getPace(sums.totalTime, sums.totalMileage)
        }

        // mark today's entry
        if (day.format("DD MM YYYY") == moment().format("DD MM YYYY")) 
          entry.today = true

        return entry
      })

      // get mileage total for week
      let totalMileage = sumWeek(week)

      let data = { data: week.reverse(), totalMileage: totalMileage }
      return data

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
    },
    formatDateUrl: function(moment) {
      return formatDateUrl(moment)
    },
    moment: function(date) {
      return moment(date)
    }
  }
}
</script>