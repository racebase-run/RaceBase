<template> 
<Docs>
  <div class="container mt-4" v-html="post.content"></div>
  <div class="mx-auto d-table my-4">
    <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ur1&category=student_usa&banner=0V6VCEP78KE0TNJVCK02&f=ifr&linkID=a51e0743f5e5c5bee67f4a80a03264b6&t=racebase-20&tracking_id=racebase-20" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
  </div>
</Docs>
</template>
<script> 
const Docs = () => import('~/components/API/Docs')
export default {
  layout: 'api', 
  components: { Docs },
  async asyncData({ $axios, params }) {
    let post = await $axios.$get('/docs/index')
    return {
      post: post
    }
  }
}
</script>