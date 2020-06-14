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
h3 {
  text-transform: uppercase;
  font-size: 18px;
  text-align: left;
}
.meet {
  border-top: 1px solid @light-grey;
}
</style>
<template> 
<div class="mx-auto w-95 mt-4">
  <div class="d-flex align-items-center mb-2">
    <div> 
      <h2> 
        {{ team.name || team.team_id }}
      </h2>
      <h3> Meet Schedule </h3>
    </div>
    <div class="copy ml-auto">
      <div class="btn btn-primary btn-small" v-clipboard:copy="link" @click="copied = true">
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
  <div v-if="team.schedule.length > 0" >
    <div class="meet px-0 py-3" v-for="meet in team.schedule"> 
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
  <div class="mt-4" v-else> 
    <h1> This team doesn't have a schedule yet. </h1>
  </div>
</div>
</template>
<script>
import moment from 'moment'
export default {
  head () {
    return {
      title: (this.team.name || this.team.team_id) + " Meet Schedule - RaceBase"
    }
  },
  async asyncData({ $axios, params }) {
    let team = await $axios.$get('/team/public/' + params.id)
    return {
      team: team, 
      copied: false, 
      teamId: params.id, 
    }
  },
  data () {
    return {
      link: process.env.ROOT_URL + this.$route.path
    }
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format('MMMM DD YYYY')
    }
  }
}
</script>