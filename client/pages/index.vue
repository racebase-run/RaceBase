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
  text-align: center; 
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
  max-width: 350px;
}

.profile-pic {
  display: block;
  border-radius: 10px;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  border: 1px solid @light-grey;
}

.intro {
  width: 60%;
  margin: 0 auto;
  h2 {
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    text-align: center;
  }
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
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center; 
}

.logo {
  margin-top: -15px;
  margin-right: 5px;
  height: 40px;
}

.search-container {
  width: 100%;

  .search-form {
    margin: 0 auto;
    width: auto;
    display: table;

    .input-group {
      margin: 0 auto;
      width: 450px;
      input {
        font-size: 20px;
        height: auto;
      }
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
    font-size: 18px;
    font-weight: normal;
    a { color: @bright-blue; }
 }

  .metadata {
    text-transform: uppercase;
    font-size: 14px;
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
    <h1> <img class="logo" src="/images/textlogo.svg"> </h1>

    <div class="nav mb-3">
      <nuxt-link class="link" to="/about"> About </nuxt-link>
      <nuxt-link class="link" to="/resources"> Resources </nuxt-link>
      <nuxt-link class="link" to="/api"> API </nuxt-link>
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

    <div class="user mt-3 mr-md-3 mx-auto" v-if="isLoggedIn">
      <UserWidget :user="user" @logOut="logOut"/>
    </div>
      
  </div>

  <div class="row mt-5 mb-4 mx-auto intro">
    <h2> Community Sourced Results </h2>
    <p> 
      RaceBase was founded upon the idea that the records of our hard earned PR's should not be owned by a company that doesn't know or care who you are. All RaceBase results are maintained by the community, and anyone can add or edit results. Even small meets and time trials can be showcased on your profile. 
    </p>
  </div>

</div>
</template>

<script>
const UserWidget = () => import('~/components/User/UserWidget')
import auth from '~~/utils/auth'
export default {
  layout: 'home',
  components: {
    UserWidget
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

    return { 
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
    user () {
      return this.$store.state.auth.user
    }, 
    isLoggedIn () {
      return this.$store.getters['auth/isLoggedIn']
    }
  }
}
</script>