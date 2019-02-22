<template>
<div class="mt-4 mx-auto w-95"> 
  These are {{ id }}'s logs! <br> {{ entry }} 
</div>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    let entry = await $axios.$get('/log/athlete/' + params.id)
    return {
      id: params.id, 
      entry: entry
    }
  }
}
</script>