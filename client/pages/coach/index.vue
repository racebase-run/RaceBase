<style lang="less" scoped> 
.profile-pic {
  @size: 30px;
  width: @size; height: @size;
}
</style>
<template>
<div class="mt-3 w-95 mx-auto">
<h2> {{ team.name }} </h2>
<h1> Current Roster </h1>
<div class="roster mt-3">
  <div v-for="athlete in team.roster" class="mb-1">

    <div v-if="!athlete.athlete_id" class="d-flex align-items-center">
      <div class="btn btn-outline-primary btn-small mr-2">
        Invite
      </div>
      <div> {{ athlete.name }} </div>
    </div>

    <div class="d-flex align-items-center" v-else> 
      <ProfilePic class="profile-pic mr-2" :url="athlete.profilePicUrl" />
      <nuxt-link :to="'/athlete/' + athlete.athlete_id + '/logs'">
        {{ athlete.name }}
      </nuxt-link>
    </div>

  </div>
</div>
</div>
</template>
<script>
const ProfilePic = () => import('~/components/User/ProfilePic')
export default {
  components: { ProfilePic },
  async asyncData ({ $axios }) {
    let team = {
      name: "Chico State", 
      roster: [{
        name: "Cameron Tomlinson", 
        athlete_id: ""
      },
      {
        name: "Matt Herrera", 
        athlete_id: "mherrera"
      },
      {
        name: "Remington Breeze", 
        athlete_id: "remingtonbreeze"
      }]
    }

    for (const athlete of team.roster) {
      if (athlete.athlete_id) {
        let data = await $axios.$get('/user/' + athlete.athlete_id + '/profilePic')
        if (data.url) athlete.profilePicUrl = data.url
        else athlete.profilePicUrl = null       
      }
    }

    return {
      team: team
    }
  }
}
</script>