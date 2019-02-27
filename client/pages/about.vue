<style lang="less" scoped>

.dedication {
  display: block;
  text-align: center;
  text-decoration: none;
}

</style>

<template>
<div>
  <div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5 mt-4">

    <h1 class="mb-3"> About RaceBase </h1>

    <p class="mb-3">
      <a href="mailto:remington@racebase.io">
        Email us at remington@racebase.io
      </a>
    </p>

    <a 
      class="btn btn-primary mr-3" 
      href="https://donorbox.org/racebase""
      target="_blank" 
    >
      Donate
    </a>

    <h5>We believe in the power of the community.</h5>
    <p class="mb-4">
      RaceBase was started from the idea that the records of our hard earned PR's should not be maintained by a company that doesn't know or care who you are. Those who have overcome tremendous obstacles deserve a moment in the spotlight, and we all have a story that deserves to be told, whether you are the fastest or the slowest. Friends and family who want to see results shouldn't have to dig through Google to find a results link or wait for days, to see their loved ones' race times. Missing or inaccurate results should not exist, and the members of the running community should not have to pay to watch the sport they love. These are our founding principles and are the driving forces behind every feature that we add and decision that we make. 
    <p>

    <h5>We believe that people, and the connections we make with them, are more important than any race, or time, or championship.</h5>
    <p>
      Every athlete has fought to overcome something, and every athlete has helped someone close to them to do the same. No matter how small or large our struggles, our communities are defined by the battles that we win together. By opening up race results to the community we hope to allow anyone to share a result they’re proud of, and to make it easy for the people who support them to find those results. We aim to showcase the athletes that deserve to be recognized for outstanding achievements, whether that’s a huge improvement from season to season or an act of exemplary sportsmanship. We believe that running is about more than times and races, and hope that you’ll help us on our journey to build a community that sees beyond the minutes and seconds. 
    </p>

    <a  
      href="https://run4bittiandbrynn.org" 
      target="_blank" 
      class="mb-1 dedication">
      For Brit and Brynn
    </a>
    <a style="font-weight: 700; font-size: 16px"
      href="https://run4bittiandbrynn.org" 
      class="dedication mb-4"
      target="_blank">
      <span style="color: #BC8DE2">ᗰ</span>
      <span style="color: #E392D2">I</span>
      <span style="color: #F2819C">ᒪ</span>
      <span style="color: #F68970">E</span>
      <span style="color: #F6A158">ᔕ</span>
      <span>&nbsp;</span>
      <span style="color: #E4BE4C">O</span>
      <span style="color: #AEC86B">ᖴ</span>
      <span>&nbsp;</span>
      <span style="color: #9DC684">ᔕ</span>
      <span style="color: #76BDB6">ᗰ</span>
      <span style="color: #62AFC9">I</span>
      <span style="color: #5B94D1">ᒪ</span>
      <span style="color: #5D74C5">E</span>
      <span style="color: #5C379E">ᔕ</span>
    </a>

  </div>
    
</div>
</template>
<script> 
export default {
  head () {
    return {
      title: "About - RaceBase", 
      meta: [{
        hid: "OpenGraph URL", 
        property: "og:url", 
        content: process.env.ROOT_URL + '/about'
      }, {
        hid: "OpenGraph Title", 
        property: "og:title", 
        content: "About Us"
      }, {
        hid: "OpenGraph Image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/home.png'
      }]
    }
  }
}
</script>
