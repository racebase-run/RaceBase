<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';
.comment {
  border-bottom: 1px solid @light-grey; 
  .comment-meta {
    text-transform: uppercase;
    font-size: 13px;
    a, .date {
      font-weight: 500; 
    }
  }

  .pic {
    border-radius: 3px; 
    overflow: hidden;
    border: 1px solid @light-grey;
    @size: 25px;
    width: @size; height: @size;
  }
}
</style>

<template>
<div> 
<div class="comment p-2" v-for="comment in comments"> 
  <div class="comment-meta d-flex align-items-center"> 
    <div class="d-inline-block mr-2">
      <div v-if="comment.user" class="d-flex align-items-center">
        <ProfilePic :url="comment.user.profilePicUrl" class="pic d-inline-block mr-2"/>
        <nuxt-link :to="'/athlete/' + comment.user.athlete_id">
          {{ comment.user.athlete_id }}
        </nuxt-link>
      </div>
      <div v-else> Someone </div>
    </div>
    <span class="mr-2"> posted on </span>
    <div class="date d-inline-block">{{ formatDateTime(comment.date) }}</div>
  </div>
  <div class="comment-body mt-1">
    {{ comment.body }}
  </div>
</div>
</div>
</template>

<script> 
import moment from 'moment'
const ProfilePic = () => import('~/components/User/ProfilePic')
export default {
  props: ['comments'], 
  components: { ProfilePic },
  methods: {
    formatDateTime: function(date) {
      return moment(date).format('MMM D YYYY [at] h:mm A z')
    }
  }
}
</script>