// store/posts.js

export const state = () => ({
  posts: [], 
  postlist: []
})

export const mutations = {
  setPosts (store, data) {
    store.posts = data
  }, 
  setPostlist (store, data) {
    store.postlist = data
  }
}

export const actions = {
  async fetchPosts ({ commit }) {

    let postlist = await this.$axios.$get('posts')
    commit('setPostlist', postlist)

    var stories = []
    for (const post of postlist) {
      await this.$axios.$get('posts/' + post)
      .then(async (res) => {
        if (res.data) {
          var story = res.data
          story.link = post
          stories.push(story)
        }
      })
    }
    stories.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    }) 

    commit('setPosts', stories)
  }
}