<style scoped>
.md >>> h1 {
  font-size: 30px;
}
.md >>> h2 {
  font-size: 27px;
}
.md >>> h3 {
  font-weight: 500;
  text-align: left;
  font-size: 20px;
}
.md >>> ul {
  list-style: square;
}
</style>

<template>
  <div class="md mt-3 mx-auto w-95" v-html="roadmap"></div>
</template>

<script>
import roadmap from '~/assets/Roadmap.md'

export default {
  head () {
    return {
      title: 'RaceBase Roadmap'
    }
  }, 
  asyncData () {
    return {
      roadmap: roadmap
    }
  }
}
</script>