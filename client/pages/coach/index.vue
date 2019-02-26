<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';

.profile-pic {
  @size: 35px;
  border-radius: 3px;
  overflow: hidden;
  width: @size; height: @size;
}

.team-name {
  font-size: 28px;
  border: none;
  padding-left: 0; 
  margin-left: 0; 
}

h2 {
  font-size: 20px; 
}

h5 {
  text-transform: uppercase;
  font-size: 18px;
}

.fa-book-open {
  font-size: 12px;
}

.section {
  border-radius: 5px;
  border: 1px solid @light-grey;
  overflow: hidden;

  .athlete:last-child {
    border-bottom: none;
  }

  .athlete {
    border-bottom: 1px solid @light-grey;

    .name {
      font-size: 17px;
      font-weight: 500;
    }
  }
}

.tag {
  border-radius: 3px; 
  border: 1px solid @light-grey;
}

</style>
<template>
<div class="mt-3 w-95 mx-auto">
<div class="d-flex align-items-center mb-2">
  <input v-on:keyup.enter="updateName" type="text" v-model="team.name" class="team-name form-control" placeholder="Enter your team's name..." /> 
  <div class="btn btn-small btn-primary" @click="updateName">Save</div>
</div>

<div class="d-flex align-items-center">
  <h2> 
    <nuxt-link :to="'/team/' + team.team_id"> 
      @{{ team.team_id }}
    </nuxt-link> 
  </h2>

  <nuxt-link to="/coach/schedule" class="ml-auto btn btn-outline-primary">
    <fa icon="calendar-alt"></fa> 
    Edit Meet Schedule
  </nuxt-link>
</div>

<div class="row mt-4"> 
  <div class="col">

    <h5> Active Athletes </h5>
    <div class="active section mb-4">
      <div v-for="athlete in filteredActive" class="athlete p-2">
        <div class="d-flex align-items-center"> 
          <ProfilePic class="profile-pic mr-2" :url="athlete.profilePicUrl" />
          <div class="ml-2"> 
            <div class="name"> {{ athlete.name }} </div>
            <nuxt-link :to="'/athlete/' + athlete.athlete_id"> 
              @{{ athlete.athlete_id }} 
            </nuxt-link>
            <nuxt-link class="ml-2" :to="'/athlete/' + athlete.athlete_id + '/logs'" v-if="athlete.team_id == team.team_id"> 
              <fa icon="book-open"></fa> Logs
            </nuxt-link>
          </div>
          <div class="ml-auto">       

            <div v-if="athlete.team_id == team.team_id" class="btn btn-outline-primary btn-small" @click="addToRoster(athlete.athlete_id)"> Add to Roster </div>

            <div v-else-if="athlete.name">

              <div v-if="!athlete.sentInvite" class="btn btn-outline-primary btn-small" @click="athlete.showInvite = true">
                <fa icon="envelope" class="mr-1"></fa>Invite
              </div>
              <div class="btn btn-dark btn-small" v-else> 
                <fa icon="check"></fa> Invited
              </div>

            </div>

          </div>
        </div>
        <div v-if="athlete.showInvite && !athlete.sentInvite" class="mt-2"> 
          Are you sure? This will <strong>send an email</strong> to {{ athlete.name }}. 
          <div class="d-flex align-items-center mt-2">
            <div class="btn-small btn btn-outline-primary mr-2" @click="inviteAthlete(athlete)">Yes, send invite</div>
            <div class="btn-small btn btn-outline-danger" @click="athlete.showInvite = false">No</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="col">
    <h5> Current Roster </h5>
    <div class="roster section mb-4" v-if="roster.length > 0">
      <div v-for="athlete in roster" class="athlete d-flex p-2 align-items-center"> 
        <ProfilePic class="profile-pic mr-2" :url="athlete.profilePicUrl" />
        <div class="ml-2"> 
          <div class="name"> {{ athlete.name }} </div>
          <nuxt-link :to="'/athlete/' + athlete.athlete_id"> 
            @{{ athlete.athlete_id }} 
          </nuxt-link>
          <nuxt-link class="ml-2" :to="'/athlete/' + athlete.athlete_id + '/logs'" v-if="athlete.team_id == team.team_id"> 
            <fa icon="book-open"></fa> Logs
          </nuxt-link>
        </div>
        <div class="ml-auto">           
          <div class=" ml-3 btn btn-outline-danger btn-small" @click="removeFromRoster(athlete.athlete_id)">
            Remove
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-roster">
      No athletes on the roster! Add some from the left to get started
    </div>
  </div>
</div>

<div class="mb-5">
  <div class="d-flex align-items-center"> 
    <h5 class="mr-3 mb-0"> Unclaimed Athletes </h5> 
    <div class="btn btn-outline-primary btn-small" @click="showUnclaimed = !showUnclaimed">
      {{ showUnclaimed ? 'Hide' : 'Show' }}
    </div>
  </div>
  <div v-if="showUnclaimed">
    <SearchBar v-model="search" class="mt-3"/>
    <div v-for="athlete in filteredUnclaimed" class="d-inline-block mr-2 my-1 px-2 py-1 tag">
      <nuxt-link :to="'/athlete/' + athlete.athlete_id"> 
        {{ athlete.athlete_id }}
      </nuxt-link>
    </div>
  </div>
</div>

</div>
</template>
<script>
const ProfilePic = () => import('~/components/User/ProfilePic')
const SearchBar = () => import('~/components/Search/SearchBar')
import _ from 'underscore'
export default {
  components: { ProfilePic, SearchBar },
  async asyncData ({ $axios, store }) {
    let user = { ...store.state.auth.user }

    let team = await $axios.$get('/team/' + user.team_id)
    console.log(team)
    let roster = await $axios.$get('/team/' + user.team_id + '/roster')
    let athletes = await $axios.$get('/team/' + user.team_id + '/athletes')
    let unclaimed = _.filter(athletes, (athlete) => { return athlete.name == (null || undefined) })
    let active = _.reject(athletes, (athlete) => { return athlete.name == (null || undefined) })

    // add false showInvite and sentInvite properties for reactivity
    for (const a of active) { a.showInvite = false; a.sentInvite = false }

    return {
      team: team, 
      active: active, 
      roster: roster,
      unclaimed: unclaimed, 
      search: "", 
      showUnclaimed: false
    }
  }, 
  middleware: 'coach',
  methods: {
    loadRoster: async function() {
      this.roster = await this.$axios.$get('/team/' + this.team.team_id + '/roster')
    }, 
    addToRoster: async function(athlete_id) {
      await this.$axios.$post('/team/roster/athlete/' + athlete_id)
      this.loadRoster()
    }, 
    removeFromRoster: async function(athlete_id) {
      await this.$axios.$delete('/team/roster/athlete/' + athlete_id)
      this.loadRoster()
    }, 
    updateName: async function() {
      let res = await this.$axios.$put('/team/' + this.team.team_id, { name: this.team.name })
    }, 
    inviteAthlete: async function(athlete) {
      let res = await this.$axios.$post('/team/invite/' + athlete.athlete_id)
      athlete.sentInvite = true
      athlete.showInvite = false
    }
  }, 
  computed: {
    filteredUnclaimed: function() {
      return this.unclaimed.filter(athlete => {
        return athlete.athlete_id.toLowerCase().includes(this.search.toLowerCase())
      })
    }, 
    filteredActive: function() {
      // filter out athletes who don't have user data associated with them, and athletes who are on the roster
      let f = this.active.filter(athlete => {
        return athlete.name != (null || undefined) && !this.roster.some(a => a.name === athlete.name)
      })
      return f
    }
  }
}
</script>