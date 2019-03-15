<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';
.header {
  text-transform: uppercase;
  font-weight: 500; 
  font-size: 14px;
  border-bottom: 1px solid @light-grey;
}

.split-table {
  border: 1px solid @light-grey;
  border-radius: 5px; 
  .split {
    font-size: 20px;
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
      <div class="d-flex header mb-3 py-2">
        <div class="col"> Distance </div>
        <div class="col"> Time </div>
        <div class="col d-flex align-items-center"> 
          Pace (Min / 
          <UnitSelector class="ml-2" v-model="paceUnit" name="paceUnit" />)
        </div>
        <div class="col"> Projected </div>
      </div>
      <div class="d-flex mb-3 split" v-for="split in splits">
        <div class="col"> {{ split.distance }} {{ split.unit == 'kilometers' ? 'km' : 'mi' }} </div>
        <div class="col"> {{ split.time }} </div>
        <div class="col"> {{ getPace(split.time, split.distance, split.unit) }} </div>
        <div class="col"> {{ getProjection(split.time, split.distance, split.unit) }} </div>
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

</div>
</template>
<script> 
const conv = 1.60934
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
  }
}
</script> 