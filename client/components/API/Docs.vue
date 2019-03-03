<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

.api-nav {
  background: @ultra-light-grey + #050505;
  border-radius: 5px;

  a {
    display: block;
    font-size: 18px;
    padding: 5px;
    color: @bright-blue;
    font-weight: 500; 
  }

  .schemas, .routes {
    padding-left: 22px; 
    list-style: square;
    a {
      font-weight: 400; 
      font-size: 16px;
      padding: 3px;
      color: @blue;
    }
  }
}
</style>

<template>
<div class="row">
  <div class="col-md-8 col-12 lang-json order-2 order-md-1">
    <slot/> 
  </div>
  <div class="col-md-4 col-12 mt-4 order-1 order-md-2">
    <h4> API Links </h4>
    <div class="api-nav p-2">
      <nuxt-link to="/api">API Home</nuxt-link>
      <div class="d-flex align-items-center"> 
        <nuxt-link to="/api/schemas">Schema Definitions</nuxt-link>
        <a class="ml-auto">
          <fa icon="chevron-circle-down" 
            @click="showSchemas=true" 
            v-if="!showSchemas">
          </fa>
          <fa icon="chevron-circle-up" 
            @click="showSchemas=false" 
            v-else>
          </fa>
        </a>
      </div>

      <ul class="schemas" v-if="showSchemas">
        <li><a href="/api/schemas#entry">Entry</a></li>
        <li><a href="/api/schemas#post">Post</a></li>
        <li><a href="/api/schemas#race">Race</a></li>
        <li><a href="/api/schemas#result">Result</a></li>
        <li><a href="/api/schemas#team">Team</a></li>
        <li><a href="/api/schemas#user">User</a></li>
        <li><a href="/api/schemas#vote">Vote</a></li>
      </ul>

      <div class="d-flex align-items-center"> 
        <nuxt-link to="/api/routes">Routes</nuxt-link>
        <a class="ml-auto">
          <fa icon="chevron-circle-down" 
            @click="showRoutes=true" 
            v-if="!showRoutes">
          </fa>
          <fa icon="chevron-circle-up" 
            @click="showRoutes=false" 
            v-else>
          </fa>
        </a>
      </div>

      <ul class="routes" v-if="showRoutes">
        <li><nuxt-link to="/api/routes/auth">Authentication</nuxt-link></li>
        <li><nuxt-link to="/api/routes/logs">Training Logs</nuxt-link></li>
        <li><nuxt-link to="/api/routes/post">Post / Feed</nuxt-link></li>
        <li><nuxt-link to="/api/routes/races">Races</nuxt-link></li>
        <li><nuxt-link to="/api/routes/results">Results</nuxt-link></li>
        <li><nuxt-link to="/api/routes/search">Search</nuxt-link></li>
        <li><nuxt-link to="/api/routes/teams">Teams</nuxt-link></li>
        <li><nuxt-link to="/api/routes/users">Users</nuxt-link></li>
        <li><nuxt-link to="/api/routes/docs">Docs</nuxt-link></li>
      </ul>

    </div>

  </div>
</div>
</template>
<script> 
import Prism from 'prismjs'
export default {
  data () {
    return {
      showSchemas: false, 
      showRoutes: true
    }
  },
  mounted() {
    Prism.highlightAll();
  }
}
</script>