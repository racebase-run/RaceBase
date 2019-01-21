<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/sizes.less";

body {
  font-family: 'Avenir Next' !important;
}

a {
  color: @blue;
}

b {
  font-weight: 500;
}

p {
  font-size: 14px;
  line-height: 24px;
}

.more {
  font-style: italic;
}

.user {
  
  margin: 0 auto;

  .username, .name {
    width: 100%;
    display: block;
    text-align: left;
  }

  .username {
    font-size: 14px;
  }

  .links {
    a {
      margin: 6px;
      font-size: 14px;
    }
  }
}

.profile-pic {
  display: block;
  border-radius: 10px;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  border: 1px solid @light-grey;
}

.header {
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;

  h1, h2 {
  font-weight: normal;
  }

  h1 {
    text-align: center;
    height: 100px;
    line-height: 100px;
    width: 100%;
    margin-bottom: -5px;
    font-size: 45px;
  }

  h2 {
    text-align: center;
    width: 100%;
    font-size: 17px;
    margin-bottom: 20px;
  }

  .buttons {
    display: block;
    margin: 0 auto;

    .btn {
      margin: 5px;
    }
  }
}

h3 {
  text-transform: uppercase;
  font-size: 19px;
  text-align: left;
}

h4 {
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 12px;
}

.logo {
  margin-top: -15px;
  margin-right: 5px;
  height: 50px;
}

.search-container {
  width: 100%;

  .search-form {
    margin: 0 auto;
    width: auto;
    display: table;

    .input-group {
      margin: 0 auto;
      width: 320px;
    }
  }

}

.user {
  .welcome {
    font-size: 20px;
    font-weight: 500;
  }
}

.about {
  p {
    font-size: 14px;
    @media (min-width: @large) { 
      font-size: 16px;
    }
  }
}

.support {
  .insta {
    font-size: 17px;
  }
}

.race {
  .col-2 {
    text-align: center;
    font-size: 15px;
  }

  h5 { 
    font-size: 16px;
    font-weight: normal;
    @media (min-width: @large) { 
      font-size: 18px;
    }
 }

  .metadata {
    text-transform: uppercase;
    font-size: 13px;
  }
}

@media (min-width: 768px) {
  .user {
    position: absolute;
    top: 0;
    right: 0;
  }
}

</style>

<template>
<div class="container">
  <div class="header row">
    <h1> <img class="logo" src="/images/logo.svg"> RaceBase </h1>
    <h2> Community sourced running results </h2>

    <div class="search-container">
      <form class="search-form mb-3" @submit.prevent="search()">
        <div class="input-group">
          <input 
            type="text" 
            placeholder="Search..." 
            v-model="searchInput" 
            class="form-control"
          />
          <div class="input-group-append">
            <span class="input-group-text" @click="search()" style="cursor: pointer">
              <fa icon="search"></fa>
            </span>
          </div>
        </div>
      </form>
    </div>
    
    <div class="buttons" v-if="!isLoggedIn">
      <nuxt-link to="signup" class="btn btn-primary"> Sign Up </nuxt-link>
      <nuxt-link to="login" class="btn btn-default"> Log In </nuxt-link>
    </div>

    <div class="user p-3" v-if="isLoggedIn">
      <div class="row">
        <div class="col-3">
          <img 
            v-if="user.profilePicUrl" 
            :src="user.profilePicUrl.replace('http', 'https')" 
            class="profile-pic" 
          />
          <img 
            v-if="!user.profilePicUrl" 
            src="/images/default.png" 
            class="profile-pic" 
          />
        </div>
        <div class="col-9">
          <span class="name"> {{ user.name }} </span>
          <span class="username w-100">
            <div v-if="user.athlete_id" class="w-100">
              <nuxt-link :to="'/athlete/' + user.athlete_id"> 
                @{{ user.athlete_id }} 
              </nuxt-link>
            </div>
            <div v-if="!user.athlete_id">
              <nuxt-link to="/user/settings"> Claim an ID </nuxt-link>
            </div>
          </span>
        </div>
      </div>

      <div class="links mt-1">
        <nuxt-link to="/user/content">Content</nuxt-link>
        <nuxt-link to="/user/settings">Settings</nuxt-link>
        <a @click="logOut()" href="#">Log Out</a>
      </div>

    </div>
      
  </div>

  <div class="row mt-5 mx-auto">

    <div class="col-md-8 col-12 px-0 pr-md-4 pb-4">
      <h3 class="mb-3">News</h3>
      <div v-for="(post, index) in posts">
        <news-item :story="post" :link="post.link"/>
      </div>
      <nuxt-link to="/news" class="more more-stories"> More Stories </nuxt-link>
    </div>
    
    <div class="col-md-4 col-12">

      <div class="races mb-4">
        <h4>Recent Races</h4>
        <div v-for="race in races" class="race row mb-2">
          <div class="col-2 pr-0">
            <div class="mb-1"> {{ race.upvotes }} </div>
            <div><fa :icon="['far', 'thumbs-up']"></fa></div>
          </div>
          <div class="col-10 pr-0">
            <h5 class="mb-1">
              <nuxt-link :to="'/races/' + race._id"> 
                {{ race.name }} 
              </nuxt-link>
            </h5>
            <div class="metadata">
              <span class="date mr-2"> {{ race.date }} </span>
              <span> <fa icon="user-circle"></fa> {{ race.user }} </span>
            </div>
          </div>
        </div>
        <nuxt-link class="more ml-2" to="/races/all">More Races</nuxt-link>
      </div>

      <div class="about mb-4">
        <h4>About Us</h4>
        <p class="mb-2"><b>We believe in the power of community.</b></p>
        <p class="mb-2">
          We believe that people are more important than any race, or time, or championship.
        </p>
        <nuxt-link to="about" class="more">Learn more</nuxt-link>
      </div>

      <div class="support mb-5">
        <h4>Support RaceBase</h4>
        <div class="links mb-3">
          <a 
            class="btn btn-primary mr-3" 
            href="https://donorbox.org/racebase""
            target="_blank" 
          >
            Donate
          </a>
          <a target="_blank" href="https://www.instagram.com/racebase.io/" class="insta">
            <fa :icon="['fab', 'instagram']"></fa>
            racebase.io
          </a>
        </div>
        <p class="mb-2"> Want to help us make RaceBase better? </p>
        <a class="more" href="#"> Learn about ways you can help </a>
      </div>
    </div>
  </div>

</div>
</template>

<script>
const NewsItem = () => import('~/components/NewsItem.vue')
import auth from '~~/utils/auth'
export default {
  layout: 'home',
  components: {
    NewsItem
  },
  head () {
    return {
      meta: [{
        hid: "OpenGraph Title", 
        property: "og:title", 
        content: "RaceBase - Community Sourced Running Results"
      }, {
        hid: "OpenGraph Description", 
        property: "og:description", 
        content: ""
      }, {
        hid: "OpenGraph URL", 
        property: "og:url", 
        content: process.env.ROOT_URL
      }, 
      {
        hid: "OpenGraph Image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/home.png'
      }]
    }
  },
  async asyncData ({ $axios }) {
    // get races
    let raceData = await $axios.$get('race/list/1/3')

    return { 
      races: raceData.docs,
      searchInput: ""
    }
  },
  methods : {
    search: function(typing) {
      this.$router.push({ path: '/search/' + encodeURI(this.searchInput) })
    },  
    logOut: function() {
      this.$store.dispatch('auth/logout')
    }
  }, 
  computed: {
    posts () {
      return this.$store.state.posts.posts.slice(0,3)
    }, 
    user () {
      return this.$store.state.auth.user
    }, 
    isLoggedIn () {
      return this.$store.getters['auth/isLoggedIn']
    }
  }
}
</script>