<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";

.nav-item, .nav-item a {
  color: white;
  font-family: 'Source Code Pro', monospace; 
}

.navbar-brand {
  a {
    color: white;
    text-decoration: none;
    font-size: 17px;
  }
  .logo {
    margin-bottom: 5px; 
    margin-right: 5px;
    @size: 22px;
    height: @size; width: @size;
  }
  .code {
    color: @light-blue;
    font-size: 21px;
  }
}

.code {
  font-family: 'Source Code Pro', monospace;
}

</style>

<template>
<div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="navbar-brand">
      <nuxt-link to="/">
        <img class="logo" src="/images/logo.svg"> RaceBase 
      </nuxt-link>
      <nuxt-link to="/blog" class="d-inline-block code ml-3">Developers</nuxt-link>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="#">Testing</a>
      </li>
    </ul>
  </nav>
  <div class="container-fluid mt-2">
    <nuxt/>
  </div>
</div>
</template>