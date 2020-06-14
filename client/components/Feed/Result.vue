<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

.result {
  display: table;
  border-radius: 5px;
  border: 1px solid @light-grey;
  .time {
    font-family: 'DS Digital', 'Helvetica', sans-serif;
    color: @bright-blue;
    font-size: 21px;
  }

  .place  {
    text-align: center;
    .fa-trophy {
      font-size: 12px;
      padding-bottom: 3px;
    }
  }
}
</style>
<template>
<div class="result p-2">
  <div class="place d-inline-block mr-3">
    <fa icon="trophy"></fa>
    {{ result.place }}
  </div>
  <div class="time d-inline-block mr-2"> {{ result.time }} </div>
  <div class="d-inline-block mr-1">for 
    <strong>{{ distance }}</strong>
  </div>
  <div class="d-inline-block mr-2">at&nbsp;
    <nuxt-link :to="'/races/' + result.race_id">
      {{ result.race }} 
    </nuxt-link>
  </div>
</div>
</template>

<script>
let { format } = require('~/utils/distance.js') 
export default {
  props: ['result'], 
  computed: {
    distance: function() {
      return format(this.result.event)
    }
  }
}
</script>