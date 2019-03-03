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
  <div v-for="post in posts">
    <h4> 
      <nuxt-link :to="'/blog/' + post.link"> {{ post.data.title }} </nuxt-link>
    </h4>
    <div class="code meta d-flex align-items-center mb-2">
      Posted by&nbsp;<strong> {{ post.data.author }}</strong>, 
      {{ post.data.date }}
    </div>
    <div v-html="post.content"> </div>
  </div>
</div>
</template>

<script> 
export default {
  layout: 'api', 
  head () {
    return {
      title: "RaceBase Development Blog"
    }
  },
  async asyncData({ $axios }) {
    let postlist = await $axios.$get('docs/blog')

    var posts = []
    for (const post of postlist) {
      await $axios.$get('docs/blog/' + post)
      .then(async (res) => {
        if (res.data) {
          var story = res
          story.link = post
          posts.push(story)
        }
      })
    }

    posts.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    }) 

    return {
      posts: posts.splice(0,3)
    }
  }
}
</script>