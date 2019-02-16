<style lang="less" scoped>
.rex {
  width: 85%;
  display: block;
  @media (min-width: 768px) { 
    width: 60%;
  }
}
</style>
<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5 mt-4">
<h1> Oops! </h1>
<h2> Rex couldn't reach your page. </h2>
Click <router-link to="/">here</router-link> to go home
<img class="rex mb-2 mt-5" src="/images/rex.svg">
</div>
</template>
<script>
export default {
  head () {
    return {
      title: "404 Not Found - RaceBase"
    }
  }
}