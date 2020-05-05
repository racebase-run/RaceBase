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
  <Viewer :doc="current" class="mb-4" />
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
          <td v-if="revision.version != current.version">
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
      let current = await $axios.$get('result/' + params.id);
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
          confirmed: confirmed
      }
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format("MMMM D YYYY");
    }, 
    confirm: function(i) {
      this.confirmed.splice(i, 1, true);
    }, 
    revert: async function(i) {
      await this.$axios.post('result/' + this.current._id + '/revert/' + i);
    }, 
    unconfirm: function(i) {
      this.confirmed.splice(i, 1, false);
    }
  }
}
</script>