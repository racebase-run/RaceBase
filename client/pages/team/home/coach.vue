<template> 
<div class="mx-auto w-95 mt-4"> 
    <h1 v-if="!team"> The team you belong to no longer exists. </h1>
    <h1 v-else> 
        {{ team.name || "Your Team" }}
    </h1>
    <div class="mb-3"> @{{ team.team_id }} </div>
    <div class="mb-3"> 
      <button class="btn btn-default"> 
          <nuxt-link to="/team/edit"> <fa icon="pencil-alt" class="mr-1"/> Edit Team Info </nuxt-link>
      </button>
      <button class="btn btn-default"> 
          <nuxt-link to="/team/rosters"> <fa icon="users" class="mr-1" /> Rosters and Groups </nuxt-link>
      </button>
      <button class="btn btn-default"> 
        <nuxt-link to="/team/schedule"> <fa icon="calendar-alt" class="mr-1"/> Meet Schedule </nuxt-link>
      </button>
    </div>

    <h5> Active Athletes </h5>
    <div class="active section mb-4" v-if="active.length > 0">
      <div v-for="athlete in active" class="athlete p-2">
        <div class="d-flex align-items-center"> 
          <ProfilePic class="profile-pic mr-2" :url="athlete.profilePicUrl" />
          <div class="ml-2"> 
            <div class="name"> {{ athlete.name }} </div>
            <nuxt-link :to="'/athlete/' + athlete.athlete_id"> 
              @{{ athlete.athlete_id }} 
            </nuxt-link>
          </div>
          <div class="ml-auto">       

            <button v-if="athlete.team_id == team.team_id" class="btn btn-default btn-small" disabled>
              Joined <fa icon="check" class="ml-2" />
            </button>

            <div v-else-if="athlete.name">

              <div v-if="!athlete.sentInvite" class="btn btn-primary btn-small" @click="athlete.showInvite = true">
                <fa icon="envelope" class="mr-1"></fa>Invite
              </div>
              <div class="btn btn-dark btn-small" v-else> 
                <fa icon="check"></fa> Invited
              </div>

            </div>

          </div>
        </div>
        <div v-if="athlete.showInvite && !athlete.sentInvite" class="mt-2"> 
          Are you sure? This will <strong>send an email</strong> to {{ athlete.name }}. 
          <div class="d-flex align-items-center mt-2">
            <div class="btn-small btn btn-outline-primary mr-2" @click="inviteAthlete(athlete)">Yes, send invite</div>
            <div class="btn-small btn btn-outline-danger" @click="athlete.showInvite = false">No</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="mt-4"> 
      <h1> No active athletes yet. </h1>
    </div>

  </div>

</div>
</template>
<script> 
import _ from 'underscore'
export default {
  middleware: 'coach',
  async asyncData({ $axios, $router, store }) {
    let user = { ...store.state.auth.user }  
    let team = await $axios.$get('team/public/' + user.team_id);

    let active = await $axios.$get('/team/' + user.team_id + '/active');
    // add false showInvite and sentInvite properties for reactivity
    for (const a of active) { a.showInvite = false; a.sentInvite = false }
    return {
      team: team, 
      active: active
    }
  }, 
  methods: {
    inviteAthlete: async function(athlete) {
      try {
        let res = await this.$axios.$post('/team/invite/' + athlete.athlete_id)
        athlete.sentInvite = true
        athlete.showInvite = false
      } catch (err) {
        console.log(err.response.data)
      }
    }
  }, 
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>