<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">

  <RaceHeader :race="currentRace" v-if="currentRace && !message"/>
  <RaceActions 
    :eventList="eventList" 
    :race="currentRace" 
    :gender="gender"
    :voteData="voteData"
    v-if="!message"
    @openAddWindow="openAddWindow"
    @editRace="editRace"
    @loadRace="loadRace"
    class="mb-3"
  />

  <ResultEditor
    :editMode="editMode"
    :addMode="addMode"
    :race="currentRace"
    :currentResult="currentResult"
    @closeWindow="closeWindow"
    @loadResults="loadResults"
  />
  <RaceEditor
    :addingRace="false"
    :editingRace="editingRace"
    :race="currentRace"
    @closeWindow="closeWindow"
    @load="loadRace"
  />
  <ResultsTable 
    :eventList="eventList" 
    :eventNum="eventNum"
    :results="results"
    :teamResults="teamResults"
    v-if="!message"
    @openEditWindow="openEditWindow"
  />

</div>
</template>
<script>
const RaceHeader = ()  => import('~/components/RaceHeader')
const RaceActions = () => import('~/components/RaceActions')
const ResultEditor = () => import('~/components/ResultEditor')
const RaceEditor = () => import('~/components/RaceEditor')
const ResultsTable = () => import('~/components/ResultsTable')

export default {
  components: {
    RaceHeader, 
    RaceActions, 
    ResultEditor,
    RaceEditor, 
    ResultsTable
  },
  head () {
    return {
      title: this.currentRace.name + " - RaceBase",
      meta: [{
        hid: "OpenGraph title", 
        property: "og:title", 
        content: this.currentRace.name
      }, {
        hid: "OpenGraph image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/results.png'
      }, 
      {
        hid: "OpenGraph description", 
        property: "og:description", 
        content: this.currentRace.date + " at " + this.currentRace.location
      }]
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters['auth/isLoggedIn']
    }
  },
  async asyncData ({ $axios, params, redirect, store }) {
    let race = await $axios.$get('race/' + params.id)
    let events = {}

    let gender = params.gender || "mens"

    if (!race.message) 
      events = await $axios.$get('race/' + race._id + '/' + gender + '/events')
    else 
      redirect('/races/notfound')

    let eventNum = (Number(params.event) || 0)
    eventNum = eventNum < events.length ? eventNum : 0

    var voteData

    if (store.getters['auth/isLoggedIn']) {
      voteData = await $axios.$get('race/vote/' + params.id).catch((err) => { 
        console.log(err);
      })
    }

    else 
      voteData = {}

    let results = await $axios
                        .$get(
                              'result/list/' 
                              + race._id 
                              + '/' 
                              + gender
                              + '/'
                              + encodeURI(events[eventNum])
    ).catch(() => {
      redirect('/races/notfound')
    })

    let teamResults = await $axios
                            .$get(
                              'result/teamlist/' 
                              + race._id 
                              + '/' 
                              + gender 
                              + '/'
                              + encodeURI(events[eventNum])
    ).catch(() => {
      redirect('/races/notfound') 
    })

    return {
      currentRace: race, 
      eventList: events, 
      eventNum: eventNum, 
      results: results, 
      teamResults: teamResults, 
      gender: gender, 
      voteData: voteData
    } 
  },
  data () {
    return {
      message: "", 
      editMode: false,
      addMode: false,
      editingRace: false,
      currentResult: {}
    }
  },
  methods : {
    loadResults: async function() {

      this.eventList = await this.$axios.$get('race/' + this.currentRace._id + '/' + this.gender + '/events')
                                .catch(() => { console.log("Something went wrong getting the events list.") })

      this.results = await this.$axios
                          .$get(
                                'result/list/' 
                                + this.currentRace._id 
                                + '/' 
                                + this.gender 
                                + '/'
                                + encodeURI(this.eventList[this.eventNum])
      ).catch(() => {
        console.log("Something went wrong.")
      })

      this.teamResults = await this.$axios
                          .$get(
                                'result/teamlist/' 
                                + this.currentRace._id 
                                + '/' 
                                + this.gender 
                                + '/'
                                + encodeURI(this.eventList[this.eventNum])   
      ).catch(() => {
        console.log("Something went wrong.")
      })

    },
    loadRace: async function(shouldLoadResults) {
      console.log(shouldLoadResults)
      this.currentRace = await this.$axios.$get('race/' + this.currentRace._id)
      if (shouldLoadResults)
        this.loadResults()
    },
    closeWindow: function() {
      this.addMode = false
      this.editMode = false
      this.editingRace = false
      this.currentResult = {}
    },
    openAddWindow: function() {
      this.addMode = true
      this.editMode = false
      this.editingRace = false
    },
    openEditWindow: function(result) {
      this.addMode = false
      this.editMode = true
      this.currentResult = result
    },
    editRace: function() {
      this.addMode = false
      this.editMode = false
      this.addingRace = false
      this.editingRace = true
    }
  }, 
  watch: {
    $route: function () {
      this.gender = this.$route.params.gender || this.gender
      this.eventNum = this.$route.params.event || 0
      this.updateResults()
    } 
  }
}
</script>