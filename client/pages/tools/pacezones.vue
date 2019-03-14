<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";

thead {
  th {
    border-top: none;
    font-weight: 500; 
    text-align: center;
    padding: 0px 10px;
  }
}

td {
  text-align: center;
}

.slider {
  display: block;
  width: 100%;
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

.pr {
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
}

.pace {
  color: @bright-blue;
  font-size: 28px;
  margin-left: 3px; 
  font-family: 'DS Digital'
}

.output {
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  border-radius: 5px; 
  border: 1px solid @light-grey;
}

.zone {
  text-transform: uppercase;
  font-weight: 500; 
  font-size: 23px;
}

.unit {
  text-transform: none; 
  font-size: 16px;
  font-weight: normal;
}

</style>
<template>
<div class="mx-auto w-95 mt-4">
  <h1> Pace Zone Calculator <fa icon="calculator"></fa></h1>
  <p> Enter your PR for any distance below: </p>
  <div class="container my-4">
    <div class="row">
      <input type="text" placeholder="Finishing Time" class="col mr-3 form-control" v-model="input.time"/>
      <input type="number" placeholder="Distance" class="col form-control" v-model="input.distance"/> 
    </div>
  </div>

  <div class="pr mb-3"> PR Pace: <span class="pace">{{ pace }}</span> <span class="unit"> min / mi </span></div>

  <div class="output">

    <table class="table">
      <thead> 
        <tr> 
          <th v-for="zone in zones"> 
            {{ zone.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr> 
          <td v-for="(zone, index) in zones">
            {{ calculatePace(zone.range[0]) }} - {{ zone.range[1] ? calculatePace(zone.range[1]) : 'INF' }}
          </td>
        </tr>
      </tbody>
    </table>
    
    <div class="d-flex align-items-center"> 
      <div> <span class="pace"> {{ calculatePace(curDist) }} </span> min / mi </div> 
      <div class="zone ml-auto"> {{ getZone(curDist) }} </div>
    </div>

    <div class="slider mt-3">
      <input 
        type="range" 
        :min="0" :max="13" 
        :step="0.2"
        class="slider mb-2"
        v-model="scaleVal"
      />
    </div>

  </div>

</div>
</template>

<script> 
// human minimum pace
const hl = 2.57; 

// constants
const o = 160; 
const a = 30.5;
const u = 1.46;

// logarithm function
function logBase(x, y) {
  return Math.log(y) / Math.log(x);
}

import { timeStringToDecimal, timeDecimalToString, getPace } from '~/utils/date'
export default {
  data () {
    return {
      zones: [
        { name: 'Anaerobic', range: [0, 2.7] },
        { name: 'V02', range: [2.7, 5] }, 
        { name: 'CV', range: [5, 8.4] }, 
        { name: 'LT', range: [8.4, 14.0] }, 
        { name: 'AT', range: [14.0, 43.0] }, 
        { name: 'Aerobic', range: [43.0, 95.0] }, 
        { name: 'Recovery', range: [95.0, null] }
      ],
      input: {
        time: "", 
        distance: 0
      }, 
      scaleVal: 0
    }
  },
  methods: {
    slowDown: function(dist) {
      return (1 + (dist/o)) * logBase(a, this.k*dist + 1)
    },
    calculatePace: function(dist) {
      return timeDecimalToString(this.paceLimit + this.slowDown(dist))
    }, 
    calculatePaceDecimal: function(dist) {
      return this.paceLimit + this.slowDown(dist)
    },
    getZone: function(dist) {
      for (const zone of this.zones) {
        let min = zone.range[0]
        let max = zone.range[1]
        if (dist >= min && dist < max) return zone.name
      }
      return "Recovery"
    }
  }, 
  computed: {
    timeDecimal: function() {
      return timeStringToDecimal(this.input.time) 
    }, 
    pace: function() {
      return getPace(this.input.time, this.input.distance)
    },
    paceDecimal: function() {
      return timeStringToDecimal(this.pace)
    },
    k: function() {
      let d = Number(this.input.distance)
      let l = this.paceLimit
      let p = this.paceDecimal
      let exp = Math.pow( a, (p - l) / ((d / o) + 1) )
      return (exp - 1) / d
    }, 
    paceLimit: function() {
      let z = Math.pow(u, this.paceDecimal)
      return z / (Number(this.input.distance) + (z / (this.paceDecimal - hl))) + hl
    }, 
    curDist: function() {
      return Math.pow(this.scaleVal, 1.83)
    }
  }
}
</script>