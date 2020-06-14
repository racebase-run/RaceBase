<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">
    <RaceHeader :race="race"/>
    <h4 class="mt-3"> @{{teamId}} </h4>
    <ResultsTable 
        :event="event"
        :results="results"
        :id="race._id"
    />
</div>
</template>

<script> 
const RaceHeader = ()  => import('~/components/Races/RaceHeader')
const ResultsTable = () => import('~/components/Results/ResultsTable')

export default {
    components: {
        RaceHeader, 
        ResultsTable
    }, 
    async asyncData({ $axios, params }) {
        let race = await $axios.$get('race/' + params.id);
        let event = await $axios.$get('event/' + params.event); 
        let results = await $axios.$get(
            'result/list/race/'+ 
            params.id + 
            '/event/' + 
            params.event + 
            '/team/' + 
            params.teamId
        ).catch(() => {
          redirect('/races/notfound')
        });

        return {
            results: results, 
            event: event, 
            race: race, 
            teamId: params.teamId
        }
    }
}
</script>
