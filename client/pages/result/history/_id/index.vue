<style lang="less" scoped> 
@import (reference) "~assets/less/colors.less";
@import '~assets/less/result.less'; 

h2 {
  font-size: 26px;
}

h4 {
  font-size: 18px;
  text-transform: uppercase;
}

.btn-restore {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 3px 5px;
}

.deleted {
  border-bottom: 1px solid @light-grey;
}

.table-container {
  border: 1px solid @light-grey;
  border-radius: 3px;
  .history {
    .revision {
      &.header th {
        font-weight: 500;
      }
      td, th {
        padding: 5px 10px;
      }
      button {
        padding: 2px 5px;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 500;
      }
    }
  }
}

</style>
<template>
<div class="p-4"> 
  <div v-if="!deleted && current"> 
    <Viewer :doc="current" class="mb-3" :root="true" @deleteResult="deleteResult"/>
  </div>
  <div class="deleted mb-3 pb-2" v-else> 
    <h2 class="d-flex align-items-center">
      <span> This result has been deleted. </span>
      <button class="btn btn-primary btn-restore ml-3" @click="restore()" v-if="history.length > 0"> Restore </button>
    </h2>
  </div>
  <h2 class="mb-3"> Revision History </h2>
  <div class="table-container p-2">
    <table class="history" v-if="history.length > 0">
      <tbody>
        <tr class="revision header"> 
          <th> Version </th>
          <th> Modified </th>
          <th> Author </th>
        </tr>
        <tr v-for='(revision, i) in history' class="revision" :key="revision._id"> 
          <td> 
            <nuxt-link :to="'/result/history/' + id + '/version/' + revision.version" class="btn btn-primary version">
              {{ revision.version }}
            </nuxt-link>
          </td>
          <td> 
            {{ formatDate(revision.date) }}
          </td>
          <td> 
            <nuxt-link :to="'/athlete/' + revision.author.athlete_id" v-if="revision.author.athlete_id">
              {{ revision.author.name }} 
            </nuxt-link>
            <div v-else> 
              {{ revision.author.name }}
            </div>
          </td>
          <td v-if="revision.version != current.version && !deleted">
            <div class="d-flex"  v-if="confirmed[i]">
              <button class="btn btn-danger mr-2" @click="revert(i)">
                Confirm 
              </button>
              <button class="btn btn-default" @click="unconfirm(i)"> 
                Cancel
              </button>
            </div>

            <button class="btn btn-default" @click="confirm(i)" v-else> 
              Revert
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="p-3"> 
      <h4 class="mb-0"> No revision history to display </h4>
    </div>
  </div>
</div>
</template>

<script> 
import moment from 'moment'
const Viewer = () => import('~/components/Results/ResultViewer')
export default {
  components: { Viewer }, 
  async asyncData ({ params, $axios }) {
      let history = await $axios.$get('result/' + params.id + '/history');
      let deleted = false;
      let current = false;
      try {
        current = await $axios.$get('result/' + params.id);
      } catch(e) {
        deleted = true;
      }
      for (var result of history) {
        let authorInfo = await $axios.$get('user/' + result.author + '/info'); 
        result.author = authorInfo; 
      }
      let confirmed = Array(history.length);
      confirmed.fill(false);
      return {
          history: [ ...history ], 
          current: current,
          id: params.id, 
          confirmed: confirmed, 
          deleted: deleted
      }
  },
  methods: {
    getHistory: async function() {
      let history = await this.$axios.$get('result/' + this.id + '/history');
      let current = await this.$axios.$get('result/' + this.id);
      for (var result of history) {
        let authorInfo = await this.$axios.$get('user/' + result.author + '/info'); 
        result.author = authorInfo; 
      }
      this.history = [ ...history ]; 
      this.current = { ...current }; 
    }, 
    formatDate: function(date) {
      return moment(date).format("MMMM D YYYY");
    }, 
    confirm: function(i) {
      this.confirmed.splice(i, 1, true);
    }, 
    revert: async function(i) {
      await this.$axios.post('result/' + this.history[i].document_id + '/revert/' + this.history[i].version);
      this.getHistory(); 
      this.confirmed = false; 
    }, 
    unconfirm: function(i) {
      this.confirmed.splice(i, 1, false);
    }, 
    deleteResult: async function(id) {
      await this.$axios.delete('result/' + id);
      this.$router.push({ path: '/races/' + this.current.race_id + '/' + this.current.event_id });
    },
    restore: async function() {
      let restored = await this.$axios.$post('result/' + this.id + '/restore'); 
      if (restored)
        this.$router.push({ path: '/result/history/' + restored._id }); 
    }
  }
}
</script>