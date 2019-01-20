<style lang="less" scoped>
.alert {
  width: 100%;
}
</style>
<template>
<div>
  <div class="w-90 mx-auto">
    <h1 class="mt-4"> Your Content </h1>

    <RaceEditor
      :addingRace="addingRace"
      :editingRace="editingRace"
      :race="currentRace"
      @closeWindow="closeWindow"
      @load="loadRaces"
    />

    <a class="btn btn-default add-race mt-3" @click="addRace()" v-if="!addingRace">
      Add Race &nbsp;<fa icon="pencil-alt"></fa>
    </a>

    <form class="search-form mb-3 mt-3 mx-auto" @submit.prevent="search(false)">
      <div class="input-group search home-search">
        <input 
          type="text" 
          class="form-control" 
          v-model="searchInput"
          placeholder="Search" 
          @keyup="search(true)"
        />
        <span class="input-group-append" id="basic-addon2">
          
          <span class="input-group-text">
            <fa icon="search" @click="search(false)"></fa>
          </span>

        </span>
      </div>
    </form>

    <div class="no-races user-no-races mt-3">
      <div class="alert alert-info" v-if="Object.keys(myRaces).length == 0 && !addingRace"> 
        You haven't added any races. Add one by clicking "Add Race" above. 
      </div>
    </div>

  </div>

  <RaceTable
    :races="myRaces"
    :lastPage="lastPage"
    :currentPage="currentPage"
  />

</div>
</template>

<script>
const RaceEditor = () => import('~/components/RaceEditor')
const RaceTable = () => import('~/components/RaceTable')

export default {
  components: {
    RaceEditor, 
    RaceTable
  },
  head () {
    return { 
      title: 'RaceBase - Your Content'
    }
  },
  middleware: 'auth',
  async asyncData ({ store, $axios, params }) {
    let pageNum = params.page || "1"
    let user = store.state.auth.user
    let page = await $axios.$get('user/' + user._id + '/races')

    let races = page.docs
    let lastPage = page.page == page.pages

    races = races ? races.reverse() : {}

    return {
      myRaces: races,
      currentPage: pageNum,
      lastPage: lastPage
    }
  },
  data () {
    return {
      editingRace: false, 
      addingRace: false, 
      input: {
        name: "",
        location: "",
        link: "",
        date: "", 
        csv: "",
      },
      searchInput: "",
      currentPage: 0,
      currentRace: {},
      myRaces: {}
    }
  },
  methods : {
    loadRaces: async function() {
      let id = this.$store.state.auth.user._id
      let myRaces = await (this.$axios.$get('user/' + id + '/races'))
      if (this.myRaces)
        this.myRaces = myRaces.docs ? myRaces.docs.reverse() : {}
    },
    closeWindow: function() {
      this.addingRace = false
      this.editingRace = false
    }, 
    addRace: function() {
      this.addingRace = true
      this.editingRace = false
      this.currentRace = {}
    },
    editRace: function(race) {
      this.currentRace = race
      this.editingRace = true
      this.addingRace = false
    },
    deleteRace: function(id) {
      this.$axios.$delete('race/' + id)
      .then((res) => {
        this.loadRaces()
      })
    }, 
    search: function(typing) {
      if (!this.searchInput) {
        this.loadRaces()
      } else {
        this.$axios.$get('search/user/races/' + this.searchInput)
        .then((res) => {
          if (!typing || res.length > 0) {
            this.myRaces = res; 
            this.searching = true; 
          } else {
            this.searching = false;
          }
        });   
      }
    }
  }
}
</script>