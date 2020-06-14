<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">

  <RaceHeader :race="currentRace" v-if="currentRace"/>
  <RaceActions 
    :eventList="eventList" 
    :race="currentRace" 
    :voteData="voteData"
    @openAddWindow="openAddWindow"
    @editRace="editRace"
    @loadRace="loadRace"
    class="mb-3"
  />
  <RaceEditor
    :addingRace="false"
    :editingRace="editingRace"
    :race="currentRace"
    @closeWindow="closeWindow"
    @load="loadRace"
  />
  <ResultsTable 
    :event="event"
    :results="results"
    :id="currentRace._id"
  />

</div>
</template>
<script>
const RaceHeader = ()  => import('~/components/Races/RaceHeader')
const RaceActions = () => import('~/components/Races/RaceActions')
const RaceEditor = () => import('~/components/Races/RaceEditor')
const ResultsTable = () => import('~/components/Results/ResultsTable')

export default {
  components: {
    RaceHeader, 
    RaceActions, 
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
    let race = await $axios.$get('race/' + params.id);
    let events = {}

    if (!race.message) 
      events = await $axios.$get('race/' + race._id + '/events');
    else 
      redirect('/races/notfound');

    var voteData = {};

    if (store.getters['auth/isLoggedIn']) {
      try {
        voteData = await $axios.$get('race/vote/' + params.id)
      } catch(err) { 
        voteData = {}
        console.log(err)
      }
    }

    let event = {}
    if (params.event)
        event = await $axios.$get('event/' + params.event); 
    else 
      event = await $axios.$get('race/' + params.id + '/events/default'); 

    let results = await $axios.$get(
      'result/list/' 
      + race._id 
      + '/event/' 
      + event._id
    ).catch(() => {
      redirect('/races/notfound')
    });

    return {
      currentRace: race, 
      eventList: events, 
      results: results, 
      voteData: voteData, 
      event: event
    } 
  },
  data () {
    return {
      editMode: false,
      addMode: false,
      editingRace: false,
      currentResult: {}
    }
  },
  methods : {
    loadResults: async function() {

      this.eventList = await this.$axios.$get('race/' + this.currentRace._id + '/events')
        .catch(() => { console.log("Something went wrong getting the events list.") })

      this.results = await this.$axios.$get(
        'result/list/' 
        + this.currentRace._id 
        + '/' 
        + this.event._id
      ).catch(() => {
        console.log("Something went wrong.")
      })

      this.teamResults = await this.$axios.$get(
        'result/teamlist/' 
        + this.currentRace._id 
        + '/' 
        + encodeURI(this.eventList[this.eventNum])   
      ).catch(() => {
        console.log("Something went wrong.")
      })

      await setTimeout(_, 2000)

    },
    loadRace: async function(shouldLoadResults) {
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
    $route: async function () {
      if (this.$route.params.event)
        this.event = await this.$axios.$get('event/' + this.$route.params.event); 
      else 
        this.event = await this.$axios.$get('race/' + this.$route.params.id + '/events/default'); 
      this.updateResults()
    } 
  }
}
</script>