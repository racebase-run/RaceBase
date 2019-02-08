<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";

h4 {
  font-size: 19px;
  border-radius: 3px;
  padding: 3px 5px;
  width: auto;
  background: @light-grey + #191919;
}

ul {
  list-style: square;
}
</style>
<template>
  <div class="w-90 mx-auto mt-4 mb-5"> 
    <h2> Welcome to RaceBase! </h2>
    <p v-if="user.athlete_id"> 
      Congratulations on your new Athlete ID:
    </p>
    <h4 class="d-table" v-if="user.athlete_id">
      <nuxt-link :to="'/athlete/' + user.athlete_id">
        <fa icon="user"></fa>
        {{ user.athlete_id }} 
      </nuxt-link>
    </h4>

    <p class="mt-4 mb-2"> Now that you're all set up, 
    here are some things you can do to get started: </p>

    <h5> Change your <nuxt-link to="/user/settings">Settings</nuxt-link>: </h5>
    <ul v-if="user.athlete_id"> 
      <li> Set a profile picture </li>
      <li> Share your current training and racing shoes </li>
      <li> Add an alias to another Athlete ID that your results are under </li>
      <li> Add your location and Strava profile </li>
      <li> Share how many miles you run in a week </li>
    </ul>
    <ul v-else>
      <li> Claim an Athlete ID for more features </li>
    </ul>

    <h5> Check out your <nuxt-link to="/user/log/week">Running Log</nuxt-link>: </h5>
    <ul> 
      <li> Log your weight routines </li>
      <li> Enter multiple runs for a day </li>
      <li> See your total mileage for the week </li>
      <li> Plan out your mileage for the week </li>
      <li> Add custom Daily Checkboxes to keep track of anything you want</li>
      <li> Log your sleep and resting heart rate </li>
      <li> See insights about your data </li>
    </ul>
  
    <h5> Browse Results: </h5>
    <ul> 
      <li> 
        <nuxt-link to="/races/all">Search for a <strong>race</strong> </nuxt-link> 
      </li>
      <li> 
        <nuxt-link to="/search/">Search for a <strong>result</strong></nuxt-link> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  middleware: 'auth',
  async created () {
    await this.$store.dispatch('auth/fetchUser')
    this.user = { ...this.$store.state.auth.user }
  }
}
</script>