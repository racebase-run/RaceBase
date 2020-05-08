<style lang="less" scoped> 
h4 {
  font-size: 16px;
  text-transform: uppercase;
}
</style>

<template> 
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">
    <RaceHeader :race="race" class="mb-3"/>
    <h4 class="mb-3"> {{event.name}} : Team Scores </h4>
    <div class="table-responsive mb-3">
      <table class="table table-striped mb-2">
        <thead>
          <tr> 
            <th> Team </th>
            <th> Athletes </th>
            <th> Score </th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="result in teamResults"> 
            <td class="team">
              <router-link :to="'/team/' + result.team_id">
                {{ result.team }} 
              </router-link>
            </td>
            <td> 
              <div v-for="athlete in result.athletes">
                <router-link :to="'/athlete/' + athlete.athlete_id">
                  {{ athlete.athlete }}
                </router-link>: {{ athlete.place }}
              </div>
            </td>
            <td> {{ result.score }} </td>
          </tr>
        </tbody>

      </table>
    </div>
</div>
</template>

<script> 
const RaceHeader = ()  => import('~/components/Races/RaceHeader')
export default {
    components: { 
        RaceHeader
    },
    async asyncData({ $axios, params }) {

        let race = await $axios.$get('race/' + params.id);
        let event = await $axios.$get('event/' + params.event); 

        let teamResults = await $axios.$get(
          'result/teamlist/' 
          + params.id 
          + '/event/' 
          + params.event
        ).catch(() => {
          redirect('/races/notfound') 
        })


        return {
            teamResults: teamResults, 
            race: race, 
            event: event
        }
    }
}
</script>