<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";
.user {
  h3 {
    font-size: 15px;
    font-weight: normal;
    text-align: left;
  }

  h4 {
    font-size: 13px;
    margin-bottom: 0px;
  }

  .profile-pic {
    @size: 40px;
    width: @size;
    height: @size;
    margin: 0 auto;
    border-radius: 7px;
    overflow: hidden;
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
  <div class="profile row mb-1 align-items-center">
    <div class="col-auto pr-1">
      <ProfilePic :url="user.profilePicUrl" class="profile-pic"/>
    </div>
    <div class="col-auto pr-1">
      <h3 class="mb-1"> {{ user.name }} </h3>
      <h4 class="athlete-id"> 
        <span v-if="!user.coach"> 
          <span v-if="user.athlete_id">
            <nuxt-link :to="'/athlete/' + user.athlete_id">
              @{{ user.athlete_id }} 
            </nuxt-link>
          </span>
          <span v-if="!user.athlete_id">
            <nuxt-link to="/user/settings/profile">Claim an ID</nuxt-link>
          </span>
        </span>
        <span v-else> 
          <span v-if="user.team_id"> 
            <nuxt-link :to="'/team/' + user.team_id"> @{{user.team_id}} </nuxt-link> 
          </span>
          <span v-else> 
            <nuxt-link to="/signup/coach/claim"> Claim a team </nuxt-link>
          </span>
        </span>
      </h4>
    </div>
    <div class="col-auto"> 
      <nuxt-link to="/user/settings"><fa icon="cogs"></fa></nuxt-link>
      <div @click="$emit('logOut')" 
        class="ml-2 btn btn-outline-primary btn-small" href="#">
        Log Out
      </div>
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