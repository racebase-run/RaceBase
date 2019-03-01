<template> 
<Docs>
  <div class="container mt-4" v-html="post.content"></div>
</Docs>
</template>
<script> 
const Docs = () => import('~/components/API/Docs')
export default {
  layout: 'blog', 
  components: { Docs },
  async asyncData({ $axios, params }) {
    let post = await $axios.$get('/docs/' + params.url)
    return {
      post: post
    }
  }
}
</script>