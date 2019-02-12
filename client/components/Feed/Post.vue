<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';

.post {
  border: 1px solid @light-grey;
  border-radius: 5px;

  h3.title {
    text-align: left; 
    font-size: 20px;
    font-weight: 500;
  }
  .date, .author {
    font-size: 14px;
  }
  .profile-pic {
    @size: 23px;
    border-radius: 3px;
    border: 1px solid @light-grey;
    width: @size; height: @size;
    overflow: hidden;
  }

  .body {
    font-size: 13px;
    line-height: 17px;
  }

  .row {
    max-width: 100%;
  }

  .meta {
    width: 100%;
    border-bottom: 1px solid @light-grey;
  }

  .author a {
    display: inline-block;
  }

  .comments-header {
    border-top: 1px solid @light-grey;
    text-transform: uppercase; 
    font-size: 12px;
    background: @ultra-light-grey;
    .close-comments {
      color: @bright-blue;
      cursor: pointer;
      font-weight: 500;
    }
  }
}
</style>
<template>
<div class="post p-0 container-fluid">
  <div class="meta row align-items-center mb-2 mx-auto p-2">
    <div class="author d-flex align-items-center mr-3">
      <ProfilePic 
        class="mr-2 profile-pic d-inline-block" 
        :url="poster.profilePicUrl"/>
      <nuxt-link :to="'/athlete/' + poster.athlete_id">
        {{ poster.name }}
      </nuxt-link>
    </div>
    <div class="date">
      <fa icon="calendar-alt" class="mr-2"></fa>{{ formatDate(post.date) }}
    </div>
  </div>
  <div class="post-content pt-2 px-3 pb-2">
    <h3 class="title">{{ post.title }}</h3>

    <Result class="mb-2" :result="post.result" v-if="post.result" />

    <p class="body">{{ post.body }}</p>
    <Social 
      :post="post" 
      @showComments="showComments = true"
      :poster_id="poster._id"
    />

  </div>

  <div v-if="showComments && post.comments.length > 0" class="comments">
    <div class="comments-header pl-2 py-1 row mx-auto">
      <div>Comments</div>
      <div class="ml-auto mr-2 close-comments" @click="showComments = false"> 
        Close
      </div>
    </div>
    <Comments 
      :comments="post.comments"  
      @hideComments="showComments = false"
    />
  </div>

</div>
</template>

<script> 
import moment from 'moment'
const ProfilePic = () => import('~/components/User/ProfilePic')
const Social = () => import('~/components/Feed/Social')
const Comments = () => import('~/components/Feed/Comments')
const Result = () => import('~/components/Feed/Result')

export default {
  props: ['post'],
  components: { ProfilePic, Social, Comments, Result }, 
  data () {
    return {
      showComments: false, 
      poster: {}
    }
  }, 
  async mounted () {
    this.poster = await this.$axios.$get('/user/athlete/' + this.post.user_id)
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format('MMMM D YYYY')
    }
  }
}
</script>