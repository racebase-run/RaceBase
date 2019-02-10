<style lang="less" scoped>
h4 {
  font-size: 18px;
  text-transform: uppercase;
}

.btn-default {
  font-size: 14px;
  padding: 3px 6px;
  text-transform: uppercase;
}

</style>
<template>
<div class="w-95 mx-auto mt-4">
  <div class="d-flex align-items-center mb-3">
    <h4> Your Feed </h4>
    <div class="btn btn-default mb-2 ml-auto" @click="addingPost=true" v-if="!addingPost">
      New Post <fa icon="pencil-alt"></fa>
    </div>
  </div>
  <NewPost v-if="addingPost" @close="closeAddWindow" class="mb-3"/>
  <div class="feed">
    <Post :post="post" v-for="post in posts" :key="post._id" class="mb-3"/>
  </div>
</div>
</template>

<script>
const Post = () => import('~/components/Feed/Post')
const NewPost = () => import('~/components/Feed/NewPost')
export default {
  components: {
    Post, NewPost
  }, 
  methods: {
    closeAddWindow: function() {
      this.addingPost = false
    }
  },
  async asyncData ({ $axios, store }) {
    let user = store.state.auth.user
    let feed = (await $axios.$get('/post/feed')).feed

    feed = feed.concat([{
        title: "Hello world, this is my first post",  
        user_id: "remingtonbreeze",
        date: "June 29 2019", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem, efficitur non elementum eget, aliquam ac lectus. Praesent vestibulum nisi non metus varius, id lacinia nisi pellentesque. Duis vulputate, eros ut mattis tempus, lacus ex tincidunt lacus, vel ullamcorper diam odio vitae nisl. Morbi in tellus dui. Phasellus tempus imperdiet ex et placerat. Praesent vestibulum interdum lorem, vel vulputate orci ullamcorper eu. Pellentesque mauris urna, ultricies in nisl quis, ultricies rutrum tellus. Maecenas tincidunt lectus ut suscipit ornare. Suspendisse eleifend pretium lacinia.", 
        likes: ['foo', 'bar', 'baz', 'qux', 'qaz'], 
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
      }])

    return {
      addingPost: false,
      posts: feed 
    }
  }
}
</script>