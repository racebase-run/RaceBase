<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

.social {
  text-transform: uppercase;
  font-size: 13px;

  .likes {
    cursor: pointer;
  }

  .comments {
    .fa-comment-dots {
      color: @blue;
    }
    cursor: pointer;
  }
}
</style>
<template>
<div class="social row align-items-center mx-auto">
  <div class="likes mr-3" @click="like()">
    <fa icon="heart" class="mr-1"></fa> {{ post.likes.length }} 
    Like<span v-if="post.likes.length != 1">s</span>
  </div>
  <div class="comments mr-3" @click="$emit('showComments')">
    <fa icon="comment-dots" class="mr-1"></fa> {{ post.comments.length }} Comments
  </div>
  <div class="share">
    <fa icon="share" class="mr-1"></fa> Share
  </div>
  <div class="ml-auto">
    <nuxt-link :to="'/post/' + post._id">More...</nuxt-link>
  </div>
</div>
</template>

<script> 
export default {
  props: ['post', 'poster_id'], 
  methods: {
    like: async function() {
      await this.$axios.$post('post/like/' + this.post._id)
      if (!this.post.likes.includes(this.poster_id))
        this.post.likes.push("")
    }
  }
}
</script>