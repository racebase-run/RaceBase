<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";

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
</style>

<template>
  <div class="navbar d-flex align-items-center"> 
    <div class="col-auto logo-container"> 
      <nuxt-link to="/">
        <img class="logo mb-2" src="/images/textlogo.svg"> 
      </nuxt-link>
    </div>
    <div class="col-4 mr-auto ml-2"> 
      <SearchBar
        v-model="searchText" 
        @search="search"         
      />
    </div>
    <div class="col-auto" v-if="!isLoggedIn"> 
      <nuxt-link to="/signup" class="btn btn-primary mr-2"> Sign Up </nuxt-link>
      <nuxt-link to="/login" class="btn btn-default"> Log In </nuxt-link>
    </div>
    <div class="col-auto d-flex" v-if="isLoggedIn">
      <nuxt-link to="/new/result" class="btn btn-primary mr-3"> 
        Add Result <fa icon="plus"/> 
      </nuxt-link>
      <div class="user col"> 
        <UserWidget :user="user" @logOut="logOut"/>
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
    search: function(notTyping) {
      if (notTyping)
        this.$router.push({ path: '/search/' + encodeURI(this.searchText) })
    }
  }
}
</script>