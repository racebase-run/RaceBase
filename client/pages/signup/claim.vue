<style lang="less" scoped> 
ul {
  list-style: square;
}
</style>
<template>
<div class="w-90 mx-auto mt-4"> 
  <h2 class="d-inline-block"> Claim an Athlete ID </h2>
  <nuxt-link class="btn btn-default mb-3 d-inline-block ml-3" to="/welcome">
    Skip
  </nuxt-link>
  <p> RaceBase uses something called an <strong>Athlete ID</strong> to allow you to claim ownership of your results.</p>
  <p> Some benefits of claiming an Athlete ID are:</p>
  <ul>
    <li> All of your results in one place </li> 
    <li> Customize your profile with pictures, personal info, and more </li>
    <li> Link to your Strava profile </li>
  </ul>
  <p>Claim one now by searching for your results below, or you can skip this step for now.</p>
  <ResultsSearch v-model="searchInput"/>

  <p> Or, create your own Athlete ID: </p>
  <div class="input-group w-50 mb-5">
    <input v-model="custom" pattern="^\S*$" type="text" id="customInput" 
      placeholder="Athlete ID (no spaces)" class="form-control" />

    <span class="input-group-append">
      <button class="btn btn-primary" @click="claim"> Claim </button>
    </span>
  </div>
</div>
</template>

<script>
const ResultsSearch = () => import('~/components/Search/ClaimSearch')
export default {
  middleware: ['auth'],
  asyncData ({ params }) {
    let query = params.query ? decodeURI(params.query) : ""
    return {
      searchInput: query, 
      custom: ""
    }
  },
  methods: {
    claim: async function() {
      if (this.custom == "") return; 
      try {
        let res = await this.$axios.$post('user/claim/athlete/' + this.custom);
        await this.$store.dispatch('auth/fetchUser');
        this.$router.push('/welcome');
      } catch(e) {
        console.log(e.response.data);
      }
    }
  },
  components: { ResultsSearch }
}
</script>