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

  .body {
    font-size: 14px;
    line-height: 17px;
  }

  .row {
    max-width: 100%;
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
  <ByLine 
    :author="poster.name" 
    :date="formatDate(post.date)"
    :athleteId="poster.athlete_id" 
    :authorized="post.user_id == userId" 
    :profilePicUrl="poster.profilePicUrl"
    @deletePost="deletePost"
  />
  <div class="post-content pt-2 px-3 pb-2">
    <h3 class="title">{{ post.title }}</h3>

    <Result class="mb-2" :result="post.result" v-if="post.result" />

    <p class="body mt-3">{{ post.body }}</p>
    <Social 
      :post="post" 
      :user_id="userId"
      @showComments="showComments = true"
      @loadPost="loadPost"
      :poster_id="poster._id"
    />

  </div>

  <div v-if="showComments" class="comments-header pl-2 py-1 row mx-auto">
    <div>Comments</div>
    <div class="ml-auto mr-2 close-comments" @click="showComments = false"> 
      Close
    </div>
  </div>

  <div v-if="showComments && post.comments.length > 0" class="comments">
    <Comments 
      :comments="post.comments"  
      @hideComments="showComments = false"
    />
  </div>

  <div v-if="showComments" class="p-3">
    <textarea 
      v-model="newComment" 
      class="form-control mb-2"
      placeholder="Your comment..."> 
    </textarea>
    <div class="btn btn-primary btn-small" @click="submitComment()">Add Comment</div>
  </div>

</div>
</template>

<script> 
import moment from 'moment'
const Social = () => import('~/components/Feed/Social')
const Comments = () => import('~/components/Feed/Comments')
const Result = () => import('~/components/Feed/Result')
const ByLine = () => import('~/components/Feed/ByLine')

export default {
  props: ['post', 'userId', 'poster'],
  components: { ByLine, Social, Comments, Result }, 
  data () {
    return {
      showComments: false, 
      newComment: ""
    }
  }, 
  methods: {
    formatDate: function(date) {
      return moment(date).format('MMMM D YYYY')
    }, 
    deletePost: async function() {
      await this.$axios.$delete('/post/' + this.post._id)
      this.$emit('loadFeed')
      this.$emit('deletedPost')
    }, 
    submitComment: async function() {
      await this.$axios.$post('/post/comment/' + this.post._id, { body: this.newComment })
      this.$emit('loadFeed')
    }, 
    loadPost: async function() {
      this.post = await this.$axios.$get('/post/' + this.post._id)
    }
  }
}
</script>