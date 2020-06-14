<style lang="less" scoped>

ul {
  list-style-type: circle;
}

</style>

<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">

<h1 class="mt-4"> Press <fa :icon="['far', 'newspaper']"></fa> </h1>

<p class="w-lg-75 w-100">
  Our guidelines for the press are pretty simple: 

  <ul>
    <li> Spell our name RaceBase with an <strong> uppercase R </strong> 
      and <strong> uppercase B </strong>. 
    </li>
    <li> 
      <a 
        href="https://racebase.io/static/images/logo.svg" 
        target="_blank"
      > 
        Here 
      </a> 
      is our logo, feel free to use it!
    </li>
    <li> Our main font is <strong> Avenir Next </strong>
      - if you plan on using our name in conjunction with our logo, 
      please use Avenir Next.
    </li>
    <li> If you are using our brand in graphics, please use our main colors: <br>
      <strong> RaceBase Blue </strong>
      <span style="color: #468DF5"> (#468DF5) </span>, 
      <strong> Deep RaceBase Blue </strong>,
      <span style="color: #3976D0"> (#3976D0) </span>
      or <strong> Dark RaceBase Blue </strong>
      <span style="color: #1E54A3"> (#1E54A3) </span>.
    </li>
    <li> Finally, if you use any of our marketing materials, please link to us. </li>
  </ul>

  <strong> Thank you! </strong>

</p>

</div>
</template>

<script> 
export default {
  head () {
    return {
      title: "Press Kit - RaceBase", 
      meta: [{
        hid: "Description", 
        name: "description", 
        content: "Our guidelines for using the RaceBase brand in the media."
      }, {
        hid: "OpenGraph Image", 
        property: 'og:image', 
        content: process.env.ROOT_URL + '/images/opengraph/press.png'
      }, {
        hid: "OpenGraph URL", 
        property: 'og:url', 
        content: process.env.ROOT_URL + '/press'
      }]
    }
  }
}
</script>