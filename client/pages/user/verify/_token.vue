<template>
<div class="mt-3 ml-4"> 
  <h2> {{ response }}! </h2>
  <div>Click <nuxt-link to="/login">here</nuxt-link> to log in</div>
</div>
</template>
<script>
export default {
  async asyncData ({ $axios, params, redirect }) {
    let success = false
    let response = await $axios.$post('user/verify/' + params.token)
    if (response == "Successfully verified email")
      success = true
    return {
      response: response, 
      success: success
    }
  }
}
</script>