<style lang="less" scoped>

</style>
<template>
<div>
  <h3 class="no-results" v-if="!races"> No results! </h3>
  <div class="table-responsive w-90 mx-auto">
    <table class="table table-striped mb-0">
      <tbody>
        <tr v-for="race in races">

          <td class="vote-data d-flex align-items-center">
            <div class="votes">
              <div><b>{{ race.upvotes || 0 }}</b></div>
              <fa :icon="['far', 'thumbs-up']"></fa>
            </div>
            <div class="votes">
              <div><b>{{ race.downvotes || 0 }}</b></div>
              <fa :icon="['far', 'thumbs-down']"></fa>
            </div>
          </td>

          <td class="race-data">
            <router-link class="race-title" :to="'/races/' + race._id">{{ race.name }}</router-link>
            <div class="metadata">

              <span class="mr-2">
                {{ race.date }}
              </span> 

              <span class="mr-2">
                &nbsp;<fa icon="map-marker-alt" class="divider"></fa>
                {{ race.location }}
              </span>

              <span class="">
                <fa icon="user"></fa>
                {{ race.user }}
              </span>
            </div>
          </td>

          <td class="verified-data">
<!--             <i class="fas fa-check" v-if="race.verified"></i>
            <i class="fas fa-times" v-if="!race.verified"></i> -->
          </td>

        </tr>
      </tbody>
    </table>
  </div>

  <div class="btn-group-wrap mt-3 w-90 mx-auto pb-5">
    <div class="btn-group pager" role="pager" aria-label="Pager">
      <nuxt-link 
        class="btn btn-default" 
        v-if="currentPage > 1" 
        :to="{ params: { page: Number(currentPage)-1 } }"
      >
        Prev
      </nuxt-link>
      <nuxt-link 
        class="btn btn-default" 
        v-if="!lastPage" 
        :to="{ params: { page: Number(currentPage)+1 } }"
      >
        Next
      </nuxt-link>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  props: ['races', 'lastPage', 'currentPage']
}
</script>
