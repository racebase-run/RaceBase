<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';
.header {
  text-transform: uppercase;
  font-weight: 500; 
  font-size: 14px;
  border-bottom: 1px solid @light-grey;
}

.averages-header {
  text-align: left; 
  color: @bright-blue;
  border-top: 1px solid @light-grey;
}

.split-table {
  border: 1px solid @light-grey;
  border-radius: 5px; 
  .split {
    font-size: 20px;
  }
  .averages {
    font-size: 17px;
  }
  .time {
    font-family: 'DS Digital';
    font-size: 25px;
  }
}

.no-splits {
  padding: 20px; 
  text-align: center;  
  .big {
    font-size: 20px; 
    font-weight: 500; 
    text-transform: uppercase;
  }
}

.log-entry {
  h4 {
    text-transform: uppercase;
    font-size: 18px;
  }
}
</style>
<template>
<div class="container w-95 mt-4">
  <h1 class="mb-4"> Split Calculator <fa icon="calculator"></fa> </h1>
  <div class="settings d-flex mb-3">
    <input type="number" class="form-control" v-model="projectedDist" placeholder="Projected Distance"/> 
    <UnitSelector class="px-3" v-model="projectedDistUnit" name="projectedDistUnit" />
  </div>
  <div class="split-table mb-3">
    <div v-if="splits.length > 0">
      <div class="d-flex header mb-2 py-2">
        <div class="col"> Distance </div>
        <div class="col"> Time </div>
        <div class="col d-flex align-items-center"> 
          Pace (Min / 
          <UnitSelector class="ml-2" v-model="paceUnit" name="paceUnit" />)
        </div>
        <div class="col"> Projected </div>
      </div>
      <div class="d-flex mb-2 split" v-for="split in splits">
        <div class="col"> {{ split.distance }} {{ split.unit == 'kilometers' ? 'km' : 'mi' }} </div>
        <div class="col time"> {{ split.time }} </div>
        <div class="col time"> {{ getPace(split.time, split.distance, split.unit) }} </div>
        <div class="col time"> {{ getProjection(split.time, split.distance, split.unit) }} </div>
      </div>
      <div class="averages-header header py-1 mb-2 pl-3"> Averages </div>
      <div class="d-flex mb-2 averages">
        <div class="col"> {{ splitAverages.distance }} {{ input.unit == 'kilometers' ? 'km' : 'mi' }} </div>
        <div class="col"> {{ splitAverages.time }} </div>
        <div class="col"> {{ splitAverages.pace }} </div>
        <div class="col"> {{ splitAverages.projection }} </div>
      </div>
    </div>
    <div class="no-splits" v-else> 
      <div class="big"> No splits yet! </div>
      Add some below...
    </div>
  </div>
  <div class="d-flex align-items-center"> 
    <input type="number" class="form-control col mr-2" v-model="input.distance" placeholder="Distance" />
    <UnitSelector class="px-3" v-model="input.unit" name="splitUnit"/>
    <input type="text" class="form-control col mr-2" v-model="input.time" placeholder="Time" />
    <button class="btn btn-primary" @click="addSplit"> Add Split </button>
  </div>

  <div class="mt-3 log-entry mb-5"> 
    <h4> Log Entry </h4>
    <div> {{ logEntry || "Add some splits to get started" }} </div>
  </div>

</div>
</template>
<script> 
const conv = 1.60934
import _ from 'underscore'
const UnitSelector = () => import('~/components/Tools/UnitSelector')
import { timeStringToDecimal, timeDecimalToString, getPace } from '~/utils/date'
export default {
  components: { UnitSelector },
  data () {
    return {
      input: {
        distance: null, 
        time: '', 
        unit: 'miles'
      }, 
      splits: [], 
      unit: false, 
      projectedDist: null, 
      projectedDistUnit: 'miles', 
      paceUnit: 'miles'
    }
  }, 
  methods: {
    addSplit: function() {
      this.splits.push({ distance: this.input.distance, time: this.input.time, unit: this.input.unit })
      this.input.time = null
    }, 
    getPace: function(time, dist, unit) {
      // if the units of Pace Unit and Split are equal, don't convert. otherwise, convert to correct unit 
      let conversion = unit == this.paceUnit ? 1 : (unit == 'kilometers' ? (1/conv) : conv)
      return getPace(time, dist*conversion)
    }, 
    getProjection: function(time, dist, unit) {
      // if the units of Projected Distance and Split are equal, don't convert. otherwise, convert to correct unit 
      let conversion = unit == this.projectedDistUnit ? 1 : (unit == 'kilometers' ? (1/conv) : conv)
      let t = timeStringToDecimal(time)
      let distConverted = conversion * dist
      return timeDecimalToString((t / distConverted) * this.projectedDist)
    }
  }, 
  computed: {
    splitAverages: function() {
      let totals = {
        distance: 0, 
        time: 0
      }
      for (const split of this.splits) {
        let conversion = split.unit == this.input.unit ? 1 : (split.unit == 'kilometers' ? (1/conv) : conv)
        totals.distance += Number(split.distance * conversion)
        totals.time += timeStringToDecimal(split.time)
      }
      let averages = {}
      averages.distance = Math.round(100 * totals.distance / this.splits.length) / 100
      averages.time = timeDecimalToString(totals.time / this.splits.length)
      let conversion = this.input.unit == this.paceUnit ? 1 : (this.input.unit == 'kilometers' ? (1/conv) : conv)
      averages.pace = getPace(averages.time, averages.distance * conversion)
      averages.projection = this.getProjection(averages.time, averages.distance, this.input.unit)
      return averages
    }, 
    logEntry : function() {

      let entry = ""
      let splitDistances = _.groupBy(this.splits, 'distance')

      for (const [j, splitDistance] of Object.keys(splitDistances).reverse().entries()) {
        let curSplits = splitDistances[splitDistance]
        let label = curSplits[0].unit == "miles" ? "mi" : "km"
        entry += curSplits.length + " x " + splitDistance + " " + curSplits[0].unit + " "
        entry += "("
        for (const [i, split] of curSplits.entries()) {
          entry += split.time
          if (i+1 < curSplits.length) entry += ", "
        }
        entry += ")"
        if (j+1 < Object.keys(splitDistances).length) entry += ", "
      }
      return entry
    }
  }
}
</script> 