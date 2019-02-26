<style lang="less" scoped>
.code {
  font-family: 'Source Code Pro'
}
.meta {
  font-size: 14px;
}
</style>

<template>
<div class="container mt-4"> 
  <h1> {{ post.data.title }} </h1>
  <div class="code meta d-flex align-items-center mb-2">
    <div class="author"> 
      Posted by <strong>{{ post.data.author }}</strong>, &nbsp; 
    </div>
    <div class="date"> {{ post.data.date }} </div>
  </div>
  <div v-html="post.content"> </div>
</div>
</template>

<script> 
export default {
  async asyncData({ $axios, params }) {
    let post = await $axios.$get('/blog/' + params.url)
    return {
      post: post
    }
  },
  layout: 'blog'
}
</script>