<style lang="less" scoped> 
@import (reference) "~assets/less/colors.less";

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
      <tr class="revision header"> 
        <th> Version </th>
        <th> Modified </th>
        <th> Author </th>
      </tr>
      <tr v-for='revision in history' class="revision"> 
        <td> {{ revision.version }} </td>
        <td> 
          <nuxt-link :to="'/result/history/' + id + '/version/' + revision.version">
            {{ formatDate(revision.date) }}
          </nuxt-link> 
        </td>
        <td> 
          <nuxt-link :to="'/athlete/' + revision.author.athlete_id" v-if="revision.author.athlete_id">
            {{ revision.author.name }} 
          </nuxt-link>
          <div v-else> 
            {{ revision.author.name }}
          </div>
        </td>
      </tr>
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
      return {
          history: [ ...history ], 
          current: current,
          id: params.id
      }
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format("MMMM D YYYY")
    }, 
  }
}
</script>