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
  }
}
</style>
<template>
<div class="post p-0 container-fluid">
  <div class="meta row align-items-center mb-2 mx-auto p-2">
    <div class="author d-flex align-items-center mr-3">
      <ProfilePic class="mr-2 profile-pic d-inline-block" />
      <nuxt-link :to="'/athlete/' + post.athlete_id">
        {{ post.author }}
      </nuxt-link>
    </div>
    <div class="date">
      <fa icon="calendar-alt" class="mr-2"></fa>{{ post.date }}
    </div>
  </div>
  <div class="post-content pt-2 px-3 pb-2">
    <h3 class="title">{{ post.title }}</h3>

    <div class="result p-2 mb-2" v-if="post.result">
      <div class="place d-inline-block">
        <fa icon="trophy"></fa>
        {{ post.result.place }}
      </div>
      <div class="time d-inline-block mr-2"> {{ post.result.time }} </div>
      <div class="d-inline-block mr-2"> {{ post.result.race }} </div>
      <div class="d-inline-block mr-2"> {{ post.result.distance }} </div>
    </div>

    <p class="body">{{ post.body }}</p>
    <div class="social row align-items-center mx-auto">
      <div class="likes mr-3">
        <fa icon="heart" class="mr-1"></fa> {{ post.likes }} Likes
      </div>
      <div class="comments mr-3">
        <fa icon="comment-dots" class="mr-1"></fa> {{ post.comments.length }} Comments
      </div>
      <div class="share">
        <fa icon="share" class="mr-1"></fa> Share
      </div>
    </div>
  </div>
</div>
</template>

<script> 
const ProfilePic = () => import('~/components/User/ProfilePic')
export default {
  props: ['post'],
  components: { ProfilePic }
}
</script>