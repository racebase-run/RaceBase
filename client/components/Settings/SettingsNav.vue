<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';
.nuxt-link-exact-active, .nuxt-link-exact-active:hover {
  color: @dark-grey;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
</style>

<template>
  <ul class="nav nav-tabs mb-3 mt-3">
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/user/settings">
        <fa icon="tools"></fa> Account
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/user/settings/profile">
        <fa icon="user-circle"></fa> Profile
      </nuxt-link>
    </li>
    <li class="nav-item" v-if="coach">
      <nuxt-link class="nav-link" to="/user/settings/coaching">
        <fa icon="stopwatch"></fa> Coaching
      </nuxt-link>
    </li>
  </ul>
</template>
<script> 
export default {
  props: ['coach']
}
</script>