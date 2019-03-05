<template>
<div class="mt-4 mx-auto w-95"> 
<h2 class="d-inline-block"> Claim a team </h2>
<nuxt-link class="btn btn-default mb-3 d-inline-block ml-3" to="/welcome">
  Skip
</nuxt-link>
<div class="mb-3"> Search for your team below and claim it to get started. </div>
<CoachClaimSearch />
</div>
</template>
<script>
const CoachClaimSearch = () => import('~/components/Search/CoachClaimSearch')
export default {
  middleware: 'coach',
  components: { CoachClaimSearch }
}
</script>