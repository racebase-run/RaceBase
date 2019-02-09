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
          date: "April 10, 2019", 
          race_id: "5c428c978c7f9d24d2248024"
        },
        _id: "12345",
        comments: [{
          body: 'This is great!',
          user: "John Smith", 
          date: "April 11 2019 at 10:03"
        }, {
          body: 'Awesome job.', 
          user: "Steve Appleseed", 
          date: "April 13 2019 at 13:14"
        }, {
          body: 'I like this post' , 
          user: "Joe Doe", 
          date: "April 14 2019 at 9:55"
        }]
      }]
    }
  }
}
</script>