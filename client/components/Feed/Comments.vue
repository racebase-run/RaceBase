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
}
</style>

<template>
<div> 
<div class="comment p-2" v-for="comment in comments"> 
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
</template>

<script> 
export default {
  props: ['comments']
}
</script>