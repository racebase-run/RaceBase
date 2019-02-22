<template>
<div class="mt-4 mx-auto w-95"> 
  These are {{ id }}'s logs! <br> {{ entry }} 
</div>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    let entry
    try {
      entry = await $axios.$get('/log/athlete/' + params.id + '/02-13-2019')
    } catch {
      entry = "Unauthorized"
    }

    return {
      id: params.id, 
      entry: entry
    }
  }
}
</script>