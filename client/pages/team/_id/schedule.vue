<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';
.meet-title {
  font-size: 23px; 
  font-weight: 500; 
}
.meet-date {
  color: @bright-blue;
  font-size: 20px;
}
</style>
<template> 
<div class="mx-auto w-95 mt-4">
  <div class="d-flex align-items-center mb-2">
    <h2> 
      {{ team.name || team.team_id }} - Meet Schedule
    </h2>
    <div class="copy ml-auto">
      <div class="btn btn-primary btn-small" v-clipboard:copy="'https://racebase.io/team/' + team.team_id + '/schedule'" @click="copied = true">
        <span v-if="!copied">
          <fa icon="clipboard"></fa> 
          Copy Link to Clipboard
        </span>
        <span v-else>
          <fa icon="check"></fa>
          Copied
        </span>
      </div>
    </div>
  </div>
  <div class="meet p-2 px-3" v-for="meet in team.schedule"> 
    <div class="d-flex align-items-center">
      <div class="meet-title">{{ meet.name }}</div>
      <div class="meet-date ml-auto">
        <fa icon="calendar-alt" class="mr-2"></fa> 
        {{ formatDate(meet.date) }} 
      </div>
    </div>
    <div class="meet-location"> 
      <fa icon="map-marker-alt" class="mr-2"></fa>
      {{ meet.location }} 
    </div>
  </div>
</div>
</template>
<script>
import moment from 'moment'
export default {
  async asyncData({ $axios, params }) {
    let team = await $axios.$get('/team/public/' + params.id)
    return {
      team: team, 
      copied: false
    }
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format('MMMM DD YYYY')
    }
  }
}
</script>