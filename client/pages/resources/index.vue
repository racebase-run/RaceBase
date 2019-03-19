<style lang="less" scoped> 
h2 {
  font-size: 20px;
}
</style>
<template>
<div class="w-90 mx-auto mt-4">
  <div> 
    <h1 class="mb-3"> Training Tools <fa icon="tools"></fa> </h1>
    <h2> <nuxt-link to="/resources/tools/pacezones"> Pace Zone Calculator </nuxt-link> </h2>
    <div class="mb-3"> A tool to help you find optimal training zones given your PR race pace. </div>

    <h2> <nuxt-link to="/resources/tools/splits">Split Calculator</nuxt-link> </h2>
    <div> Useful for figuring out projected finish times and calculating average splits from workouts. </div>
  </div>

  <div>
    <h1 class="mt-4"> Other </h1>
    <h2> <nuxt-link to="/roadmap"> Roadmap </nuxt-link> </h2>
    <div> Where we're headed. </div>
  </div>
</div>
</template>

<script> 
export default {
  head () {
    return {
      title: "Training Resources - RaceBase"
    }
  }
}
</script>