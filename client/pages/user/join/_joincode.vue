<template>
<div class="mt-3 ml-4"> 
  <h2> {{ message }}! </h2>
  <div>Click <nuxt-link to="/login">here</nuxt-link> to log in</div>
</div>
</template>
<script> 
export default {
  async asyncData ({ $axios, redirect, params }) {
    let res = await $axios.$post('team/join/' + params.joincode)
    let message
    if (res == "Joined team")
      message = "Successfully joined team"
    else 
      message = "Something went wrong"
    return {
      message: message
    }
  }
}
</script>