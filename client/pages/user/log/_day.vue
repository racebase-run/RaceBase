<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/basics.less";

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
  box-shadow: @shadow;
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
        <h2 class="name 4"> {{ user.firstName }}'s </h2>
        <h1> 
          Training Log
        </h1>
      </div>
      <div class="col d-flex align-items-center justify-content-end">
        <nuxt-link to="/user/log/week/foo" class="btn btn-primary">Weekly View</nuxt-link>
      </div>
    </div>

    <div class="row mt-4 mb-5">

      <div class="col-md-8">
        <div class="header row mb-2">
          <div class="col d-flex">
            <h4 class="align-self-center mb-0">Log Entry <fa class="ml-1" icon="book-open"></fa> </h4>
          </div>
          <div class="col d-flex flex-row align-items-end">
            <div class="btn btn-default d-inline-block ml-auto mt-auto" @click="changeToPrev"> Prev </div>
            <div class="btn btn-default d-inline-block ml-2" @click="changeToNext"> Next </div>
          </div>
        </div>

        <form class="log-entry px-4 py-3">
          <div class="row">
            <h2 class="col">
              <input v-model="today" class="d-inline-block" />
            </h2>
            <div class="col day">
              <div class="btn btn-default mr-2 d-inline-block" @click="changeDate"> Go </div>
              <div class="btn btn-default mr-3 d-inline-block today" @click="changeToToday"> Today </div>
              {{ dow }}
            </div>
          </div>

          <div class="run row mt-4">

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Dist </label>
              <input 
                type="number" 
                placeholder="0.0" 
                v-model="entryData.run.distance" 
                class="form-control col-md-7"
              />
            </div>

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Time </label>
              <input 
                type="text" 
                placeholder="0:00" 
                class="form-control col-md-7"
                v-model="entryData.run.time"
              />
            </div>

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Pace </label>
              <input 
                type="text" 
                placeholder="0:00" 
                class="form-control col-md-7"
                v-model="pace"
              />
            </div>

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Elev </label>
              <input 
                type="number" 
                placeholder="0" 
                class="form-control col-md-7"
                v-model="entryData.run.elevationGain"
              />
            </div>

          </div>

          <div class="sliders row mt-3">
            <div class="col">
              <h4 class="mb-3"> Difficulty </h4>
              <input 
                type="range" 
                min="1" max="5" 
                step="1" 
                class="slider mb-2"
                v-model="entryData.run.difficulty"
              />
              <div class="numbers row">
                <div class="col one"> 1 </div>
                <div class="col two"> 2 </div>
                <div class="col three"> 3 </div>
                <div class="col four"> 4 </div>
                <div class="col five"> 5 </div>
              </div>
            </div>
            <div class="col">
              <h4 class="mb-3"> Feel </h4>
              <input 
                type="range" 
                min="1" max="5" 
                step="1" 
                class="slider mb-2"
                v-model="entryData.run.feel"
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

          <div class="other row mt-3">

            <div class="col row align-items-center">
              <label class="col-md-6"> Sleep </label>
              <input 
                type="text" 
                placeholder="0:00" 
                class="form-control col-md-6"
                v-model="entryData.sleep"
              />
            </div>

            <div class="col row align-items-center">
              <label class="col-md-7"> RHR <fa icon="heartbeat"></fa> </label>
              <input 
                type="number" 
                placeholder="0" 
                class="form-control col-md-5"
                v-model="entryData.rhr"
              />
            </div>

            <div class="col-md-3 row align-items-center">
              <div class="mx-auto">
                <label class="mr-2"> Core </label>
                <input type="checkbox" v-model="entryData.checks.core"/>
              </div>
            </div>

            <div class="col row align-items-center">
              <div class="mx-auto">
                <label class="mr-2"> Stretching </label>
                <input type="checkbox" v-model="entryData.checks.stretching" />
              </div>
            </div>

          </div>

          <h3 class="mt-4"> Weights <input type="checkbox" v-model="didWeights" /></h3>

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
            <div class="col-md-4 d-flex flex-row align-items-end">

              <div class="btn btn-default mt-auto ml-auto" @click="revert()" v-if="modified">
                Revert
              </div>

              <div class="btn btn-primary ml-3" @click="submitEntry()"> 
                Save<span v-if="!modified">d</span>
                <fa icon="check" v-if="!modified" class="ml-2"> </fa>
              </div>

            </div>
          </div>

        </form>
      </div>

      <div class="col-md-4">
        <h4> Trends <fa class="ml-1" icon="chart-line"></fa> </h4>
        <div class="trends box">
          <div class="row"> <span class="stat"> 8:10 hr </span> 5 day avg sleep</div>
          <div class="row"> <span class="stat stat-down"> 8.3% </span> less sleep than usual </div>
          <div class="row"> <span class="stat"> 49 bpm </span> 5 day avg RHR </div>
        </div>

        <h4> Streaks <fa class="ml-1" icon="fire-alt"></fa> </h4>
        <div class="streaks box py-2">

          <div class="row flex align-items-center">
            <h2 class="col"> Core </h2>
            <div class="data col"><span class="num">7</span> day</div>
          </div>
          <div class="row flex align-items-center">
            <h2 class="col"> Stretching </h2>
            <div class="data col"><span class="num">10</span> day</div>
          </div>

        </div>

        <h4> Schedule <fa class="ml-1" icon="calendar-alt"></fa> </h4>
        <div class="schedule box">

          <div class="day row flex align-items-center mb-2">
            <h2 class="col"> Today </h2>
            <div class="data col"><span class="num">10.0</span> mi</div>
          </div>

          <div class="workout row no-gutters d-flex align-items-center mb-3">
            <div class="col-md-4 reps"><span class="num">6</span> x</div>
            <div class="col-md-8 box p-2">
              <div class="row">
                <div class="col num">800m</div>
                <div class="col">8k-10k</div>
              </div>
              <div class="recovery">2:00 standing</div>
            </div>
          </div>

          <div class="workout row mb-3">
            <div class="col-md-4 recovery">Rest</div>
            <div class="col-md-8 recovery green">3:30 standing</div>
          </div>

          <div class="workout row no-gutters d-flex align-items-center mb-3">
            <div class="col-md-4 reps"><span class="num">4</span> x</div>
            <div class="col-md-8 box p-2">
              <div class="row">
                <div class="col num">200m</div>
                <div class="col">1500m</div>
              </div>
              <div class="recovery">200m jog</div>
            </div>
          </div>

          <div class="row flex align-items-center">
            <h2 class="col"> Tomorrow </h2>
            <div class="data col"><span class="num">11.0</span> mi</div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script> 
import moment from 'moment'
import _ from 'underscore'
export default {
  async asyncData ({ store, $axios, params }) {
    let user = { ...store.state.auth.user }

    user.firstName = user.name.split(' ')[0]

    let dateFormat = "MM-DD-YYYY"
    let day
    if (!params.day || !moment(params.day, dateFormat).isValid())
      day = new Date()
    else 
      day = moment(params.day, dateFormat).toDate()

    let dayPretty = moment(day).format('MMMM D YYYY')
    let dow = moment(day).format('ddd')
    let query = params.day || null
    let entry = await $axios.$get('log/' + query)

    let entryData = typeof entry.run == 'undefined' ? {
      run: {
        distance: '', 
        time: "",
        elevationGain: '', 
        difficulty: 1, 
        feel: 5
      }, 
      checks: {
        core: false,
        stretching: false
      },
      sleep: '',
      rhr: '', 
      weight: 0, 
      note: ""
    } : entry

    var didWeights = !!(entryData.weights)

    return {
      user: user, 
      id: user._id,
      entryData: entryData, 
      originalData: JSON.parse(JSON.stringify(entryData)),
      today: dayPretty, 
      dow: dow, 
      didWeights: didWeights
    }
  },
  methods: {
    submitEntry: function() {
      this.entryData.run.difficulty = parseInt(this.entryData.run.difficulty)
      this.entryData.run.feel = parseInt(this.entryData.run.feel)
      if (!this.didWeights)
        this.$set(this.entryData, 'weights', null)
      this.$axios.$post('log/', this.entryData).then((res) => {
        this.entryData = res.entry
        this.originalData = JSON.parse(JSON.stringify(this.entryData))
        console.log(res.message)
      })
    }, 
    changeDate: function() {
      let m = moment(this.today, 'MMMM D YYYY')
      if (!m.isValid())
        return

      let dateFormat = "MM-DD-YYYY"
      let newDate = m.format(dateFormat)
      this.$router.push("/user/log/" + newDate)
    },
    changeToToday: function() {
      let dateFormat = "MM-DD-YYYY"
      let newDate = moment(new Date()).format(dateFormat)
      this.$router.push("/user/log/" + newDate)
    },
    changeToPrev: function() {
      let dateFormat = "MM-DD-YYYY"
      let prevDate = moment(this.today).subtract(1, 'days').format(dateFormat)
      this.$router.push("/user/log/" + prevDate)
    },
    changeToNext: function() {
      let dateFormat = "MM-DD-YYYY"
      let nextDate = moment(this.today).add(1, 'days').format(dateFormat)
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
    }
  },
  computed: {
    pace: function() {
      if (!this.entryData.run.time || !this.entryData.run.distance) 
        return "0:00"

      let hms = this.entryData.run.time
      let a = hms.split(':')
      let seconds = (+a[0]) * 60 + (+a[1])

      let p = (seconds / this.entryData.run.distance) / 60
      let pm = Math.floor(p)
      let ps = Math.round((p - pm) * 60)

      ps = ("0" + ps).slice(-2)

      let pace = (pm == 'NaN' || ps == 'aN') ? "0:00" : pm + ":" + ps
      return pace
    },
    modified: function() {
      return !_.isEqual(this.entryData, this.originalData)
    }
  }, 
  watch: {
    didWeights: function() {
      if (this.didWeights && !this.entryData.weights)
        this.$set(this.entryData, 'weights', [{}])
    }
  }
}
</script>