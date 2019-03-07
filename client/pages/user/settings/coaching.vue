<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

.claim-prompt {
  font-size: 20px; 
  text-align: center;
  color: @medium-grey;
  .btn {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">

  <h1 class="mt-4"> 
    <fa icon="cogs"></fa> Coaching 
  </h1>

  <SettingsNav :coach="user.coach"/>

  <div v-if="!user.team_id" class="claim-prompt my-4"> 
    <div> To get started with coaching... </div>
    <nuxt-link to="/signup/coach/claim" class="btn btn-primary mt-3">Claim your team</nuxt-link>
  </div>

  <div class="settings-section" v-else>
    <div v-if="user.team_id" class="d-flex align-items-center">  
      <div> Your team: </div>
      <nuxt-link :to="'/team/' + user.team_id" class="ml-2">
        {{ user.team_id }}
      </nuxt-link>
      <div class="btn btn-outline-primary btn-small ml-3" @click="unclaimTeam">
        Unclaim
      </div>
    </div>
    <div v-else> 
      <nuxt-link to="/signup/coach/claim">Claim a team</nuxt-link>
    </div>
    <div class="mt-2" v-if="user.team_id"><strong>Join Code:</strong> {{ team.join_code }}</div>
  </div>

</div>
</template>
<script> 
const SettingsNav = () => import('~/components/Settings/SettingsNav')
export default {
  components: {SettingsNav}, 
  async asyncData ({ store, $axios }) {

    let user = { ...store.state.auth.user }
    let team = null

    try {
      if (user.team_id && user.coach)
        team = await $axios.$get('/team/' + user.team_id)
      else if (user.team_id)
        team = await $axios.$get('/team/public/' + user.team_id)   
    } catch (e) { 
      console.log(e)
    }

    return {
      user: user, 
      team: team, 
      coachAccount: user.coach 
    }
  }, 
  methods: {
    unclaimTeam: async function() {
      let res = await this.$axios.$post('/user/unclaim/team')
      console.log(res)
      this.loadUser()
    }, 
    loadUser: async function() {
      await this.$store.dispatch('auth/fetchUser')
      this.user = { ...this.$store.state.auth.user }
      this.currentEmail = this.user.email
    }
  }
}
</script>