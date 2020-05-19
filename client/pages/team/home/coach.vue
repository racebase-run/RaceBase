<template> 
<div class="mx-auto w-95 mt-4"> 
    <h1 v-if="!team"> The team you belong to no longer exists. </h1>
    <div v-else> 
        {{ team.name || "Your Team" }}
    </div>
    <div> @{{ team.team_id }} </div>
    <button class="btn btn-default"> 
        <nuxt-link to="/team/edit"> Edit Team Info </nuxt-link>
    </button>
    <button class="btn btn-default"> 
        <nuxt-link to="/team/rosters"> Rosters </nuxt-link>
    </button>
</div>
</template>
<script> 
export default {
  middleware: 'coach',
  async asyncData({ $axios, $router, store }) {
    let user = { ...store.state.auth.user }  
    let team = await $axios.$get('team/public/' + user.team_id);
    return {
        team: team
    }
  }, 
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>