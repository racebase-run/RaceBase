// pages/user/log/week/_date.vue

<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/basics.less";

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
  border-right: 2px solid @light-grey + #191919;

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
  }

  .pace {
    font-weight: 500;
    font-size: 19px;
    color: @bright-blue;
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
    font-size: 15px;
    font-weight: 500;

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
  font-size: 17px;
  .col {
    .label {
      text-transform: uppercase;
      color: @dark-grey;
      font-weight: 500;
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

.box.col {
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
        <span class="name">{{ user.firstName }}'s</span>
        Training Log
      </h1>
      <div class="col d-flex align-items-center justify-content-end">
        <div class="btn btn-primary">Monthly View</div>
      </div>
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

      <div class="day col d-flex flex-column" v-for="day in days">
        <div class="calendar row p-2">
          <div class="dow col"> 
             <nuxt-link :to="'/user/log/' + day.url">{{ day.dow }} </nuxt-link>
          </div>
          <div class="dom col" :class="day.today ? 'today' : ''"> 
            <nuxt-link :to="'/user/log/' + day.url">{{ day.dom }} </nuxt-link>
          </div>
        </div>

        <div class="mt-auto mb-auto">
          <div v-if="day.run" class="mt-auto">
            <div class="mileage"> {{ day.run.distance || 0 }} <span class="unit"> mi </span> </div>
            <div class="pace"> {{ day.run.pace }} <span class="unit"> min / mi </span> </div>
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

        <div v-if="!day.rhr && !day.sleep && day.run" class="mx-auto mb-auto">
          <nuxt-link :to="'/user/log/' + day.url"> Add more <fa icon="pencil-alt"></fa> </nuxt-link>
        </div>

        <div class="feel mt-1" :class="'f' + (day.run ? day.run.feel : '')"> </div>

      </div>
    </div>

    <div class="schedule row d-flex align-items-center mb-3">
      <h4 class="col mb-0"> Scheduled </h4>
      <div class="col row" v-for="day in days"> 
        <div class="col-6 label">{{ day.dow }}</div>
        <div class="col-6 mileage">
          <input 
            class="form-control" 
            v-model="day.mileageGoal" 
            placeholder="0" 
            @keyup.enter="updateSchedule(day.mileageGoal, day.url)"
          />
        </div>
      </div>
      <div class="col d-flex align-items-center"> 
        <h4 class="d-inline-block mb-0"> Goal </h4>
        <div class="d-inline-block goal ml-3"> {{ totalGoal }} mi</div>
      </div>
    </div>

    <div class="row align-items-start">
      
      <div class="box col p-0">
        <div class="row mb-2 px-3 pt-3 pb-0">
          <h2 class="col"> Total </h2>
          <div class="data col mb-2"><span class="num">{{ totalMileage }}</span> mi</div>
          <Stat :value="Math.round((totalGoal - totalMileage) * 100) / 100 " unit=" mi"> left this week </Stat>
          <Stat :value="totalElev" unit=" ft"> elev. gain this week </Stat>
          <div class="mx-auto mt-3 placeholder" v-if="totalMileage == 0">
            Add log entries to see stats
          </div>
        </div>
        <no-ssr v-if="totalMileage > 0">
          <Chart :data="days.map(a => a.run ? a.run.distance : 0)" name="mileage" color="blue"/>
        </no-ssr>
      </div>

      <div class="sleep box col p-0">
        <div>
          <div class="row mb-2 pt-3 px-3 pb-0">
            <h2 class="col"> Avg Sleep </h2>
            <div class="data col mb-2"><span class="num">{{ avgSleep }}</span> hrs</div>
            <Stat value="5" unit="%" :comp="true"> than last week </Stat>
            <div class="mx-auto mt-3 placeholder" v-if="avgSleep == '0:00'"> 
              Add log entries to see stats
            </div>
          </div>
          <no-ssr v-if="avgSleep != '0:00'">
            <Chart :data="days.map(a => a.sleepDecimal)" name="sleep" color="orange"/>
          </no-ssr>
        </div>
      </div>

      <div class="box col">
        <div class="row mb-2">
          <h2 class="col"> Core </h2>
          <div class="data col"><span class="num">71%</span></div>
        </div>

        <div class="row">
          <h2 class="col"> Stretching </h2>
          <div class="data col"><span class="num">86%</span> mi</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script> 

Array.prototype.sum = function (prop) {
  var total = 0
  for ( var i = 0, _len = this.length; i < _len; i++ ) {
      total += this[i][prop]
  }
  return total
}

import moment from 'moment'
const Chart = () => import('~/components/Chart')
const LogPagers = () => import('~/components/LogPagers')
const Stat = () => import('~/components/Stat')

let { timeStringToDecimal, timeDecimalToString, formatDateUrl, getDateFromUrl, getPace } = require('~/utils/date.js')

export default {
  components: {
    Chart, 
    LogPagers, 
    Stat
  },
  middleware: 'auth',
  async asyncData({ store, params, $axios }) {
    let user = { ...store.state.auth.user }
    user.firstName = user.name.split(' ')[0]

    let dayUrl = params.date
    let curDay = getDateFromUrl(params.date)
    let weekOf = moment(curDay).startOf('isoWeek').format('M/D/YY')
    let data = await $axios.$get('/log/list/week/' + dayUrl)

    let days = await Array.apply(null, Array(7)).map(function (_, i) {
      let day = moment(getDateFromUrl(params.date)).startOf('week').weekday(i + 1)
      let dayOfWeek = day.format('ddd')
      let dayOfMonth = day.format('D')
      let curDayUrl = formatDateUrl(day)

      var today = false
      if (formatDateUrl(moment()) == formatDateUrl(day)) 
        today = true

      if (i < data.length && moment(data[i].date).format('ddd') == dayOfWeek) {
        let dayData = data[i]
        dayData.dow = dayOfWeek
        dayData.dom = dayOfMonth
        dayData.today = today,
        dayData.url = curDayUrl
        dayData.sleepDecimal = timeStringToDecimal(dayData.sleep)
        dayData.run.pace = getPace(dayData.run.time, dayData.run.distance)
        if (dayData.run.distance == 0 || !dayData.run.distance)
          delete dayData.run
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
      weekOf: weekOf, 
      user: user, 
      date: params.date || formatDateUrl(moment()),
      schedule: { 
        days: [ 
          { label: 'M', mileage: 10.0 }, 
          { label: 'Tu', mileage: 14.0 },
          { label: 'W', mileage: 12.0 },
          { label: 'Th', mileage: 10.0 },
          { label: 'Fr', mileage: 10.0 },
          { label: 'Sa', mileage: 8.0 },
          { label: 'Su', mileage: 15.0 }
        ], 
        goal: 80.0
      }
    }
  },
  computed: {
    totalMileage: function() {
      var total = 0
      for (var i = 0, l = this.days.length; i < l; i++ ) {
        if (this.days[i].run)
          total += this.days[i].run.distance
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
        total += this.days[i].mileageGoal
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
    }
  },
  watch: {
    $route: function () {
      this.date = this.$route.params.date || this.date
    } 
  }
}
</script>