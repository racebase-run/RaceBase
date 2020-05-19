<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/sizes.less";

.logo-container {
  height: 20px;
  .logo {
    display: block;
    max-height: 100%;
  }
}

.navbar {
  align-items: center;
  border-bottom: 1px solid @light-grey;
}

.btn {
  padding: 4px 7px;
  font-size: 13px;
  border-radius: 3px; 
  font-weight: 500;
  align-self: center;
}

.actions {
  display: flex;
}

.showMore {
  display: none;
  font-size: 20px;
}

.visible {
  display: flex !important;
}

@media (max-width: @large) {
  .actions, .login {
    display: none;
  }

  .actions {
    justify-content: right;
  }
  
  .showMore {
    display: block;
  }
}

@media (max-width: @medium) { 
  .logo-container {
    height: 25px;
  }
  .actions {
    justify-content: center;
  }
}
</style>

<template>
  <div class="navbar d-flex align-items-center"> 
    <div class="col-12 col-md-auto logo-container mt-3 mt-md-0"> 
      <nuxt-link to="/">
        <img class="logo mb-2 mb-md-0 mx-auto mx-md-0" src="/images/textlogo.svg"> 
      </nuxt-link>
    </div>
    <div class="col-lg-4 col-sm-8 col-10 mt-md-0 mt-4 mr-lg-auto ml-lg-2 ml-md-auto mr-md-0 mx-auto mb-3 mb-md-0 d-flex align-items-center"> 
      <SearchBar
        v-model="searchText" 
        @search="search"
        class="col px-0"
      />
      <button class="btn btn-default ml-2 showMore" @click="toggleMore()" v-if="isLoggedIn"> 
        <fa icon="caret-down" v-if="!showMore"/> 
        <fa icon="caret-up" v-else />
      </button>
    </div>

    <div class="col-auto login" v-if="!isLoggedIn"> 
      <nuxt-link to="/signup" class="btn btn-primary mr-2"> Sign Up </nuxt-link>
      <nuxt-link to="/login" class="btn btn-default"> Log In </nuxt-link>
    </div>
    
    <div class="col-12 col-lg-auto mb-2 mt-1 my-lg-0 mx-auto mx-lg-0 actions row mt-md-3" :class="{visible: showMore}" v-if="isLoggedIn">
      <nuxt-link to="/new/result" class="btn btn-primary mr-0 mr-sm-3 mb-3 mb-sm-0" v-if="!user.coach"> 
        Add Result <fa icon="plus"/> 
      </nuxt-link>
      <nuxt-link :to="user.coach ? '/team/home/coach' : '/team/home/athlete'" class="btn btn-primary mr-0 mr-sm-3 mb-3 mb-sm-0" v-if="user.team_id"> 
        Your Team <fa :icon="['fas', 'users']" />
      </nuxt-link>
      <div class="user ml-2"> 
        <UserWidget :user="user" @logOut="logOut" class="mx-auto"/>
      </div>
    </div>
  </div>
</template>

<script>
const UserWidget = () => import('~/components/User/UserWidget')
const SearchBar = () => import('~/components/Search/SearchBar')
export default {
  components: { UserWidget, SearchBar },
  data () {
    return {
      searchText: "", 
      showMore: false 
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
    search: function(notTyping) {
      if (notTyping)
        this.$router.push({ path: '/search/' + encodeURI(this.searchText) })
    },
    toggleMore: function() {
      console.log(this.showMore);
      this.showMore = !this.showMore;
    }
  }
}
</script>