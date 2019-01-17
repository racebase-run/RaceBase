<style lang="less" scoped>

h1 {
  font-size: 25px;
}

</style>

<template>
<div class="page-header pt-4">
  <h1> {{ race.name }} </h1>

  <span class="date mr-2">
    {{ race.date }}
  </span>

  <span class="location mr-2">
    <fa icon="map-marker-alt"></fa>
    {{ race.location }}
  </span>

  <span class="user">
    <fa icon="user-circle"></fa> 
    <span v-if="!race.user">Anonymous</span>
    {{ race.user }}
  </span>

  <a 
    :href="'https://twitter.com/intent/tweet?text='
      + encodeURI('Check out this race on RaceBase! ')
      + encodeURI(link)
      + '/'
      + '&hashtags=racebase'"
    class="ml-2" 
    target="_blank"
    data-hashtags="racebase" 
  > 
    <fa :icon="['fab', 'twitter']"></fa> Tweet
  </a>

  <a class="official ml-2" v-if="race.link" :href="race.link" target="_blank"> 
    <fa icon="external-link-alt"></fa>
  </a>

</div>
</template>

<script>
export default {
  props: [ 'race' ], 
  data () {
    return {
      link: process.env.ROOT_URL + this.$route.path
    }
  }
};
</script>