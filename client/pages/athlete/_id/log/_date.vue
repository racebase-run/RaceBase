<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';
h5 {
  text-transform: uppercase;
  font-size: 18px;
}

.fa-pencil-alt, .fa-heartbeat, .fa-bed {
  font-size: 13px;
  margin-right: 3px;
}

.fa-heartbeat { color: @pink; }
.fa-bed { color: @orange; }

.note strong {
  color: @blue;
}

.check {
  label {
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 500;
  }
}

.run {
  display: inline-block;
  border: 1px solid @light-grey;
  border-radius: 5px;

  .mileage {
    font-weight: 500; 
    font-size: 23px;
    color: @bright-blue;
  }

  .title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  div {
    font-size: 18px; 
    margin: 0 10px;
    label {
      font-size: 14px;
      color: @label-grey;
      text-transform: uppercase;
      font-weight: 400; 
    }
  }

  .subjectives {
    font-weight: 500; 
  }

  .f1 { color: @pink; }
  .f2 { color: @orange; }
  .f3 { color: @green; }
  .f4 { color: @bright-blue; }
  .f5 { color: @purple; }

}

.other {
  font-weight: 500;
}

.weights {

  .table-container {
    border: 1px solid @light-grey;
    border-radius: 5px;
    display: inline-block;
  }

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
    color: black;
    font-weight: 400;
    text-align: right;
  }
}

</style>
<template>
<div class="mx-auto w-95 mt-4">
  <h4> {{ athlete.name }} - {{ dateFormatted }} </h4>
  <div v-if="entry.note" class="note mb-2"> 
    <strong><fa icon="pencil-alt"></fa> Note: </strong> {{ entry.note }}
  </div>
  <div v-if="entry.runs" class="mt-3">
    <h5> Runs </h5>
    <div v-for="(run, i) in entry.runs" class="run p-2 mr-3 mb-3">
      <div class="title mb-2"> {{ run.name || 'Run ' + Number(i+1) }}</div>
      <div class="stats d-flex justify-content-center align-items-center">
        <div class="mileage"> {{ run.distance }} <label>mi</label> </div>
        <div> {{ run.time }} <label>min</label> </div>
        <div> {{ run.pace }} <label>min / mi</label> </div> 
      </div>
      <div class="subjectives d-flex justify-content-center">
        <div :class="'f' + run.feel"> {{ run.feel }} <label> / 5 feel </label> </div>
        <div :class="'f' + run.difficulty"> {{ run.difficulty }} <label> / 5 difficulty </label> </div>
      </div>
    </div>
  </div>

  <div class="other d-flex mt-3 mb-4">
    <div class="sleep mr-2"> <fa icon="bed"></fa> {{ entry.sleep }} hrs </div>
    <div class="rhr mr-2"> <fa icon="heartbeat"></fa> {{ entry.rhr }} bpm </div>

    <div class="check mr-2" v-for="(value, key) in entry.checks">
      <label class="mr-2">{{ key }}</label> 
      <input type="checkbox" :value="value" disabled />
    </div>
  </div>

  <div class="weights mt-2" v-if="entry.weights">
    <h5> Weights </h5>
    <div class="table-container p-3">
      <table> 
        <thead> 
          <tr> 
            <th> </th>
            <th> Sets </th>
            <th> </th>
            <th> Reps </th>
          </tr>
        </thead>

        <tbody> 
          <tr v-for="(exercise, index) in entry.weights">
            <td class="exercise"> {{ exercise.name }} </td>
            <td> {{ exercise.sets }} </td>
            <td class="x"> x </td>
            <td> {{ exercise.reps }} </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>
</template>
<script>
import moment from 'moment'
const dateUtil = require('~/utils/date')
export default {
  async asyncData({ params, $axios, redirect }) {
    let entry
    // get entry for specified day
    try {
      entry = await $axios.$get('/log/athlete/' + params.id + '/' + params.date)
    } catch(e) { redirect('/login') }

    // get athlete's profile data
    let athlete = await $axios.$get('/user/athlete/' + params.id)

    // calculate pace for runs
    for (const run of entry.runs) {
      run.pace = dateUtil.getPace(run.time, run.distance)
    }

    // format date
    let date = dateUtil.getDateFromUrl(params.date)
    let dateFormatted = moment(date).format("MMMM D YYYY")

    return {
      entry: entry, 
      dateFormatted: dateFormatted, 
      athlete: athlete
    }
  }  
}

</script>