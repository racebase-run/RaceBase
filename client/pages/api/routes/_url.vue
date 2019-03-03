<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';

@deep: ~'>>>';

.container @{deep} .divider {
  width: 100%;
  display: block;
  border-top: 1px solid @light-grey; 
  height: 30px;
  margin-top: 30px;
}
</style>
<template> 
<Docs>
  <div class="container mt-4" v-html="post.content"></div>
  <h2 class="mt-4 ml-2" v-if="!post.content">
    Page not found!
  </h2>
</Docs>
</template>
<script> 
const Docs = () => import('~/components/API/Docs')
export default {
  layout: 'api', 
  components: { Docs },
  async asyncData({ $axios, params }) {
    let post = {}
    try {
      post = await $axios.$get('/docs/routes/' + params.url)
    } catch (e) { console.log(e) }
    return {
      post: post
    }
  }
}
</script>