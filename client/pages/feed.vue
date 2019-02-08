<style lang="less" scoped>
h4 {
  font-size: 18px;
  text-transform: uppercase;
}
</style>
<template>
<div class="w-95 mx-auto mt-4">
  <h4> Your Feed </h4>
  <div class="feed">
    <Post :post="post" v-for="post in posts" :key="post._id"/>
  </div>
</div>
</template>

<script>
const Post = () => import('~/components/Feed/Post')
export default {
  components: {
    Post
  }, 
  asyncData () {
    return {
      posts: [{
        title: "Hello world, this is my first post", 
        author: "Remington Breeze", 
        athlete_id: "remingtonbreeze",
        date: "June 29 2019", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem, efficitur non elementum eget, aliquam ac lectus. Praesent vestibulum nisi non metus varius, id lacinia nisi pellentesque. Duis vulputate, eros ut mattis tempus, lacus ex tincidunt lacus, vel ullamcorper diam odio vitae nisl. Morbi in tellus dui. Phasellus tempus imperdiet ex et placerat. Praesent vestibulum interdum lorem, vel vulputate orci ullamcorper eu. Pellentesque mauris urna, ultricies in nisl quis, ultricies rutrum tellus. Maecenas tincidunt lectus ut suscipit ornare. Suspendisse eleifend pretium lacinia.", 
        likes: 25, 
        result: {
          time: "30:15", 
          distance: "10k", 
          race: "Mt. SAC Invitational", 
          place: 8, 
          date: "April 10, 2019"
        },
        _id: "12345",
        comments: [ 'hello world', 'foo bar baz', 'i like this post' ]
      }]
    }
  }
}
</script>