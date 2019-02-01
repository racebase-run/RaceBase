<template>
<div class="d-flex"> 
  <div class="btn btn-default log-pager d-inline-block mt-auto" @click="changeToPrev"> Prev </div>
  <div class="btn btn-default log-pager d-inline-block ml-2" @click="changeToNext"> Next </div>
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