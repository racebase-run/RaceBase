<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

.meta {
  width: 100%;
  // border-bottom: 1px solid @light-grey;

  .date, .author {
    font-size: 14px;
  }

  .delete {
    text-transform: uppercase;
    color: @pink;
    font-size: 13px;
    cursor: pointer;
  }

  .profile-pic {
    @size: 23px;
    border-radius: 3px;
    border: 1px solid @light-grey;
    width: @size; height: @size;
    overflow: hidden;
  }

  .author a {
    display: inline-block;
  }
}

</style>
<template>
<div class="meta row align-items-center mx-auto p-2">
  <div class="author d-flex align-items-center mr-0">
    <ProfilePic 
      class="mr-2 profile-pic d-inline-block" 
      :url="profilePicUrl"/>
    <nuxt-link :to="'/athlete/' + athleteId">
      {{ author }}
    </nuxt-link>
  </div>
  <div class="date ml-0">
    &nbsp; on
    {{ date }}
  </div>
  <div 
    class="delete ml-auto" 
    @click="$emit('deletePost')" 
    v-if="authorized"
  >
    Delete
  </div>
</div>
</template>

<script> 
const ProfilePic = () => import('~/components/User/ProfilePic')
import moment from 'moment'
export default {
  components: { ProfilePic },
  props: ['profilePicUrl', 'author', 'date', 'authorized', 'athleteId']
}
</script>