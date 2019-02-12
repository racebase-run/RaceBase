<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

h2 {
  font-size: 23px;
}

h3 {
  font-size: 15px;
  text-align: left;
  text-transform: uppercase;
}

.post {
  border: 1px solid @light-grey;
  border-radius: 5px;
}

.profile-pic {
  border-radius: 3px; 
  @size: 23px;
  width: @size; height: @size;
  overflow: hidden;
}

.no-comments {
  text-transform: uppercase;
  color: @label-grey;
  font-size: 14px;
}
</style>
<template>
<div class="w-95 mx-auto mt-4"> 
  <div class="post mb-3 p-3">

    <h2> {{ post.title }} </h2>
    <ByLine 
      :author="poster.name" 
      :date="formatDate(post.date)"
      :athleteId="poster.athlete_id" 
      :authorized="false" 
      :profilePicUrl="poster.profilePicUrl"
    />
    <p> {{ post.body }}</p>

    <Social :post="post" :poster_id="poster._id"/>

  </div>

  <h3 class="mt-3"> Comments </h3>
  <Comments 
    :comments="post.comments" 
    v-if="post.comments.length > 0 && showComments" 
  />
  <div v-else class="no-comments"> No comments yet </div>

</div>
</template>

<script>
const Social = () => import('~/components/Feed/Social')
const Comments = () => import('~/components/Feed/Comments')
const ByLine = () => import('~/components/Feed/ByLine')

import moment from 'moment'
export default {
  async asyncData ({ $axios, params }) {
    let id = params.id
    let post = await $axios.$get('/post/' + id)
    let poster = await $axios.$get('/user/athlete/' + post.athlete_id)
    return {
      post: post, 
      poster: poster
    }
  }, 
  components: { ByLine, Social, Comments },
  methods: {
    formatDate: function(date) {
      return moment(date).format("MMMM D YYYY")
    }
  }
}
</script>