// pages/user/log/_date.vue

<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/basics.less";

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none !important; 
  margin: 0; 
}

input[type=number] {
  -moz-appearance: textfield !important;
}

h1 {
  font-size: 32px;
  font-weight: 500;
}

h2 {
  font-size: 26px;
  font-weight: 400;
}

h2.name {
  font-weight: 400; 
  font-size: 20px;
  color: @bright-blue;
}

h3 {
  font-size: 18px;
  color: black;
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;
}

h4 {
  text-transform: uppercase;
  font-size: 14px;
  color: @label-grey;
  font-weight: 400;
  display: table;
  height: auto;
}

td .btn-default, .day .btn-default, .header.row .btn-default {
  box-shadow: none;
  border: 1px solid @light-grey;
  padding: 3px 6px;
  text-transform: uppercase;
  color: @medium-grey;
  font-size: 14px;
  font-weight: 500;
}

.day .btn-default.today {
  color: @bright-blue;
}

.log-entry {
  // box-shadow: @shadow;
  border: 1px solid @light-grey;
  border-radius: 7px;

  .day {
    text-align: right;
    color: @medium-grey;
    text-transform: uppercase;
    font-size: 20px;
  }

  label {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 0;
    text-align: right;
  }

  h2 input {
    font-size: 22px;
    text-align: left;
  }

  h2 input, .sliders input {
    border: none;
  }

  input {
    border: 1px solid @light-grey;
    vertical-align: middle;
    border-radius: 3px;
    color: @bright-blue;
  }

  input, input::placeholder {
    font-size: 18px;
    font-weight: 400;
    text-align: center
  }

  input::placeholder {
    color: @label-grey;
  }

  .runs-list {
    border-top: 1px solid @ultra-light-grey;
    .tag {
      font-size: 15px;
      font-weight: 500;
      vertical-align: middle;
      border-radius: 4px; 
      border: 1px solid #cccccc;
      padding: 6px 12px;
      display: inline-block;
      white-space: nowrap;
      margin-bottom: 9px;
      cursor: pointer;

      .fa-trash-alt {
        color: @bright-blue;
      }
    }

    .btn-primary {
      font-weight: 400;
      box-shadow: none; 
      border: none;
    }
  }

  .run-title {
    border-top: 1px solid @ultra-light-grey;
    input {
      border: none;
      text-align: left;
    }
    input::placeholder {
      text-align: left;
    }
  }

  .sliders  {

    h4 {
      color: black;
      font-weight: 500;
    }

    .numbers {
      font-size: 18px;
      font-weight: 500;

      .col {
        text-align: center;
      }

      .one {
        color: @pink;
      }

      .two {
        color: @orange;
      }

      .three {
        color: @green;
      }

      .four {
        color: @bright-blue;
      }

      .five {
        color: @purple;
      }
    }

    .slider {
      display: block;
      width: 95%;
      margin: 0 auto;
      background: @light-grey + #111;
      border-radius: 20px;
      height: 7px;
    }

    .slider::-webkit-slider-thumb, .slider::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 100px;
      background: @bright-blue;
      border: none;
      cursor: pointer;
    }

  }

  .other {
    border-top: 1px solid @ultra-light-grey;
  }

  .weights {

    th {
      color: @label-grey;
      text-transform: uppercase;
      font-weight: 400; 
      font-size: 15px;
      text-align: center;
    }

    td {
      padding: 7px;
      color: @bright-blue;
      font-weight: 500;
      text-align: center;

      input, input::placeholder {
        font-size: 20px;
        text-align: center;
      }
    }

    td.x {
      color: @label-grey;
    }

    td.delete {
      cursor: pointer;
    }

    td.exercise {
      width: 37%;

      input {
        border: none;
        color: @bright-blue;
        font-weight: 400;
      }

      input, input::placeholder {
        text-align: right;
        font-size: 19px;
      }
    }

  }

  .bottom {
    .btn {
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 500;
      padding: 4px 7px;
      display: table;
    }

    textarea {
      resize: none;
    }
  }
}

.trends {
  font-size: 17px;
  color: @medium-grey;

  .stat {
    background: @bright-blue;
    color: white;
    border-radius: 5px;
    padding: 2px 6px;
    box-shadow: @shadow;
    margin-right: 10px;
  }

  .stat-down {
    background: @pink;
  }

  .stat-up {
    background: @green;
  }

  .row {
    margin: 10px;
  }
}

.streaks, .schedule {
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0; 
    text-align: left;
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
}

.schedule {
  text-align: center;

  .day {
    text-align: left;
  }

  .reps {
    font-size: 21px;
    font-weight: 500;
    color: @label-grey;
  }
  .recovery {
    color: @medium-grey;
    text-transform: uppercase;
    font-weight: 400; 
    font-size: 16px;
  }

  .green {
    color: @green;
  }

  .workout {
    font-size: 19px;
    font-weight: 500;
    .num {
      font-weight: 600;
    }
    .box {
      height: 100%;
      margin-bottom: 0px;
    }
  }
}

</style>
<template>
  <div class="mx-auto w-md-100 mx-md-0 px-md-4 container">
    <div class="row">
      <div class="col mt-3">
        <h2 class="name 4" v-if="user.name"> {{ user.firstName }}'s </h2>
        <h1> 
          Training Log
        </h1>
      </div>
      <div class="col d-flex align-items-center justify-content-end">
        <nuxt-link to="/user/log/week/" class="btn btn-primary">Weekly View</nuxt-link>
      </div>
    </div>

    <div class="row mt-4 mb-5">

      <div class="col-lg-8 col-md-12">
        <div class="header row mb-2">
          <div class="col d-flex">
            <h4 class="align-self-center mb-0">Log Entry <fa class="ml-1" icon="book-open"></fa> </h4>
          </div>
          <div class="col d-flex flex-row align-items-end">
            <LogPagers :date="date" interval="1" class="ml-auto"/>
          </div>
        </div>

        <form class="log-entry px-4 py-3">
          <div class="row">
            <h2 class="col-5">
              <input v-model="currentDay" class="d-inline-block" @keyup.enter="changeDate(currentDay)"/>
            </h2>
            <div class="col day">
              <div class="btn btn-default mr-2 d-inline-block" @click="changeDate(currentDay)"> Go </div>
              <div class="btn btn-default mr-2 d-inline-block" @click="clear"> Clear </div>
              <div 
                class="btn btn-default mr-3 d-inline-block today" 
                @click="changeDate(new Date())"
                v-if="!isToday"
              > 
                Today 
              </div>
              {{ dow }}
            </div>
          </div>

          <div class="row align-items-center mt-2">
            <div class="col-3 col-lg-6"> <h3 class="mb-0"> Runs </h3> </div>
            <div class="col row align-items-center ml-auto">
              <label class="col-7"> Mileage Goal </label>
              <div class="col">
                <input type="text" class="form-control" placeholder="0.0" v-model="entryData.mileageGoal"/>
              </div>
            </div>
          </div>

          <div class="runs-list row mt-3 pt-3"> 
            <div class="tag ml-2" v-for="(run, index) in entryData.runs">
              <span @click="curRun = index"> {{ run.name || 'Run ' + Number(index+1) }} </span>
              <fa icon="trash-alt" class="ml-2" @click="removeRun(index)"> </fa>
            </div>
            <div class="btn btn-primary ml-2 tag" @click="newRun()"> Add Run </div>
          </div>


          <div class="run-title row mt-2 pt-2"> 
            <input 
              v-model="entryData.runs[curRun].name" 
              :placeholder="'Run ' + Number(curRun + 1)" 
              class="form-control col-7"
            /> 
          </div>

          <div class="run row mt-2">

            <div class="col-6 col-lg row align-items-center mb-2 mb-lg-0">
              <label class="col-5"> Dist </label>
              <input 
                type="number" 
                placeholder="0.0" 
                v-model="entryData.runs[curRun].distance" 
                class="form-control col-7"
              />
            </div>

            <div class="col-6 col-lg row align-items-center mb-2 mb-lg-0">
              <label class="col-5"> Time </label>
              <input 
                type="text" 
                placeholder="0:00" 
                class="form-control col-7"
                v-model="entryData.runs[curRun].time"
              />
            </div>

            <div class="col-6 col-lg row align-items-center mb-2 mb-lg-0">
              <label class="col-5"> Pace </label>
              <input 
                type="text" 
                placeholder="0:00" 
                class="form-control col-7"
                v-model="pace"
              />
            </div>

            <div class="col-6 col-lg row align-items-center mb-2 mb-lg-0">
              <label class="col-5"> Elev </label>
              <input 
                type="number" 
                placeholder="0" 
                class="form-control col-7"
                v-model="entryData.runs[curRun].elevationGain"
              />
            </div>

          </div>

          <div class="sliders row mt-3">
            <div class="col-12 col-lg-6 mb-3 mb-lg-0">
              <h4 class="mb-3"> Difficulty </h4>
              <input 
                type="range" 
                min="1" max="5" 
                step="1" 
                class="slider mb-2"
                v-model="entryData.runs[curRun].difficulty"
              />
              <div class="numbers row">
                <div class="col one"> 1 </div>
                <div class="col two"> 2 </div>
                <div class="col three"> 3 </div>
                <div class="col four"> 4 </div>
                <div class="col five"> 5 </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <h4 class="mb-3"> Feel </h4>
              <input 
                type="range" 
                min="1" max="5" 
                step="1" 
                class="slider mb-2"
                v-model="entryData.runs[curRun].feel"
              />
              <div class="numbers row">
                <div class="col one"> 1 </div>
                <div class="col two"> 2 </div>
                <div class="col three"> 3 </div>
                <div class="col four"> 4 </div>
                <div class="col five"> 5 </div>
              </div>
            </div>
          </div>

          <div class="other row mt-4 pt-4">

            <div class="col-6 col-lg row align-items-center mb-3 mb-lg-0">
              <label class="col-6"> Sleep </label>
              <input 
                type="text" 
                placeholder="0:00" 
                class="form-control col-6"
                v-model="entryData.sleep"
              />
            </div>

            <div class="col-6 col-lg row align-items-center mb-3 mb-lg-0">
              <label class="col-7"> RHR <fa icon="heartbeat"></fa> </label>
              <input 
                type="number" 
                placeholder="0" 
                class="form-control col-5"
                v-model="entryData.rhr"
              />
            </div>

            <div class="col-6 col-lg row align-items-center">
              <div class="mx-auto">
                <label class="mr-2"> Core </label>
                <input type="checkbox" v-model="entryData.checks.core"/>
              </div>
            </div>

            <div class="col-6 col-lg row align-items-center">
              <div class="mx-auto">
                <label class="mr-2"> Stretching </label>
                <input type="checkbox" v-model="entryData.checks.stretching" />
              </div>
            </div>

          </div>

          <h3 class="mt-5 mt-lg-4"> Weights <input type="checkbox" v-model="didWeights" /></h3>

          <div class="weights row mx-auto w-95" v-if="didWeights">

            <div class="row">
              <table> 
                <thead> 
                  <tr> 
                    <th> </th>
                    <th> Sets </th>
                    <th> </th>
                    <th> Reps </th>
                    <th> </th>
                  </tr>
                </thead>

                <tbody> 
                  <tr v-for="(exercise, index) in entryData.weights">
                    <td class="exercise"> 
                      <input 
                        type="text" 
                        class="form-control" 
                        v-model="exercise.name" 
                        placeholder="Enter exercise" 
                      /> 
                    </td>
                    <td>
                      <input 
                        type="text" 
                        placeholder="0" 
                        class="form-control" 
                        v-model="exercise.sets"
                      />
                    </td>
                    <td class="x"> x </td>
                    <td>
                      <input 
                        type="text" 
                        placeholder="0" 
                        class="form-control" 
                        v-model="exercise.reps"
                      />
                    </td>
                    <td class="delete"> 
                      <fa icon="trash" @click="deleteExercise(index)"> </fa>
                    </td>
                  </tr>

                  <tr> 
                    <td colspan="3"></td>
                    <td> <div @click="addExercise" class="btn btn-default"> New Exercise </div> </td>
                  </tr>
                </tbody>
                
              </table>
            </div>

          </div>

          <div class="bottom row mt-3 mb-2">
            <div class="col-md-8">
              <textarea placeholder="Add note..." class="form-control" v-model="entryData.note"></textarea>
            </div>
            <div class="col-md-4 d-flex flex-row align-items-end mt-3 mt-lg-0">

              <div class="btn btn-default mt-auto ml-auto" @click="revert()" v-if="modified">
                Revert
              </div>

              <div class="btn btn-primary" :class="modified ? 'ml-3' : 'ml-auto'" @click="submitEntry()"> 
                Save<span v-if="!modified">d</span>
                <fa icon="check" v-if="!modified" class="ml-2"> </fa>
              </div>

            </div>
          </div>

        </form>
      </div>

      <div class="col-12 col-lg-4 mt-3 mt-lg-0">
        <h4> Trends <fa class="ml-1" icon="chart-line"></fa> </h4>
        <div class="trends box flat-box px-1 py-2">
          <div class="row"> <span class="stat"> {{ movingAvgs.sleep }} hr </span> 5 day avg sleep</div>
          <div class="row"> 
            <span class="stat" :class="'stat-' + (sleepTrend >= 0 ? 'up' : 'down')"> {{ sleepTrend }}% </span> 
            {{ sleepTrend >= 0 ? "more" : "less" }} 
            sleep than usual 
          </div>
          <div class="row"> <span class="stat"> {{ movingAvgs.rhr }} bpm </span> 5 day avg RHR </div>
        </div>

        <h4> Streaks <fa class="ml-1" icon="fire-alt"></fa> </h4>
        <div class="streaks box flat-box py-2">

          <div class="row flex align-items-center">
            <h2 class="col"> Core </h2>
            <div class="data col"><span class="num">{{ streaks.core }}</span> day</div>
          </div>
          <div class="row flex align-items-center">
            <h2 class="col"> Stretching </h2>
            <div class="data col"><span class="num">{{ streaks.stretching }}</span> day</div>
          </div>

        </div>

        <h4> Schedule <fa class="ml-1" icon="calendar-alt"></fa> </h4>
        <div class="schedule box flat-box">

          <div class="day row flex align-items-center mb-2">
            <h2 class="col"> Today </h2>
            <div class="data col"><span class="num">{{ entryData.mileageGoal }}</span> mi</div>
          </div>

          <div class="row flex align-items-center">
            <h2 class="col"> Tomorrow </h2>
            <div class="data col"><span class="num">{{ goalTomorrow }}</span> mi</div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script> 
import moment from 'moment-timezone'
moment.tz.setDefault("America/Los_Angeles")
import _ from 'underscore'

let { timeStringToDecimal, formatDateUrl, getDateFromUrl, getPace } = require('~/utils/date.js')

const emptyEntry = {
  runs: [{
    distance: '', 
    time: "",
    elevationGain: '', 
    difficulty: 1, 
    feel: 5
  }], 
  checks: {
    core: false,
    stretching: false
  },
  sleep: '',
  rhr: '', 
  weight: 0, 
  note: ""
}
const LogPagers = () => import('~/components/LogPagers')

export default {
  components: {
    LogPagers
  },
  head () {
    let titleDate = moment(this.day).format('M/D/YY')
    return {
      title: "Training Log " + titleDate + " - RaceBase"
    }
  },
  middleware: 'auth',
  async asyncData ({ store, $axios, params }) {
    let user = { ...store.state.auth.user }
    if (user.name)
      user.firstName = user.name.split(' ')[0]
    else 
      user.firstName = ""

    let dayUrl = params.date
    let day = getDateFromUrl(dayUrl)

    let dayPretty = moment(day).format('MMMM D YYYY')
    let dow = moment(day).format('ddd')
    let query = params.date || null
    let entry = await $axios.$get('log/' + query)

    let movingAvgs = {}

    movingAvgs.rhr = Math.round((await $axios.$get('log/avg/moving/rhr/' + dayUrl)).avg * 10) / 10
    movingAvgs.sleep = (await $axios.$get('log/avg/moving/sleep/' + dayUrl)).avg

    let streaks = { stretching: 0, core: 0 }
    // streaks.stretching = (await $axios.$get('log/streak/stretching')).streak
    // streaks.core = (await $axios.$get('log/streak/core')).streak

    let isEmpty = entry.runs ? typeof entry.runs[0] == 'undefined' : true
    let entryData = isEmpty ? emptyEntry : entry

    let avgSleepDecimal = timeStringToDecimal(movingAvgs.sleep)
    let sleepTrend = ((timeStringToDecimal(entryData.sleep) - avgSleepDecimal) / avgSleepDecimal) * 100
    sleepTrend = Math.round(sleepTrend * 10) / 10
    if (!isFinite(sleepTrend)) sleepTrend = 0

    var didWeights = !!(entryData.weights)

    let tomorrowUrl = formatDateUrl(moment(day).add(1, 'day'))
    let goalTomorrow = (await $axios.$get('log/schedule/' + tomorrowUrl)).goal

    return {
      user: user, 
      id: user._id,
      entryData: entryData, 
      originalData: JSON.parse(JSON.stringify(entryData)),
      currentDay: dayPretty, 
      dow: dow, 
      didWeights: didWeights, 
      movingAvgs: movingAvgs,
      sleepTrend: sleepTrend, 
      day: day, 
      date: params.date, 
      streaks: streaks, 
      curRun: 0, 
      goalTomorrow: goalTomorrow
    }
  },
  methods: {
    submitEntry: function() {
      this.entryData.runs[this.curRun].difficulty = parseInt(this.entryData.runs[this.curRun].difficulty)
      this.entryData.runs[this.curRun].feel = parseInt(this.entryData.runs[this.curRun].feel)
      if (!this.didWeights)
        this.$set(this.entryData, 'weights', null)
      this.$axios.$post('log/' + formatDateUrl(moment(this.currentDay)), this.entryData).then((res) => {
        this.entryData = res.entry
        this.originalData = JSON.parse(JSON.stringify(this.entryData))
        console.log(res.message)
      })
    }, 
    changeDate: function(date) {

      let m = moment(date)
      if (!m.isValid())
        return

      this.$router.push("/user/log/" + formatDateUrl(m))

    },
    clear: function() {
      this.entryData = emptyEntry
    },
    changeToPrev: function() {
      let prevDate = formatDateUrl(moment(this.currentDay).subtract(1, 'days'))
      this.$router.push("/user/log/" + prevDate)
    },
    changeToNext: function() {
      let nextDate = formatDateUrl(moment(this.currentDay).add(1, 'days'))
      this.$router.push("/user/log/" + nextDate)
    },
    addExercise: function() {
      this.entryData.weights.push({ name: "", reps: 0, sets: 0 })
    }, 
    deleteExercise: function(index) {
      this.entryData.weights.splice(index, 1)
      if (this.entryData.weights.length < 1) {
        this.$set(this.entryData, 'weights', null)
        this.didWeights = false
      }
    },
    revert: function() {
      this.entryData = JSON.parse(JSON.stringify(this.originalData))
    }, 
    newRun: function() {
      this.entryData.runs.push({})
      this.curRun = this.entryData.runs.length - 1
    }, 
    removeRun: function(i) {
      if (i <= this.entryData.runs.length - 1)
        this.entryData.runs.splice(i, 1)

      if (!this.entryData.runs[0])
        this.entryData.runs.push({})
      
      this.curRun = 0
    }
  },
  computed: {
    pace: function() {
      if (!this.entryData.runs || !this.entryData.runs[this.curRun])
        return "0:00"
      else if (!this.entryData.runs[this.curRun].time || !this.entryData.runs[this.curRun].distance) 
        return "0:00"

      let hms = this.entryData.runs[this.curRun].time
      let a = hms.split(':')
      let seconds = (+a[0]) * 60 + (+a[1])

      let p = (seconds / this.entryData.runs[this.curRun].distance) / 60
      let pm = Math.floor(p)
      let ps = Math.round((p - pm) * 60)

      ps = ("0" + ps).slice(-2)

      let pace = (pm == 'NaN' || ps == 'aN') ? "0:00" : pm + ":" + ps
      return getPace(this.entryData.runs[this.curRun].time, this.entryData.runs[this.curRun].distance)
    },
    modified: function() {
      return !_.isEqual(this.entryData, this.originalData)
    }, 
    isToday: function() {
      return formatDateUrl(moment()) == this.date
    }
  }, 
  watch: {
    didWeights: function() {
      if (this.didWeights && !this.entryData.weights)
        this.$set(this.entryData, 'weights', [{}])
    },
    $route: function () {
      this.date = this.$route.params.date || this.date
    }
  }
}
</script>