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

  .share {
    cursor: pointer;
    .input-group {
      .btn {
        text-transform: uppercase;
      }
      input, .btn {
        padding: 3px 6px;
        font-size: 14px;
        height: auto;
      }
    }

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
    <span v-if="!sharing" @click="sharing = true">
      <fa icon="share" class="mr-1"></fa> Share
    </span>
    <div class="d-flex align-items-center" v-if="sharing">
      <div class="input-group">
        <input type="text" id="copy" class="form-control" placeholder="URL" :value="url">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" 
            type="button" @click="addToClipboard"
          >
            <span v-if="copied"> Copied <fa icon="check"></fa> </span>
            <span v-else> Copy <fa icon="copy"></fa> </span>
          </button>
        </div>
      </div>
      <fa icon="times" class="ml-2" @click="sharing = false"></fa>
    </div>
  </div>
  <div class="ml-auto">
    <nuxt-link :to="'/post/' + post._id">More...</nuxt-link>
  </div>
</div>
</template>

<script> 
export default {
  props: ['post', 'poster_id'], 
  data () {
    return {
      sharing: false,
      copied: false, 
      url: process.env.ROOT_URL + '/post/' + this.post._id
    }
  },
  methods: {
    like: async function() {
      await this.$axios.$post('post/like/' + this.post._id)
      if (!this.post.likes.includes(this.poster_id))
        this.post.likes.push("")
    },
    addToClipboard: function() {
      let copyText = document.querySelector("#copy")
      copyText.select()
      document.execCommand("copy")
      this.copied = true; 
    }
  }
}
</script>