<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';

.profile-pic {
  @size: 35px;
  border-radius: 3px;
  overflow: hidden;
  width: @size; height: @size;
}

h5 {
  text-transform: uppercase;
  font-size: 18px;
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
</style>
<template>
<div class="mt-3 w-95 mx-auto">
<h2> {{ team.team_id }} </h2>

<div class="row mt-3"> 
  <div class="col">

    <h5> Active Athletes </h5>
    <div class="active section mb-4">
      <div v-for="athlete in active" class="athlete d-flex p-2 align-items-center"> 
        <ProfilePic class="profile-pic mr-2" :url="athlete.profilePicUrl" />
        <div class="ml-2"> 
          <div class="name"> {{ athlete.name }} </div>
          <nuxt-link :to="'/athlete/' + athlete.athlete_id"> 
            @{{ athlete.athlete_id }} 
          </nuxt-link>
        </div>
        <div class="ml-auto">           
          <div v-if="athlete.team_id == team.team_id" class="btn btn-outline-primary btn-small" @click="addToRoster(athlete.athlete_id)"> Add to Roster </div>
          <div v-else-if="athlete.name" class="btn btn-outline-primary btn-small">
            Invite
          </div>
        </div>
      </div>
    </div>

    <h5> Unclaimed Athletes </h5>
    <div v-for="athlete in unclaimed" class="d-flex align-items-center mb-1">
      <div class="mr-2"> {{ athlete.athlete_id }} </div>
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

</div>
</template>
<script>
const ProfilePic = () => import('~/components/User/ProfilePic')
import _ from 'underscore'
export default {
  components: { ProfilePic },
  async asyncData ({ $axios, store }) {

    let user = { ...store.state.auth.user }

    let team = await $axios.$get('/team/' + user.team_id)
    let roster = await $axios.$get('/team/' + user.team_id + '/roster')
    let athletes = await $axios.$get('/team/' + user.team_id + '/athletes')
    let unclaimed = _.filter(athletes, (athlete) => { return athlete.name == (null || undefined) })
    let active = _.reject(athletes, (athlete) => { return athlete.name == (null || undefined) })

    return {
      team: team, 
      roster: roster,
      unclaimed: unclaimed, 
      active: active
    }
  }, 
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
    }
  }
}
</script>