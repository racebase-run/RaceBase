<template>
<div class="mt-4 mx-auto w-95"> 
<h2 class="d-inline-block"> Claim a team </h2>
<nuxt-link class="btn btn-default mb-3 d-inline-block ml-3" to="/welcome">
  Skip
</nuxt-link>
<CoachClaimSearch />
</div>
</template>
<script>
const CoachClaimSearch = () => import('~/components/Search/CoachClaimSearch')
export default {
  components: { CoachClaimSearch }
}
</script>