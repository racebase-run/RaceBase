<style lang="less" scoped>

h2 {
  font-size: 34px;
}

ul {
  list-style: circle;
}

</style>

<template>
<SidebarWrapper>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">

<h1 class="mt-4 mb-3"> Contribute to RaceBase <fa icon="hands-helping"></fa> </h1>

<p class="w-lg-75 w-100"> 
  <p class="mb-2"> 
    Want to help us on our mission to change the way runners get their results? 
    Here are a few ways you can help: 
  </p>
  <ul> 

    <li> 
      <a href="https://donorbox.org/racebase" target="_blank"> 
        Donate 
      </a> 
      to RaceBase... every bit helps!
    </li>

    <li> 
      <a 
        :href="'https://twitter.com/intent/tweet?text='
        + encodeURI('Check out RaceBase! ')
        + encodeURI('https://racebase.io')
        + '/'
        + '&hashtags=racebase'"
        target="_blank"
      >
        Tweet
      </a> or share RaceBase on other social media platforms </li>

    <li> 
      Follow us on 
      <a target="_blank" href="https://www.instagram.com/racebase.io/" class="insta">
        <fa :icon="['fab', 'instagram']"></fa> Instagram
      </a>
    </li>

    <li>
      Do you have programming experience and are passionate about running?
      Although we are not yet offering paid positions, if you'd like to 
      help contribute to the development of RaceBase, feel free to 
      <a href="mailto:racebase@breeze.software">
        Email
      </a>
      us at racebase@breeze.software and let us know what you can do to help.
      We may be able to offer you a stake in our business.
    </li>

    <li>
      Finally, building a project with our 
      <a href="https://racebase.io/developers" target="_blank"> API </a>
      is a great way to help and showcase what is possible 
      when results are opened up to the community instead 
      of being locked behind closed doors or a paywall.
    </li>
  
  </ul>

</p>

</div>
</SidebarWrapper>
</template>
<script> 
export default {
  head () {
    return {
      title: "Contribute - RaceBase", 
      meta: [{
        hid: "Description", 
        name: "description", 
        content: "Help us on our mission to make cross country results more accessible to everyone and open to the community"
      }]
    }
  }
}
</script>