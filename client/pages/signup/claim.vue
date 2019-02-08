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
  <p>You can claim one now by searching for your results below, or you can skip this step for now.</p>
  <ResultsSearch v-model="searchInput"/>
</div>
</template>

<script>
const ResultsSearch = () => import('~/components/Search/ClaimSearch')
export default {
  middleware: ['auth'],
  asyncData ({ params }) {
    let query = params.query ? decodeURI(params.query) : ""
    return {
      searchInput: query
    }
  },
  components: { ResultsSearch }
}
</script>