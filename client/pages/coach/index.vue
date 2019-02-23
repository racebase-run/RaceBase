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
      <div v-if="athlete.active" class="btn btn-outline-primary btn-small"> 
        Add to Roster
      </div> 
    </div>
  </div>

  <div class="col">
    <h5> Current Roster </h5>
    <div v-for="athlete in team.roster">
      {{ athlete.name }}
      <div class=" ml-3 btn btn-outline-danger btn-small">Remove</div>
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
    let data = await $axios.$get('/team/' + user.team_id + '/athletes')

    let athletes = []

    for (const athlete of data) {
      let a = await $axios.$get('/user/athlete/' + athlete)
      a.athlete_id = athlete
      athletes.push(a)
    }

    return {
      team: team, 
      athletes: athletes, 
      roster: []
    }
  }
}
</script>