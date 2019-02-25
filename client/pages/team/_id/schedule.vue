<template> 
<div class="mx-auto w-95 mt-4">
  <h2> 
    {{ team.name || team.team_id }} - Meet Schedule
  </h2>
  <div v-for="meet in team.schedule">
    {{ meet.name }}: {{ formatDate(meet.date) }}
  </div>
</div>
</template>
<script>
import moment from 'moment'
export default {
  async asyncData({ $axios, params }) {
    let team = await $axios.$get('/team/public/' + params.id)
    return {
      team: team
    }
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format('MMMM DD YYYY')
    }
  }
}
</script>