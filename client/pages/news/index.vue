<template>
<SidebarWrapper>
  <div class="mt-4 pb-4 mx-auto w-90">
    <h1 class="mb-3">News</h1>
    <div v-for="(post, index) in posts">
      <news-item :story="post" :link="post.link"/>
    </div>
  </div>
</SidebarWrapper>
</template>

<script>
const NewsItem = () => import('~/components/NewsItem')
export default {
  components: {
    NewsItem
  },
  head () {
    return {
      title: "News - RaceBase", 
      meta: [{
        hid: "OpenGraph Image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/news.png'
      }, {
        hid: "OpenGraph Title",
        property: "og:title", 
        content: "RaceBase News"
      }, {
        hid: "OpenGraph URL", 
        property: "og:url", 
        content: process.env.ROOT_URL + '/news'
      }, {
        hid: "Description", 
        name: "description", 
        content: "Bringing you the latest running news stories with a unique take."
      }]
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.posts
    }
  }
}
</script>