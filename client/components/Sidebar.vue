<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";

.sidebar {
  border-right: 1px solid @light-grey;
  height: auto;
  overflow: auto;
  border-bottom: 1px solid @light-grey;
}

.header {
  width: 100%;
  padding-top: 30px;

  a {
    color: black;
    text-decoration: none;
  }

  h1, h2 {
    font-weight: normal;
    text-align: center;
    width: 100%;
  }

  h1 {
    font-size: 30px;
    .logo {
      width: 35px;
    }
  }

  h2 {
    font-size: 14px;
  }

  form {
    margin: 0 auto;
    width: 75%;


    input {
      font-size: 14px;
    }

  }

}

.nav {
  margin: 0 auto;
  text-align: center;
  .link {
    color: @bright-blue;
    font-size: 17px;
    text-align: center;
    padding: 0 18px;
    display: inline-block;
  }
}

.actions {
  text-align: center;
  .btn {
    text-transform: uppercase;
    font-size: 13px;
    padding: 3px 6px; 
  }
}

.races {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;

  .votes {
    text-align: center;
  }

  h3 {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
  }

  h4 {
    font-size: 17px;
    font-weight: 400;
    line-height: 25px;

    a {
      color: @bright-blue;
    }
  }

  .metadata {
    font-size: 13px;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 13px;
  }

  .more {
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: underline;
    color: @bright-blue;
    text-align: right;
  }
}

.profile {
  max-width: 100%
}

.user {
  h3 {
    font-size: 18px;
    font-weight: normal;
    text-align: left;
  }

  h4 {
    font-size: 14px;
  }

  .profile-pic {
    @size: 50px;
    width: @size;
    height: @size;
    margin: 0 auto;
    border-radius: 7px;
    overflow: hidden;
  }

}

.links {

  text-align: center;

  @media (min-width: 768px) { text-align: left; }
  
  a {
    margin: 0 10px;
    font-size: 14px;
    color: @blue;
    cursor: pointer !important;
    text-transform: uppercase;
  }

  .btn-default {
    color: black;
  }

}

.site-links {
  text-align: center;
  width: 100%;
  a {
    font-size: 11px;
    margin: 0 5px;
    color: grey;
    text-transform: uppercase;
    font-weight: 500;
  }
}

.account-actions {
  text-align: center;
}

@media (min-width: 768px) { 
  .sidebar {
    border-bottom: none;
    height: 100%;
    min-height: 100%;
  }
}

</style>

<template>
<div class="sidebar"> 
  <div class="d-flex flex-column h-100">
    <div class="header">
      <h1> 
        <nuxt-link to="/">
          <img class="logo mb-2" src="/images/logo.svg"> RaceBase 
        </nuxt-link>
      </h1>

      <form class="search-form mb-3 mt-3" @submit.prevent="search()">
        <div class="input-group input-group-sm">
          <input type="text" placeholder="Search..." v-model="searchText" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">
              <fa icon="search" @click="search()"></fa>
            </span>
          </div>
        </div>
      </form>
    </div>

    <div class="nav">
      <nuxt-link class="link" to="/about"> About </nuxt-link>
      <nuxt-link class="link" to="/news"> News </nuxt-link>
      <nuxt-link class="link" to="/donate"> Donate </nuxt-link>
    </div>

    <div class="actions mt-4 mb-4" v-if="isLoggedIn">
      <div class="btn btn-default d-inline-block"> 
        New Post <fa icon="pencil-alt"></fa>
      </div>
      <div class="ml-2 btn btn-default d-inline-block">
        Add Result <fa icon="plus"></fa>
      </div>
    </div>

    <div class="races mt-auto mb-3 d-none d-md-block">
      <h3 class="mb-3"> Recent Races </h3>

      <div v-for="race in races" class="race row mb-2">
        <div class="col-2 pr-0 votes">
          <div class="mb-1"> {{ race.upvotes }} </div>
          <div><fa :icon="['far', 'thumbs-up']"></fa></div>
        </div>
        <div class="col-10 pr-0">
          <h4 class="mb-1">
            <nuxt-link :to="'/races/' + race._id"> 
              {{ race.name }} 
            </nuxt-link>
          </h4>
          <div class="metadata">
            <span class="date mr-2"> 
              <fa icon="calendar-alt" class="mr-2"></fa>{{ race.date }}
            </span>
          </div>
        </div>

      </div>
      <nuxt-link class="more mt-3 w-100 d-block" to="/races/all">
        More Races
      </nuxt-link>
    </div>

    <div class="user mt-3 mt-md-auto mx-md-0 mx-auto" v-if="isLoggedIn">

      <div class="profile row mb-1 pl-3">
        <div class="col-3 pl-4">
          <ProfilePic :url="user.profilePicUrl" class="profile-pic mr-2"/>
        </div>
        <div class="col-9">
          <h3 class="mb-2"> {{ user.name }} </h3>
          <h4> 
            <span v-if="user.athlete_id">
              <nuxt-link :to="'/athlete/' + user.athlete_id">
                @{{ user.athlete_id }} 
              </nuxt-link>
            </span>
            <span v-if="!user.athlete_id">
              <nuxt-link to="/user/settings">Claim an ID</nuxt-link>
            </span>
          </h4>
        </div>
      </div>
      <div class="links d-flex align-items-center justify-content-center">
        <nuxt-link to="/feed">Feed</nuxt-link>
        <nuxt-link to="/user/log/week">Logs</nuxt-link>
        <nuxt-link to="/user/settings"><fa icon="cogs"></fa></nuxt-link>
        <div @click="logOut()" 
          class="ml-2 btn btn-outline-primary btn-small" href="#">
          Log Out
        </div>
      </div>

    </div>

    <div class="account-actions links mt-auto" v-if="!isLoggedIn">
      <nuxt-link class="btn btn-default" to="/login">Log In</nuxt-link>
      <nuxt-link class="btn btn-primary" to="/signup">Sign Up</nuxt-link>
    </div>

    <div class="site-links links mt-2 pl-0 pb-4">
      <nuxt-link to="/developers">For Developers</nuxt-link>
      <nuxt-link to="/press">For the Press</nuxt-link>
      <nuxt-link to="/privacy">Privacy</nuxt-link>
    </div>

  </div>
</div>
</template>

<script>
const ProfilePic = () => import('~/components/User/ProfilePic')
export default {
  components: { ProfilePic },
  data () {
    return {
      searchText: ""
    }
  }, 
  computed: {
    races () {
      return this.$store.state.races.recentRaces
    }, 
    user () {
      return this.$store.state.auth.user
    },
    isLoggedIn () {
      return this.$store.getters['auth/isLoggedIn']
    }
  }, 
  methods: {
    logOut: async function() {
      this.$store.dispatch('auth/logout')
    }, 
    search: function() {
      this.$router.push({ path: '/search/' + encodeURI(this.searchText) })
    }
  }
}
</script>