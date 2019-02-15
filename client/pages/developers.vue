<style lang="less" scoped>

h2 {
  font-size: 34px;
}

</style>

<template>
<SidebarWrapper>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">

<h1 class="mt-4 mb-3"> For Developers <fa icon="code"></fa> </h1>
<h2 class="mb-3"> RaceBase API </h2>

<div class="mb-3 d-flex align-items-center"> 
  <a class="mr-3 btn btn-outline-dark" href="https://github.com/racebase-io" target="_blank"> 
    View on GitHub
  </a>
  <nuxt-link class="btn btn-outline-primary" to="/changelog">Changelog</nuxt-link>
</div>

<p class="w-lg-75 w-100"> 
  RaceBase was designed upon an extensible and maintanable API 
  that we built from the ground up to be used by the community. 
  We are now in the final stages of creating documentation
  that will be made available right here in the coming weeks. 
  In the meantime, if you would like to dig deeper, feel free to 
  have a look at our frontend code in the Web Inspector of your 
  browser for examples of how you can use our API. 
</p>

</div>
</SidebarWrapper>
</template>
<script> 
export default {
  head () {
    return {
      title: "RaceBase API", 
      meta: [{
        hid: "Description", 
        name: "description", 
        content: "Help us on our mission to make cross country results more accessible to everyone and open to the community. Build your application today with the RaceBase API"
      }, {
        hid: "OpenGraph Image", 
        property: 'og:image', 
        content: process.env.ROOT_URL + '/images/opengraph/api.png'
      }, {
        hid: "OpenGraph URL", 
        property: 'og:url', 
        content: process.env.ROOT_URL + '/developers'
      }]
    }
  }
}
</script>