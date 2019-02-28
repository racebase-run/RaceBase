<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

h3 {
  color: @medium-grey;
}
h4 {
  font-size: 18px;
  text-transform: uppercase;
}

.btn-default {
  font-size: 14px;
  padding: 3px 6px;
  text-transform: uppercase;
}

</style>
<template>
<div class="w-95 mx-auto mt-4">
  <div class="d-flex align-items-center mb-2">
    <h4 class="mb-0"> Your Feed </h4>
    <div class="btn btn-default mb-0 ml-auto" @click="addingPost=true" v-if="!addingPost">
      New Post <fa icon="pencil-alt"></fa>
    </div>
  </div>

  <div class="alert alert-primary alert-dismissible align-items-center mt-3" v-if="alert">
    {{ alert }}

    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">
        <fa icon="times"></fa>
      </span>
    </button>
  </div>

  <NewPost 
    v-if="addingPost" 
    @close="closeAddWindow" 
    @callback="createdPost" 
    :user="user" 
    class="mb-3"
  />

  <div class="feed" v-if="posts.length > 0">
    <div v-for="post in posts" :key="post._id" class="mb-4">
      <Post 
        :post="post" 
        :poster="following[post.athlete_id]"
        :userId="user._id" 
        v-if="post.title || post.body"
        @loadFeed="loadFeed"
        @deletedPost="alert = 'Successfully deleted post!'"
      />
      <div v-else-if="post.athlete || post.time">
        <ByLine 
          :author="post.athlete" 
          :date="formatDate(post.date)" 
          :authorized="false"
          :athleteId="post.athlete_id"
          :profilePicUrl="following[post.athlete_id].profilePicUrl"
        />
        <Result :result="post" />
      </div>
    </div>
  </div>

  <div v-else>
    <h3 class="mt-5"> Follow some athletes to get content on your feed! </h3>
  </div>
</div>
</template>

<script>
const Post = () => import('~/components/Feed/Post')
const Result = () => import('~/components/Feed/Result')
const NewPost = () => import('~/components/Feed/NewPost')
const ByLine = () => import('~/components/Feed/ByLine')

import moment from 'moment'
export default {
  components: {
    Post, NewPost, Result, ByLine
  }, 
  head () {
    return {
      title: "Your Feed - RaceBase"
    }
  }, 
  methods: {
    closeAddWindow: function() {
      this.addingPost = false
    },    
    formatDate: function(date) {
      return moment(date).format('MMMM D YYYY')
    }, 
    loadFeed: async function() {
      this.addingPost = false
      let feed = (await this.$axios.$get('/post/feed')).feed

      for (const post of feed) {
        if (!this.following[post.athlete_id])
          this.following[post.athlete_id] = await this.$axios.$get('/user/athlete/' + post.athlete_id)

        if (post.result_id) 
          post.result = await this.$axios.$get('/result/' + post.result_id)
      }

      this.posts = feed

    }, 
    createdPost: function() {
      this.alert = "Successfully created post!"
      this.loadFeed()
    }
  },
  middleware: 'auth',
  async asyncData ({ $axios, store }) {
    let user = store.state.auth.user
    let feed = (await $axios.$get('/post/feed')).feed

    let following = {}

    for (const post of feed) {
      if (!following[post.athlete_id])
        following[post.athlete_id] = await $axios.$get('/user/athlete/' + post.athlete_id)

      if (post.result_id) 
        post.result = await $axios.$get('/result/' + post.result_id)
    }

    return {
      addingPost: false,
      posts: feed, 
      user: user, 
      following: following, 
      alert: ""
    }
  }
}
</script>