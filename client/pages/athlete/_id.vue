<style lang="less" scoped>
  
@import (reference) '~assets/less/colors.less';

.profile-header {

  h1 {
    font-size: 23px;
    font-weight: 500;
  }

  h2 {
    font-size: 16px;
    font-weight: normal;
  }

  .btn.follow {
    vertical-align: top;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    height: 25px;
    padding: 5px 7px; 
  }

  .strava {
    color: @orange;
  }

}

.profile-info {

  .shoe {
    width: 25px;
  }

}

h2.year {
  font-size: 23px;
}

h3.event-header {
  text-align: left;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
}

.results-table {

  td {
    vertical-align: middle;
  }

  .place {
    text-align: center;
    font-size: 11px;
    .num {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .title {
    color: @blue;
    font-size: 17px;
    font-weight: 500;
  }

  .metadata {
    font-size: 14px;
  }

  .distance {
    font-weight: 500;
  }

  .time {
    font-family: 'DS Digital', 'Helvetica', sans-serif;
    font-size: 27px;
    color: @bright-blue;
    text-align: right;
    padding-right: 15px;

    .star {
      color: @blue;
    }
  }

}

.brand {
  display: block;
  margin: 0 auto;
  width: 70px;
}

.user-image {
  display: block;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
}

.personal-records {

  margin: 0 auto;

  thead {
    width: 100%;
    text-align: center;
    font-weight: 500;

    th {
      text-transform: uppercase;
      border: none;
      font-size: 16px;
      color: grey;
      padding-bottom: 0;
    }
  }

  td {
    vertical-align: middle;
    padding: 0px 15px;
  }

  .distance {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
  }

  .time {
    font-family: 'DS Digital';
    color: @blue;
    font-size: 22px;
    text-align: right;
  }

  .more {
    text-align: right;
    font-style: italic; 
    font-size: 12px;
    text-transform: uppercase;
    div {
      margin-top: 15px;
    }
    a {
      text-decoration: underline;
    }
  }

}

</style>

<template>
<div>
<div v-if="results.length <= 0" class="w-90 mx-auto mt-4">
  <h1> That athlete doesn't exist! </h1>
  Click <nuxt-link to="/">here</nuxt-link> to go home
</div>
<div class="row mw-100 pl-0 w-100 mx-0" v-if="results.length > 0">

  <div class="col-md-8 col-12 px-0 order-12 order-md-1">

    <div class="profile mt-4 mb-4 w-90 mx-auto" itemscope itemtype="http://schema.org/Person">

      <div class="profile-header mb-3">
        <img 
          v-if="!athlete.profilePicUrl"
          class="profile-pic mr-3 d-inline-block" 
          src="/images/default.png"
          itemprop="image"
        />
        <img 
          v-if="athlete.profilePicUrl"
          class="profile-pic mr-3 d-inline-block"
          :src="athlete.profilePicUrl.replace('http', 'https')"
          itemprop="image"
        />
        <div class="d-inline-block mr-3">
          <h1 itemprop="name"> {{ name }} </h1>
          <h2 class="mb-0">
            @{{ id }}
            
            <a v-if="athlete.stravaUrl" 
              :href="athlete.stravaUrl"
              target="_blank"
              class="ml-3 strava"
            > 
              <fa :icon="['fab', 'strava']"></fa> Strava
            </a>

            <a 
              :href="'https://twitter.com/intent/tweet?text='
                + encodeURI('Check out this profile on RaceBase! @racebaseio')
                + '&url=https://racebase.io/athlete/' + id
                + '&hashtags=racebase'"
              class="ml-3" 
              target="_blank"
              data-hashtags="racebase" 
            >
              <fa :icon="['fab', 'twitter']"></fa> Tweet
            </a>

          </h2>
        </div>
        <button class="btn btn-primary follow mt-3 mt-lg-0 d-none" v-if="isLoggedIn">
          Follow
        </button>

      </div>

      <div class="profile-info mb-2" v-if="athlete">

        <div class="shoes mb-2">
          <span class="trainer mr-3 d-block d-lg-inline-block" v-if="user.trainer">
            <object type="image/svg+xml" data="/images/trainer-blue.svg" class="shoe mr-1">
            </object>
            {{ user.trainer }}
          </span>

          <span class="racer" v-if="user.racer">
            <object type="image/svg+xml" data="/images/racer.svg" class="shoe mr-1">
            </object>
            {{ user.racer }}
          </span>
        </div>

        <div class="personal">
          <span class="mileage mr-3" v-if="user.mileage">
            <fa icon="calendar-alt" class="icon mr-1"></fa>
            {{ user.mileage }} MPW
          </span>

          <span class="location" v-if="user.location">
            <fa icon="map-marker-alt" class="icon mr-1"></fa>
            <span itemprop="homeLocation"> {{ user.location }} </span>
          </span>
        </div>

      </div>

      <div class="claim-info" v-if="!claimed">
        <div>
          Is this you? 
          <span v-if="!isLoggedIn">
            <nuxt-link to="/login">Log In</nuxt-link> or 
            <nuxt-link to="/signup">Sign Up</nuxt-link> 
            to claim this athlete profile.
          </span>
          <span v-if="isLoggedIn">
            <span v-if="!user.athlete_id">
              Click <a @click="claim()">here</a> to claim this profile.
            </span>
            <span v-if="user.athlete_id">
              Click <a @click="addAlias()" href="#">here</a> to add this profile to your aliases.
            </span>
          </span>
        </div>
      </div>

      <div class="claim-info" v-if="claimed && user.athlete_id != id">
        <div>Claimed by {{ claimedBy ? claimedBy : "Anonymous" }}</div>
        <div class="smaller" v-if="claimedBy">
          Click 
          <a href="mailto:racebase@breeze.software">here</a> 
          to report a wrongfully claimed athlete.
        </div>
      </div>

    </div>

    <h3 v-if="(!results || results.length == 0) && athlete">No Results</h3>

    <div v-for="(list, index) in results" class="mb-4 w-90 mx-auto">

      <h2 class="year mb-3"> {{ years[index] }} </h2>

      <div class="results-container">

        <div class="table-responsive mb-4">
          <table class="results-table table table-striped mb-0">
            
            <tbody>
              <tr v-for="result in list">

                <td class="place">
                  <div class="num"> {{ result.place }} </div>
                  <fa icon="trophy" class="d-block mx-auto"></fa>
                </td>

                <td class="race">

                  <nuxt-link class="title mr-2" :to="'/races/' + result.race_id">
                    {{ result.race }}
                  </nuxt-link>

                  <div class="distance d-inline-block"> {{ result.distance }} </div>

                  <div class="metadata mt-2">
                    <span class="date mr-2">
                      <fa icon="calendar-alt" class="icon mr-1"></fa>
                      {{ result.date }}
                    </span> 

                    <span class="team no-wrap">
                      <fa :icon="['fab', 'font-awesome-flag']" class="icon mr-1"></fa>
                      <nuxt-link to v-if="result.team_id" :to="'/team/' + result.team_id">
                        {{ result.team }}
                      </nuxt-link>
                      <span v-if="!result.team_id">{{ result.team }}</span>
                    </span>

                  </div>

                </td>

                <td class="time">
                  {{ result.time }}<span class="star" v-if="recordsArray.includes(result)">*</span>
                </td>

              </tr>
            </tbody>

          </table>
        </div>
      </div>

    </div>

  </div>

  <div class="col-12 col-md-4 pr-0 pl-0 pr-md-2 mt-4 ml-0 order-1 order-md-12 w-100">
    <div 
      v-if="!athlete.brandPicUrl || !athlete.featuredPicUrl" 
      style="text-align: center" 
      class="mb-3"> 
      Want to customize this page? <br/>
      <nuxt-link to="/user/settings" v-if="isLoggedIn"> Claim this profile </nuxt-link>
      <span v-if="!isLoggedIn">
        <nuxt-link to="/login"> Log In </nuxt-link> or
        <nuxt-link to="/signup"> Sign Up </nuxt-link>
      </span>
      <br/> to add custom images.
    </div>

    <img 
      class="brand-pic brand mb-4" 
      v-if="athlete.brandPicUrl" 
      :src="athlete.brandPicUrl.replace('http', 'https')"
    />
    
    <img 
      v-if="athlete.featuredPicUrl"
      class="user-image mb-4" 
      :src="athlete.featuredPicUrl.replace('http', 'https')"
    />

    <div class="table-responsive personal-records mt-4 mx-auto w-90">
      <table class="table mb-2">
        <thead>
          <tr>
            <th colspan="2" class="pb-2"> Personal Records </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, distance) in records">
            <td class="distance">{{ distance }}</td>
            <td class="time">{{ record.time }}</td>
          </tr>
          <tr v-if="Object.keys(records).length < 3" class="more">
            <td colspan="2">
              <div v-if="isLoggedIn">
                <nuxt-link to="/user/content">Add more results</nuxt-link>
              </div>
              <div v-if="!isLoggedIn">
                <nuxt-link to="/login">Log in</nuxt-link> to add more results
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

</div>
</div>
</template>

<script>
import _ from 'underscore' 
import wordsToNumbers from 'words-to-numbers'

let format = async function(x) {
  try {
    x = wordsToNumbers(x.toLowerCase()) || 0; 
    if (x.match(/(\d\s?k|\d\s?km|(meter)(s)?|00\s?m)/g)) {
      var meters = await getMeters(x);
      if (meters > 3000 && Number.isInteger(meters / 1000))
        return (meters / 1000) + " km"; 
      else 
        return meters + "m"; 
    } else if (x.match(/(mi)/g)) {
      var miles = await getMiles(x); 
      return miles + " mi";
    } else {
      return "Unknown"
    }
  } catch (err) {
    console.log(err)
    return "Unknown"
  }
}

let getMeters = async function(x) {
  try {
    return parseInt(x
    .toLowerCase()
    .replace(',', '')
    .replace(/\s?(k)(m)?(ilometers)?/g, '000m')
    .replace(/\s?(meter)[s]?/g, 'm')
    .replace(' ', '')
    .match(/\d+(m)/g)[0]
    .replace('m', '')) || 0  
  } catch (err) {
    console.log(err)
    return 0
  }
}

let getMiles = async function(x) {
  try {
    return parseFloat(x
      .toLowerCase()
      .replace(',', '')
      .replace(' ', '')
      .replace(/(mi)(le)?(s)?/g, 'mi')
      .match(/\d+(.)?\d*(mi)/g)[0]
      .replace('mi', '')) || 0    
  } catch (err) {
    console.log(err)
    return 0
  }
}

export default {
  head () {
    return {
      title: this.name + ' - RaceBase', 
      meta: [{
        hid: 'OpenGraph Title', 
        property: 'og:title', 
        content: this.athlete.name
      }, {
        hid: 'OpenGraph URL', 
        property: 'og:url',
        content: process.env.ROOT_URL + this.$route.fullPath
      }, {
        hid: 'OpenGraph Image', 
        property: 'og:image',
        content: this.athlete.profilePicUrl
      }, {
        hid: 'Description', 
        name: 'description', 
        content: "View " + this.name + "'s race results on RaceBase, the Internet's first community sourced results database"
      }, {
        hid: "OpenGraph Description", 
        property: 'og:description', 
        content: "View " + this.name + "'s race results on RaceBase, the Internet's first community sourced results database"
      }]
    }
  },
  async asyncData ({ store, params, $axios, redirect}) {
    let user = store.state.auth.user
    let athlete = await $axios.$get('user/athlete/' + params.id)

    let results = await $axios.$get('result/list/athlete/' + params.id)

    if (!results || results.length < 1)
      redirect('/notfound')

    let name = athlete ? athlete.name : results[0].athlete
    let id = params.id

    for (var index in results) {
      try {      
        var result = results[index]
        result.distance = await format(result.event)
        let d = new Date(result.date)
        result.year = d.getFullYear()
      } catch (err) {
        console.log(err)
      }
    }

    let years = _.groupBy(results, 'year')

    let distances = _.groupBy(results, 'distance')

    let records = {}
    let recordsArray = []

    for (var distance in distances) {
      records[distance] = _.sortBy(distances[distance], 'time')[0];
      recordsArray.push(records[distance])
    }

    results = _.sortBy(Object.values(years), 'year').reverse()
    years = Object.keys(years).sort().reverse()

    let claimData = await $axios.$get('user/claimed/' + params.id)
    let claimed = claimData.claimed
    let claimedBy = claimData.user

    return {
      user: user, 
      athlete: athlete, 
      results: results, 
      years: years,
      records: records, 
      recordsArray: recordsArray,
      claimed: claimed, 
      claimedBy: claimedBy, 
      name: name, 
      id: params.id
    }

  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters['auth/isLoggedIn']
    }
  },
  methods : { 
    claim: function() {
      if (!this.user)
        return
      this.$axios.$post('user/claim/' + this.user._id + '/' + this.id)
      .then((res) => {
        this.getClaim()
      })
    }, 
    addAlias: async function() {
      this.$axios.$post('user/' + this.user._id + '/alias/' + this.id)
      .then(async (res) => {
        if (res.success) {
          await this.getClaim()
          this.$store.dispatch('auth/fetchUser')
        }
      })
    },
    getClaim: async function() {
      let claimData = await this.$axios.$get('user/claimed/' + this.id)
      this.claimed = claimData.claimed
      this.claimedBy = claimData.user
    }
  }
};
</script>