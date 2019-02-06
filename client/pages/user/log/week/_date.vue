// pages/user/log/week/_date.vue

<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/basics.less";
@import (reference) "~assets/less/sizes.less";

h1 {
  .name {
    font-weight: 400; 
    color: @bright-blue;
  }
  font-size: 32px;
  font-weight: 500;
}

h2 {
  text-transform: uppercase;
  font-size: 21px;
}

h4 {
  text-transform: uppercase;
  font-size: 14px;
  color: @label-grey;
  font-weight: 400;
  width: 100%;
}

h4 input, .schedule input {
  display: inline-block;
  border: none;
  color: @bright-blue;
  font-size: 14px;
  width: auto;
  padding: 0;
  line-height: 1;
  height: auto;
}

.week {
  padding: 0;
  overflow: hidden;
}

.log-pager.today {
  color: @bright-blue;
}

.day {
  overflow: hidden;
  text-align: center; 
  padding: 0;
  min-height: 100%;
  border-right: 1px solid @light-grey + #191919;

  .calendar {
    font-size: 16px;

    .dow, .dow a {
      text-align: left;
      text-transform: uppercase;
      font-weight: 500;
      color: black;
    }

    .dom, .dom a {
      color: @medium-grey;
      text-align: right;
    }

    .dom.today {
      border-radius: 100px;
      background: @pink;
      color: white;
      padding: 2px 5px;
      display: table;
      width: auto;
      height: auto;
      margin-top: -5px !important;
      margin-right: 10px;

      a {
        color: white;
      }
    }
  }

  .placeholder {
    font-size: 17px;
    text-transform: uppercase;
    color: @medium-grey;
    font-weight: 500;
    .fa-pencil-alt {
      display: block;
      margin: 0 auto;
      font-size: 24px;
      color: @bright-blue;
    }
  }

  .unit {
    color: @medium-grey;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .mileage {
    font-weight: 500; 
    font-size: 26px;
    color: @bright-blue;
    @media (min-width: @large) {
      font-size: 23px;
    }
  }

  .pace {
    font-weight: 400;
    font-size: 19px;
    color: @bright-blue;
    @media (min-width: @large) {
      font-size: 16px;
    }
  }

  .checks {
    text-align: left;
    font-size: 15px;
    label {
      margin-bottom: 0;
      font-weight: 500;
    }
  }

  .stats {
    font-size: 18px;
    font-weight: 500;

    @media (min-width: @large) {
      font-size: 15px;
    }

    .fa-heartbeat {
      color: @pink;
    }

    .fa-bed {
      color: @orange;
    }
  }

  .feel {
    width: 100%;
    height: 7px;
    background: @medium-grey;
  }

  .f1 { background: @pink; }
  .f2 { background: @orange; }
  .f3 { background: @green; }
  .f4 { background: @bright-blue; }
  .f5 { background: @purple; }

}

.schedule {
  h4 {
    font-size: 15px;
  }
  max-width: 100%;
  font-size: 17px;
  .col {
    .label {
      text-transform: uppercase;
      color: @dark-grey;
      font-weight: 500;
      text-align: center;

      @media (min-width: @large) {
        text-align: right;
      }
    }
    .mileage {
      color: @bright-blue;
      font-weight: 500;
    }

    input {
      font-size: 17px;
      text-align: center;
      width: 100%;
    }
  }

  .goal {
    background: @bright-blue;
    font-size: 16px;
    color: white;
    border-radius: 5px;
    padding: 2px 7px;
    white-space: nowrap;
  }

}

.stats.row .box {
  margin: 10px;
  overflow: hidden;

  .placeholder {
    text-transform: uppercase;
    color: @medium-grey;
    font-weight: 400; 
    font-size: 14px;
  }
}

.num {
  color: @bright-blue;
}

.data {
  text-align: right;
  font-weight: 500;
  font-size: 21px;
  color: @medium-grey;
}

</style>

<template>
  <div class="mx-auto w-md-100 mx-md-0 px-md-4 container">
    <div class="row">
      <h1 class="mt-4 col"> 
        <span class="name" v-if="user.name">{{ user.firstName }}'s</span>
        Training Log
      </h1>
<!--       <div class="col d-flex align-items-center justify-content-end">
        <div class="btn btn-primary">Monthly View</div>
      </div> -->
    </div>

    
    <div class="header row mb-2">
      <div class="col d-flex align-items-center">
        <h4 class="mt-4 mb-0">Week of 
          <input v-model="weekOf" type="text" @keyup.enter="changeDate(weekOf)" class="form-control"/>
        </h4>
      </div>
      <div class="col d-flex flex-row align-items-end">
        <div class="btn btn-default log-pager ml-auto mr-2 today" @click="changeDate(new Date())"> Today </div>
        <LogPagers :date='date' interval="7" />
      </div>
    </div>

    <div class="week box row mt-3 mx-auto mb-3">

      <div class="day col-lg d-flex flex-column" v-for="day in days">
        <div class="calendar row p-2">
          <div class="dow col"> 
             <nuxt-link :to="'/user/log/' + day.url">{{ day.dow }} </nuxt-link>
          </div>
          <div class="dom col" :class="day.today ? 'today' : ''"> 
            <nuxt-link :to="'/user/log/' + day.url">{{ day.dom }} </nuxt-link>
          </div>
        </div>

        <div class="row mb-4 mb-lg-auto">
          <div class="mt-auto mb-auto col-6 col-lg-12">
            <div v-if="day.totalMileage > 0" class="mt-auto">
              <div class="mileage"> {{ day.totalMileage || 0 }} <span class="unit"> mi </span> </div>
              <div class="pace"> {{ day.avgPace || "0:00" }} <span class="unit"> min / mi </span> </div>
            </div>
            <div v-else-if="day.rhr || day.sleep">
              <nuxt-link :to="'/user/log/' + day.url" class="placeholder"> 
                <div class="mb-2"> Edit <fa icon="pencil-alt"></fa> </div>
              </nuxt-link>
            </div>
            <div v-else class="mt-3 mb-5">
              <nuxt-link :to="'/user/log/' + day.url" class="placeholder"> 
                <div class="mb-2"> Edit </div>
                <fa icon="pencil-alt"></fa> 
              </nuxt-link>
            </div>
          </div>

          <div class="col-6 col-lg-12">

            <div v-if="day.rhr || day.sleep" class="mt-2">
              <div class="stats mb-3">
                <div> 
                  <fa icon="heartbeat" class="mr-2"></fa> {{ day.rhr || "N/A" }} <span class="unit ml-2"> BPM </span>
                </div>

                <div> 
                  <fa icon="bed" class="mr-2"></fa> {{ day.sleep || "N/A" }} <span class="unit ml-2"> hrs </span>
                </div>
              </div>
            </div>

            <div v-if="!day.rhr && !day.sleep && day.totalMileage > 0" class="mx-auto mt-3">
              <nuxt-link :to="'/user/log/' + day.url"> Add more <fa icon="pencil-alt"></fa> </nuxt-link>
            </div>

          </div>
        </div>

        <div class="feel mt-1" :class="'f' + (day.runs[0] ? day.runs[0].feel : '')"> </div>

      </div>
    </div>

    <div class="schedule row align-items-center mb-3">
      <h4 class="col-12 col-lg mb-2 mb-lg-0"> Scheduled </h4>
      <div class="col row item" v-for="day in days"> 
        <div class="col-12 col-lg-6 label px-0">{{ day.dow }}</div>
        <div class="col-12 col-lg-6 mileage px-0">
          <input 
            class="form-control" 
            v-model="day.mileageGoal" 
            placeholder="0" 
            @keyup.enter="updateSchedule(day.mileageGoal, day.url)"
          />
        </div>
      </div>
      <div class="col-12 col-lg d-flex align-items-center mt-3 mt-lg-0"> 
        <h4 class="d-inline-block mb-0"> Goal </h4>
        <div class="d-inline-block goal ml-3"> {{ totalGoal || 0 }} mi</div>
      </div>
    </div>

    <div class="stats row align-items-start">
      
      <div class="box col-lg p-0">
        <div class="row mb-2 px-3 pt-3 pb-0">
          <h2 class="col"> Total </h2>
          <div class="data col mb-2"><span class="num">{{ totalMileage }}</span> mi</div>
          <Stat :value="Math.round((totalGoal - totalMileage) * 100) / 100 || 0" unit=" mi"> left this week </Stat>
          <Stat :value="totalElev" unit=" ft"> elev. gain this week </Stat>
          <div class="mx-auto mt-3 placeholder" v-if="totalMileage == 0">
            Add log entries to see stats
          </div>
        </div>
        <no-ssr v-if="totalMileage > 0 && mileageData.length > 1">
          <Chart :data="mileageData" name="mileage" color="blue"/>
        </no-ssr>
      </div>

      <div class="sleep box col-lg p-0">
        <div>
          <div class="row pt-3 px-3 pb-0 mb-2">
            <h2 class="col"> Avg Sleep </h2>
            <div class="data col mb-2"><span class="num">{{ avgSleep }}</span> hrs</div>
            <Stat :value="sleepDifferential" unit="%" :comp="true"> than last week </Stat>
            <div class="mx-auto mt-3 placeholder" v-if="avgSleep == '0:00'"> 
              Add log entries to see stats
            </div>
          </div>
          <no-ssr v-if="avgSleep != '0:00' && sleepData.length > 1" class="mt-2">
            <Chart :data="sleepData" name="sleep" color="orange"/>
          </no-ssr>
        </div>
      </div>

      <div class="box col-lg">
        <div class="row mb-2">
          <h2 class="col"> Core </h2>
          <div class="data col"><span class="num">{{ getCheckPercentage('core') }}%</span></div>
        </div>

        <div class="row">
          <h2 class="col"> Stretching </h2>
          <div class="data col"><span class="num">{{ getCheckPercentage('stretching') }}%</span></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script> 

Array.prototype.sum = function(prop) {
  var total = 0
  for ( var i = 0, _len = this.length; i < _len; i++ ) {
    total += this[i][prop]
  }
  return total
}

import moment from 'moment-timezone'
moment.tz.setDefault("America/Los_Angeles")
const Chart = () => import('~/components/Chart')
const LogPagers = () => import('~/components/LogPagers')
const Stat = () => import('~/components/Stat')

let { 
  timeStringToDecimal, 
  timeDecimalToString, 
  formatDateUrl, 
  getDateFromUrl, 
  getPace 
} = require('~/utils/date.js')

let roundToHundredths = function(n) { return Math.round(n * 100) / 100 }

let sumRuns = function(runs) {
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

let getArrayOfProp = function(data, prop) {
  return data.filter(a => a[prop] > 0).map(a => a[prop])
}

export default {
  components: {
    Chart, 
    LogPagers, 
    Stat
  },
  middleware: 'auth',
  async asyncData({ store, params, $axios }) {

    let user = { ...store.state.auth.user }
    if (user.name)
      user.firstName = user.name.split(' ')[0]
    else 
      user.firstName = ""

    let dayUrl = params.date
    let curDay = getDateFromUrl(params.date)
    let weekOf = moment(curDay).startOf('isoWeek').format('M/D/YY')
    let data = await $axios.$get('/log/list/week/' + dayUrl)
    let lastWeekUrl = formatDateUrl(moment(curDay).subtract(7, 'days'))

    let lastWeek = await $axios.$get('/log/list/week/' + lastWeekUrl)

    let days = await Array.apply(null, Array(7)).map(function (_, i) {
      let day = moment(getDateFromUrl(params.date)).startOf('week').weekday(i + 1)
      let dayOfWeekFull = day.format('dddd')
      let dayOfWeek = day.format('ddd')
      let dayOfMonth = day.format('DD')
      let curDayUrl = formatDateUrl(day)

      var today = false
      if (formatDateUrl(moment()) == formatDateUrl(day)) 
        today = true

      if (i < data.length && moment(data[i].date).format('dddd') == dayOfWeekFull) {
        let dayData = data[i]
        dayData.dow = dayOfWeek
        dayData.dom = dayOfMonth
        dayData.today = today,
        dayData.url = curDayUrl

        let sums = sumRuns(dayData.runs)

        dayData.totalMileage = sums.totalMileage
        dayData.totalTime = sums.totalTime

        dayData.sleepDecimal = timeStringToDecimal(dayData.sleep)
        dayData.avgPace = getPace(dayData.totalTime, dayData.totalMileage)

        return dayData
      } else {
        return { 
          dow: dayOfWeek, 
          dom: dayOfMonth, 
          today: today, 
          url: curDayUrl 
        }
      }
    });

    return {
      days: days, 
      lastWeek: lastWeek,
      weekOf: weekOf, 
      user: user, 
      date: params.date || formatDateUrl(moment())
    }
  },
  computed: {
    totalMileage: function() {
      var total = 0
      for (var i = 0, l = this.days.length; i < l; i++ ) {
        if (this.days[i].totalMileage)
          total += this.days[i].totalMileage || 0
      }
      return Math.round(total * 100) / 100
    }, 
    totalElev: function() {
      var total = 0
      for (var i = 0, l = this.days.length; i < l; i++ ) {
        if (this.days[i].run)
          total += this.days[i].run.elevationGain
      }
      return Math.round(total * 100) / 100
    }, 
    totalGoal: function() {
      var total = 0
      for (var i = 0, l = this.days.length; i < l; i++ ) {
        total += Number(this.days[i].mileageGoal) || 0
      }
      return Math.round(total * 100) / 100
    },
    avgSleep: function() {
      var total = 0
      var l = 0
      for (var i = 0; i < this.days.length; i++ ) {
        if (this.days[i].sleep) {
          total += timeStringToDecimal(this.days[i].sleep)
          l++
        }
      }
      return timeDecimalToString(total / l)
    }, 
    sleepDifferential: function() {
      let thisWeek = timeStringToDecimal(this.avgSleep)
      var lastWeekTotal = 0
      var l = 0
      for (var i = 0; i < this.days.length; i++ ) {
        if (this.days[i].sleep && this.lastWeek[i]) {
          lastWeekTotal += timeStringToDecimal(this.lastWeek[i].sleep)
          l++
        }
      }
      let lastWeek = (lastWeekTotal / l) || 0
      return Math.round(((thisWeek - lastWeek) / lastWeek) * 1000) / 10 || 0
    }, 
    sleepData: function() {
      return getArrayOfProp(this.days, 'sleepDecimal')
    }, 
    mileageData: function() {
      return getArrayOfProp(this.days, 'totalMileage')
    }
  }, 
  methods: {
    changeDate: function(date) {
      let format = 'M/D/YY'
      let m = moment(date, format)
      if (!m.isValid())
        return

      this.$router.push({ params: { date: formatDateUrl(m) } })
    }, 
    updateSchedule: function(val, date) {
      this.$axios.$post('log/' + date + '/goal', { goal: val })
      .then((res) => {
        console.log(res)
      })
    }, 
    getCheckPercentage: function(prop) {
      let l = 0, t = 0
      for (var i = 0; i < this.days.length; i++ ) {
        if (this.days[i].runs && this.days[i].checks) {
          if (this.days[i].checks[prop])
            t++
          if (this.days[i].runs[0]) {
            if (this.days[i].runs[0].distance > 0) l++
          }
        }
      }
      return Math.round((t / l) * 100) || 0
    }
  },
  watch: {
    $route: function () {
      this.date = this.$route.params.date || this.date
    } 
  }
}
</script>