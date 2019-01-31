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
}

.week {
  padding: 0;
  overflow: hidden;
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

.box.col {
  margin: 10px;
  overflow: hidden;
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
      <div class="col d-flex">
        <h4 class="mt-4">Week of {{ weekOf }}</h4>
      </div>
      <div class="col d-flex flex-row align-items-end">
        <LogPagers :date='date' interval="7" />
      </div>
    </div>

    <div class="week box row mt-3 mx-auto">

      <div class="day col d-flex flex-column" v-for="day in days">
        <div class="calendar row p-2">
          <div class="dow col"> 
             <nuxt-link :to="'/user/log/' + day.url">{{ day.dow }} </nuxt-link>
          </div>
          <div class="dom col" :class="day.today ? 'today' : ''"> 
            <nuxt-link :to="'/user/log/' + day.url">{{ day.dom }} </nuxt-link>
          </div>
        </div>

        <div class=" mb-auto">
          <div v-if="day.run" class="mt-auto">
            <div class="mileage"> {{ day.run.distance || 0 }} <span class="unit"> mi </span> </div>
            <div class="pace"> {{ day.run.pace }} <span class="unit"> min / mi </span> </div>
          </div>
          <div v-if="!day.run" class="mt-4 mb-5">
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

        <div v-if="!day.rhr && !day.sleep && day.run" class="mx-auto mb-3">
          <nuxt-link :to="'/user/log/' + day.url"> Add more <fa icon="pencil-alt"></fa> </nuxt-link>
        </div>

        <div class="feel mt-1" :class="'f' + (day.run ? day.run.feel : '')"> </div>

      </div>
    </div>

    <div class="row align-items-start">
      
      <div class="box col p-0">
        <div class="row mb-2 p-3">
          <h2 class="col"> Total </h2>
          <div class="data col"><span class="num">{{ total }}</span> mi</div>
        </div>
        <no-ssr>
          <Chart :data="days.map(a => a.run ? a.run.distance : 0)" name="mileage" color="blue"/>
        </no-ssr>
      </div>

      <div class="sleep box col p-0">
        <div class="content p-3">
          <h2> Avg Sleep </h2>
        </div>
        <no-ssr>
          <Chart :data="days.map(a => a.sleepDecimal)" name="sleep" color="orange"/>
        </no-ssr>
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
let { timeStringToDecimal, formatDateUrl, getDateFromUrl, getPace } = require('~/utils/date.js')

export default {
  components: {
    Chart, 
    LogPagers
  },
  async asyncData({ store, params, $axios }) {
    let user = { ...store.state.auth.user }
    user.firstName = user.name.split(' ')[0]

    let dayUrl = params.date
    let curDay = getDateFromUrl(params.date)
    let weekOf = moment(curDay).startOf('isoWeek').format('M/D')
    let data = await $axios.$get('/log/list/week/' + dayUrl)

    let days = await Array.apply(null, Array(7)).map(function (_, i) {
      let day = moment(getDateFromUrl(params.date)).startOf('week').weekday(i + 1)
      let dayOfWeek = day.format('ddd')
      let dayOfMonth = day.format('D')
      let curDayUrl = formatDateUrl(day)

      var today = false
      if (moment().startOf('day').format('D') == dayOfMonth) 
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
      date: params.date
    }
  },
  computed: {
    total: function() {
      var total = 0
      for ( var i = 0, l = this.days.length; i < l; i++ ) {
        if (this.days[i].run)
          total += this.days[i].run.distance
      }
      return total
    }
  }, 
  watch: {
    $route: function () {
      console.log(this.$route.params.date)
      this.date = this.$route.params.date || this.date
    } 
  }
}
</script>