<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";
.btn-default {
  box-shadow: none;
  border: 1px solid @light-grey;
  padding: 3px 6px;
  text-transform: uppercase;
  color: @medium-grey;
  font-size: 14px;
  font-weight: 500;
}
</style>
<template>
<div class="d-flex ml-auto"> 
  <div class="btn btn-default d-inline-block ml-auto mt-auto" @click="changeToPrev"> Prev </div>
  <div class="btn btn-default d-inline-block ml-2" @click="changeToNext"> Next </div>
</div>
</template>

<script> 
import moment from 'moment'
let { formatDateUrl, getDateFromUrl } = require('~/utils/date.js')

export default {
  props: [ 'date', 'interval' ],
  methods: {
    changeToPrev: function() {
      if (!this.valid)
        return
      let prevDate = formatDateUrl(this.dateAsMoment.subtract(Number(this.interval), 'days'))
      this.$router.push({ params: { date: prevDate } })
    },
    changeToNext: function() {
      if (!this.valid)
        return
      let nextDate = formatDateUrl(this.dateAsMoment.add(Number(this.interval), 'days'))
      this.$router.push({ params: { date: nextDate } })
    }
  }, 
  computed: {
    valid: function() {
      return this.dateAsMoment.isValid()
    }, 
    dateAsMoment: function() {
      return moment(getDateFromUrl(this.date))
    }
  }
}
</script>