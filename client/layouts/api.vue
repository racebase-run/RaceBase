<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";

.nav-item, .nav-item a {
  color: white;
  font-family: 'Source Code Pro', monospace; 
}

.nav-item {
  padding-top: 10px;
  padding-bottom: 10px;
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
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="navbar-brand">
      <nuxt-link to="/">
        <img class="logo" src="/images/logo.svg"> RaceBase 
      </nuxt-link>
      <nuxt-link to="/api" class="d-inline-block code ml-3">Developers</nuxt-link>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="https://github.com/racebase-io" class="d-inline-block code ml-4" target="_blank">
            <fa :icon="['fab', 'github']"></fa> GitHub
          </a>
        </li>
        <li class="nav-item">
          <nuxt-link to="/api/blog" class="d-inline-block code ml-4">Blog</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/changelog" class="ml-4">Changelog</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/api" class="d-inline-block code ml-4">API</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-fluid mt-2">
    <nuxt/>
  </div>
</div>
</template>