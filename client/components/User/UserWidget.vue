<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";

.user {
  h3 {
    font-size: 18px;
    font-weight: normal;
    text-align: left;
  }

  h4 {
    font-size: 14px;
  }

  .profile-pic {
    @size: 50px;
    width: @size;
    height: @size;
    margin: 0 auto;
    border-radius: 7px;
    overflow: hidden;
  }

  .athlete-id {
    text-align: left;
  }

}

.fa-book-open {
  font-size: 13px;
}

.links {

  text-align: center;

  @media (min-width: 768px) { text-align: left; }
  
  a {
    margin: 0 10px;
    font-size: 14px;
    color: @blue;
    cursor: pointer !important;
    text-transform: uppercase;
  }

  .btn-default {
    color: black;
  }

}
</style>
 
<template>
<div>
  <div class="profile row mb-1 pl-3">
    <div class="col-3 pl-4">
      <ProfilePic :url="user.profilePicUrl" class="profile-pic mr-2"/>
    </div>
    <div class="col-9">
      <h3 class="mb-2"> {{ user.name }} </h3>
      <h4 class="athlete-id"> 
        <span v-if="user.athlete_id">
          <nuxt-link :to="'/athlete/' + user.athlete_id">
            @{{ user.athlete_id }} 
          </nuxt-link>
        </span>
        <span v-if="!user.athlete_id">
          <nuxt-link to="/user/settings">Claim an ID</nuxt-link>
        </span>
      </h4>
    </div>
  </div>
  <div class="links d-flex align-items-center justify-content-center">
    <nuxt-link to="/feed">Feed</nuxt-link>
    <nuxt-link to="/user/log/week" v-if="!user.coach">
      <fa icon="book-open" class="mr-1"></fa> Logs
    </nuxt-link>
    <nuxt-link to="/coach" v-else> 
      <fa icon="stopwatch"></fa> Coach
    </nuxt-link>
    <nuxt-link to="/user/settings"><fa icon="cogs"></fa></nuxt-link>
    <div @click="$emit('logOut')" 
      class="ml-2 btn btn-outline-primary btn-small" href="#">
      Log Out
    </div>
  </div>
</div>
</template>
<script>
const ProfilePic = () => import('./ProfilePic')
export default {
  components: { ProfilePic }, 
  props: ['user']
}
</script>