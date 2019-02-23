<style lang="less" scoped> 
.profile-pic {
  @size: 25px;
  border-radius: 3px;
  overflow: hidden;
  width: @size; height: @size;
}
</style>
<template>
<div class="mt-3 w-95 mx-auto">
<h2> {{ team.team_id }} </h2>

<div class="row"> 
  <div class="col">
    <h5> Athletes </h5>
    <div v-for="athlete in athletes" class="d-flex align-items-center mb-1">
      <ProfilePic v-if="athlete.profilePicUrl" class="profile-pic mr-2" :url="athlete.profilePicUrl" />
      <div class="mr-2"> {{ athlete.athlete_id }} </div>
      <div v-if="athlete.team_id == team.team_id" class="btn btn-outline-primary btn-small" @click="addToRoster(athlete.athlete_id)"> 
        Add to Roster
      </div> 
      <div v-else-if="athlete.name" class="btn btn-outline-primary btn-small">
        Invite
      </div>
    </div>
  </div>

  <div class="col">
    <h5> Current Roster </h5>
    <div v-for="athlete_id in team.roster">
      {{ athlete_id }}
      <div class=" ml-3 btn btn-outline-danger btn-small" @click="removeFromRoster(athlete_id)">
        Remove
      </div>
    </div>
  </div>
</div>

</div>
</template>
<script>
const ProfilePic = () => import('~/components/User/ProfilePic')
export default {
  components: { ProfilePic },
  async asyncData ({ $axios, store }) {

    let user = { ...store.state.auth.user }

    let team = await $axios.$get('/team/' + user.team_id)
    let users = await $axios.$get('/team/' + user.team_id + '/users')
    let athletes = await $axios.$get('/team/' + user.team_id + '/athletes')

    return {
      team: team, 
      athletes: athletes, 
      roster: []
    }
  }, 
  methods: {
    loadTeam: async function() {
      this.team = await this.$axios.$get('/team/' + this.team.team_id)
    }, 
    addToRoster: async function(athlete_id) {
      await this.$axios.$post('/team/roster/athlete/' + athlete_id)
      this.loadTeam()
    }, 
    removeFromRoster: async function(athlete_id) {
      await this.$axios.$delete('/team/roster/athlete/' + athlete_id)
      this.loadTeam()
    }
  }
}
</script>