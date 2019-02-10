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

  .result {
    display: table;
    border-radius: 5px;
    border: 1px solid @light-grey;
    .time {
      font-family: 'DS Digital', 'Helvetica', sans-serif;
      color: @bright-blue;
      font-size: 21px;
    }

    .place  {
      text-align: center;
      .fa-trophy {
        font-size: 12px;
        padding-bottom: 3px;
      }
    }
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

  .social {
    text-transform: uppercase;
    font-size: 13px;
    .comments {
      .fa-comment-dots {
        color: @blue;
      }
      cursor: pointer;
    }
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

  .comment {
    border-bottom: 1px solid @light-grey; 
    .comment-meta {
      text-transform: uppercase;
      font-size: 13px;
      a, .date {
        font-weight: 500; 
      }
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

    <div class="result p-2 mb-2" v-if="post.result">
      <div class="place d-inline-block mr-3">
        <fa icon="trophy"></fa>
        {{ post.result.place }}
      </div>
      <div class="time d-inline-block mr-2"> {{ post.result.time }} </div>
      <div class="d-inline-block mr-1">for 
        <strong>{{ post.result.distance }}</strong>
      </div>
      <div class="d-inline-block mr-2">at&nbsp;
        <nuxt-link :to="'/races/' + post.result.race_id">
          {{ post.result.race }} 
        </nuxt-link>
      </div>
    </div>

    <p class="body">{{ post.body }}</p>
    <div class="social row align-items-center mx-auto">
      <div class="likes mr-3">
        <fa icon="heart" class="mr-1"></fa> {{ post.likes.length }} Likes
      </div>
      <div class="comments mr-3" @click="showComments = true">
        <fa icon="comment-dots" class="mr-1"></fa> {{ post.comments.length }} Comments
      </div>
      <div class="share">
        <fa icon="share" class="mr-1"></fa> Share
      </div>
    </div>
  </div>
  <div v-if="showComments && post.comments.length > 0" class="comments">
    <div class="comments-header pl-2 py-1 row mx-auto">
      <div>Comments</div>
      <div class="ml-auto mr-2 close-comments" @click="showComments = false"> 
        Close
      </div>
    </div>
    <div class="comment p-2" v-for="comment in post.comments"> 
      <div class="comment-meta"> 
        <div class="d-inline-block">
          <!-- DUMMY LINK!! DON'T FORGET TO CHANGE!! --> 
          <nuxt-link to="/user">{{ comment.user }}</nuxt-link>
        </div>
        posted on 
        <div class="date d-inline-block">{{ comment.date }}</div>
      </div>
      <div class="comment-body mt-1">
        {{ comment.body }}
      </div>
    </div>
  </div>
</div>
</template>

<script> 
import moment from 'moment'
const ProfilePic = () => import('~/components/User/ProfilePic')
export default {
  props: ['post'],
  components: { ProfilePic }, 
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