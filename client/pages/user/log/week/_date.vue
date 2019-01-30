<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/basics.less";

h1 {
  .name {
    font-weight: 400; 
    color: @bright-blue;
  }
  font-size: 35px;
  font-weight: 600;
}

h2 {
  text-transform: uppercase;
  font-size: 25px;
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
  border-right: 2px solid @light-grey + #191919;

  .calendar {
    font-size: 16px;
    .dow {
      text-align: left;
      text-transform: uppercase;
      font-weight: 500;
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

  .unit {
    color: @medium-grey;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .mileage {
    font-weight: 600; 
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
    font-size: 16px;
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
    background: @bright-blue;
  }

  .f1 { background: @pink; }
  .f2 { background: @orange; }
  .f3 { background: @green; }
  .f4 { background: @bright-blue; }
  .f5 { background: @purple; }

}

.box.col {
  margin: 10px;
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
        <span class="name">John's</span>
        Training Log
      </h1>
      <div class="col d-flex align-items-center justify-content-end">
        <div class="btn btn-primary">Monthly View</div>
      </div>
    </div>

    <h4 class="mt-4">Week of 1/21</h4>

    <div class="week box row mt-3 mx-auto">

      <div class="day col" v-for="day in days">
        <div class="calendar row p-2">
          <div class="dow col"> 
             {{ day.dow }}
          </div>
          <div class="dom col" :class="day.today ? 'today' : ''"> 
            <nuxt-link :to="'/user/log/' + day.url">{{ day.dom }} </nuxt-link>
          </div>
        </div>

        <div class="mileage"> {{ day.run.distance }} <span class="unit"> mi </span> </div>
        <div class="pace"> {{ day.run.time }} <span class="unit"> min / mi </span> </div>
  
        <div class="checks d-table mx-auto mt-3 mb-2">
          <div> 
            <input type="checkbox"/>
            <label class="ml-3"> Core </label>
          </div>
          <div> 
            <input type="checkbox"/>
            <label class="ml-3"> Stretching </label>
          </div>
        </div>

        <div class="stats mb-3">
          <div> 
            <fa icon="heartbeat" class="mr-2"></fa> {{ day.rhr || "N/A" }} <span class="unit ml-2"> BPM </span>
          </div>

          <div> 
            <fa icon="bed" class="mr-2"></fa> {{ day.sleep || "N/A" }} <span class="unit ml-2"> hrs </span>
          </div>
        </div>

        <div :class="'feel f' + day.run.feel"> </div>

      </div>
    </div>

    <div class="row">
      
      <div class="box col">
        <div class="row mb-2">
          <h2 class="col"> Total </h2>
          <div class="data col"><span class="num">{{ total }}</span> mi</div>
        </div>
      </div>

      <div class="box col">
        <h2> Avg Sleep </h2>
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
let { timeStringToDecimal, formatDateUrl, getDateFromUrl } = require('~/utils/date.js')

export default {
  async asyncData({ store, params, $axios }) {
    let dayUrl = params.date
    let day = getDateFromUrl(params.date)
    let data = await $axios.$get('/log/list/week/' + dayUrl)

    let days = Array.apply(null, Array(7)).map(function (_, i) {
      let day = moment().startOf('week').weekday(i + 1)
      let dayOfWeek = day.format('ddd')
      let dayOfMonth = day.format('D')
      let curDayUrl = formatDateUrl(day)

      var today = false
      if (moment().startOf('day').format('D') == dayOfMonth) today = true

      if (i < data.length && moment(data[i].date).format('ddd') == dayOfWeek) {
        let dayData = data[i]
        dayData.dow = dayOfWeek
        dayData.dom = dayOfMonth
        dayData.today = today,
        dayData.url = curDayUrl
        return dayData
      } else {
        return { 
          run: { distance: 0, time: "0:00", feel: 3 }, 
          dow: dayOfWeek, 
          dom: dayOfMonth, 
          today: today, 
          url: curDayUrl
        }
      }
    });

    return {
      days: days
    }
  },
  data () {
    return {
      days : []
    }
  }, 
  computed: {
    total: function() {
      return this.days.sum("mileage")
    }
  }
}
</script>