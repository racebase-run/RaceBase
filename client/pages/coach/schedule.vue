<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';
.schedule {
  border-radius: 5px;
  border: 1px solid @light-grey;

  .meet {
    border-bottom: 1px solid @light-grey; 

    .form-control {
      border: none;
      padding: 0;
    }

    .btn {
      width: auto;
      height: auto;
    }

    .meet-title {
      font-size: 23px; 
      font-weight: 500;
    }

    .meet-date {
      font-size: 20px;
      font-weight: 500; 
      text-align: right;
      .fa-calendar-alt {
        font-size: 15px;
      }
    }

    .fa-map-marker-alt {
      font-size: 12px;
    }
  }

  .meet:last-child {
    border-bottom: none;
  }
}
</style>
<template>
<div class="mx-auto w-95 mt-4">
  <h2> Meet Schedule </h2>

  <div class="schedule mt-3">
    <div class="meet p-2 px-3" v-for="(meet, i) in team.schedule"> 
      <div class="d-flex align-items-center">
        <div class="meet-title">{{ meet.name }}</div>
        <div class="meet-date ml-auto">
          <fa icon="calendar-alt" class="mr-2"></fa> 
          {{ formatDate(meet.date) }} 
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="meet-location"> 
          <fa icon="map-marker-alt" class="mr-2"></fa>
          {{ meet.location }} 
        </div>
        <div class="btn btn-outline-danger ml-auto px-2 py-1" @click="removeFromSchedule(i)">Remove</div>
      </div>
    </div>
    <form @submit.prevent="addToSchedule" class="meet p-2 px-3">
      <div class="d-flex align-items-center">
        <fa icon="pencil-alt" class="mr-2"></fa>
        <input 
          class="meet-title form-control" 
          v-model="newMeet.name" 
          placeholder="Meet Name" 
          required
        />
        <input 
          class="form-control meet-date" 
          pattern="^(0[1-9]|1[012]|\w*)(\s|[/])(0?[1-9]|[12][0-9]|3[01])(\s|[/])\d\d\d\d$" 
          placeholder="Month DD YYYY" 
          v-model="newMeet.date" 
          required
        />
      </div>
      <div class="mt-2 d-flex align-items-center"> 
        <fa icon="map-marker-alt" class="mr-2"></fa>
        <input 
          class="form-control" 
          v-model="newMeet.location" 
          placeholder="Location" 
          required
        />
        <input type="submit" class="px-3 py-1 ml-auto form-control btn btn-primary" value="Add" />
      </div>

    </form>
  </div>
</div>
</template>
<script> 
import moment from 'moment'
export default {
  head () {
    return {
      title: (this.team.name || this.team.team_id) + " Meet Schedule - RaceBase"
    }
  },
  async asyncData({ $axios, store }) {
    let user = { ...store.state.auth.user }
    let team = await $axios.$get('/team/' + user.team_id)

    return {
      user: user, 
      team: team, 
      newMeet: {
        name: "",
        location: "", 
        date: ""
      }
    }
  }, 
  middleware: 'coach',
  methods: {
    loadSchedule: async function() {
      let team = await this.$axios.$get('/team/' + this.user.team_id)
      this.team.schedule = team.schedule
    }, 
    addToSchedule: async function() {
      let newDate = moment(this.newMeet.date, 'MMMM DD YYYY').toDate()
      let res = await this.$axios.$post('/team/schedule', {
        name: this.newMeet.name, 
        location: this.newMeet.location, 
        date: newDate
      })
      this.clearForm()
      this.loadSchedule()
    }, 
    removeFromSchedule: async function(i) {
      let res = await this.$axios.$delete('/team/schedule/' + moment(this.team.schedule[i].date).format('DDMMYYYY'))
      this.loadSchedule()
    },
    clearForm: function() {
      this.newMeet.name = ""
      this.newMeet.location = ""
      this.newMeet.date = ""
    },
    formatDate: function(date) {
      return moment(date).format('MMMM DD YYYY')
    }
  }
}
</script>