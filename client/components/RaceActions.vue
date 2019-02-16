<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";

.vote-logged-out {
  .btn {
    border: 1px solid @light-grey !important;
    box-shadow: none !important;
  }
}
</style>

<template>
<div class="race-info mt-3">
  <nuxt-link class="btn btn-default" 
    :to="'/new/result/' + race._id" 
    v-if="isLoggedIn">
      Add Result &nbsp;
      <fa icon="pencil-alt"></fa>
  </nuxt-link>

  <a class="btn btn-default" 
    v-if="isLoggedIn && race.user_id == $store.state.auth.user._id" 
    @click="$emit('editRace')">
      Edit &nbsp;
      <fa icon="pencil-alt"></fa>
  </a>

  <div class="btn-group vote" role="group" v-if="isLoggedIn">

    <button type="button" @click="vote(true)" class="btn"
      :class="{ 
        'btn-primary' : upvoted && voted, 
        'btn-default' : !upvoted || !voted
       }">
      {{ race.upvotes || 0 }}
      <fa :icon="['far', 'thumbs-up']"></fa>
    </button>

    <button type="button" @click="vote(false)" class="btn"
      :class="{ 
        'btn-primary' : downvoted && voted,
        'btn-default' : !downvoted || !voted
      }">
      {{ race.downvotes || 0 }}
      <fa :icon="['far', 'thumbs-down']"></fa>
    </button>

  </div>

  <div v-if="!isLoggedIn" class="btn-group vote-logged-out" role="group">

    <div class="no-hover btn btn-default"> 
      {{ race.upvotes || 0 }}
      <fa :icon="['far', 'thumbs-up']"></fa>
    </div>

    <div class="no-hover btn btn-default"> 
      {{ race.downvotes || 0 }}
      <fa :icon="['far', 'thumbs-down']"></fa>
    </div>

  </div>

  <gender-picker
    :race_id="race._id" 
    :gender="gender"
  />

  <div class="btn-group dropdown-btn-group dropdown" v-if="eventList.length > 0">

    <button type="button" 
      class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" 
      aria-expanded="false">
      Events <span class="caret"></span>
    </button>

    <div class="dropdown-menu dropdown-menu-right" role="menu">
      <span v-for="(event, index) in eventList">
        <nuxt-link 
          :to="{ 
            name: 'races-id-gender-event', 
            params: { 
              id: race._id,
              gender: gender, 
              event: index
            } 
          }" 
          class="dropdown-item"
        >
          {{ event }}
        </nuxt-link>
      </span>
    </div>

  </div>

</div>
</template>
<script>
const GenderPicker = () => import('~/components/GenderPicker')
export default {
  components: {
    GenderPicker
  },
  props: ['eventList', 'gender', 'race', 'voteData'], 
  computed: {
    isLoggedIn: function () {
      return this.$store.getters['auth/isLoggedIn']
    }, 
    voted: function () {
      return this.upvoted || this.downvoted
    }
  },
  data () {
    return {
      upvoted: false, 
      downvoted: false
    }
  },
  created () {
    if (this.voteData.vote) {
      this.upvoted = this.voteData.vote.up; 
      this.downvoted = !this.voteData.vote.up;
    }
  },
  methods : {
    vote: async function (up) {
      if (!this.isLoggedIn)
        return
      this.upvoted = up
      this.downvoted = !up
      let path = up ? 'upvote/' : 'downvote/'
      await this.$axios.$post('race/'+ path + this.race._id)
      this.$emit('loadRace')
    }
  }
}
</script>