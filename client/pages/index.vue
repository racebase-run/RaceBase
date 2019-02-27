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

h2 {
  text-transform: uppercase;
}

.nav {
  margin: 0 auto;
  text-align: center;
  .link {
    color: @bright-blue;
    font-size: 19px;
    text-align: center;
    padding: 0 13px;
    display: inline-block;
  }
}

.graphic {
  display: block;
  width: 85%;
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

    <div class="nav mb-3">
      <nuxt-link class="link" to="/about"> About </nuxt-link>
      <nuxt-link class="link" to="/roadmap"> Roadmap </nuxt-link>
      <nuxt-link class="link" to="/blog"> Blog </nuxt-link>
    </div>

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

    <div class="user mt-3 mr-3" v-if="isLoggedIn">
      <UserWidget :user="user" @logOut="logOut"/>
    </div>
      
  </div>

  <div class="row mt-5 mb-4 mx-auto">

    <div class="col-md-7 col-12">
      <h3> Community Sourced </h3>
      <h2> Results </h2>
      <p> 
        RaceBase was founded upon the idea that the records of our hard earned PR's should not be owned and put under lock and key by a company that doesn't know or care who you are. All RaceBase results are maintained by the community, and anyone can add or edit results… even small meets and time trials can be showcased on your profile. 
      </p>
    </div>
    
    <div class="col-md-5 col-12">
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
    </div>
  </div>

  <div class="row mb-5 mx-auto">
    <div class="col-md-5 col-12 align-items-center d-flex"> 
      <img class="graphic" src="/images/logs.png" />
    </div>

    <div class="col-md-7 col-12">
      <h3> Comprehensive </h3>
      <h2> Training Logs </h2>
      <p> 
        There’s a lot that goes into running behind the scenes, that someone looking at your records and results alone might not fully understand. From core to weights, sleep to workouts, running is a lifestyle more than just a sport. We’ve tried to embody this principle in our training logs by offering logs that help you keep track of everything that’s important to you - and share those logs with everyone if you so choose. 
      </p>
    </div>

  </div>

  <div class="row mb-5 mx-auto">
    <div class="col-md-7 col-12">
      <h2> Coaching Tools </h2>
      <p> 
        Coaches should have an easy way to see their athletes logs, assign workouts, manage team meet schedules and rosters, and analyze trends in their athletes’ data to make better decisions. So we’ve created some tools that help them do just that. Integrated with our training logs, our tools for coaches allow you to easily manage a team of athletes. 
      </p>
    </div>

    <div class="col-md-5 col-12 align-items-center d-flex"> 
      <img class="graphic ml-auto" src="/images/coaching.png" />
    </div>
  </div>

</div>
</template>

<script>
const UserWidget = () => import('~/components/User/UserWidget')
const NewsItem = () => import('~/components/NewsItem.vue')
import auth from '~~/utils/auth'
export default {
  layout: 'home',
  components: {
    NewsItem, UserWidget
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