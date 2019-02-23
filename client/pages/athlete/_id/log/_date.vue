<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';
h5 {
  text-transform: uppercase;
  font-size: 18px;
}

.fa-pencil-alt, .fa-heartbeat, .fa-bed {
  font-size: 13px;
}

.fa-heartbeat { color: @pink; }
.fa-bed { color: @orange; }

.note strong {
  color: @blue;
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
  <div v-if="entry.runs">
    <h5> Runs </h5>
    <div v-for="(run, i) in entry.runs">
      {{ run.name || 'Run ' + Number(i+1) }}, 
      {{ run.distance }} mi
      {{ run.time }} min
      {{ run.pace }} min / mi
      {{ run.feel }} / 5 feel
      {{ run.difficulty }} / 5 difficulty
    </div>
  </div>

  <div class="other">
    <div> <fa icon="bed"></fa> {{ entry.sleep }} hrs </div>
    <div> <fa icon="heartbeat"></fa> {{ entry.rhr }} bpm </div>
  </div>

  <div v-for="(value, key) in entry.checks"> 
    {{ key }} {{ value }}
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
  async asyncData({ params, $axios }) {
    // get entry for specified day
    let entry = await $axios.$get('/log/athlete/' + params.id + '/' + params.date)

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