<template> 
<div class="mt-4 mx-auto w-95"> 
  <NewPost 
    :user="user" 
    :result="result"
    @callback="createdPost()"
    :standalone="true"
  />
  <div class="mt-3 alert alert-primary alert-dismissable" v-if="alert">
    {{ alert }}

    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">
        <fa icon="times"></fa>
      </span>
    </button>
    
  </div>
</div>
</template>
<script> 
const NewPost = () => import('~/components/Feed/NewPost')
export default {
  head () {
    return {
      title: "New Post - RaceBase"
    }
  },
  components: { NewPost }, 
  middleware: 'auth',
  async asyncData({ store, params, $axios }) {
    let user = store.state.auth.user
    let result
    try {
      result = await $axios.$get('/result/' + params.resultId)
    } catch (e) { 
      result = null; 
      console.log(e.response.data) 
    }
    return {
      user: user, 
      result: result, 
      alert: ""
    }
  }, 
  methods: {
    createdPost: function() {
      this.alert = "Successfully created post!"
    }
  }
}
</script>