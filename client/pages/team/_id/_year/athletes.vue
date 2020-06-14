<style lang="less" scoped> 
h2 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
}
</style>
<template>
<div class="mx-auto w-95 w-md-100 mx-md-0 pl-md-4 pb-4 mt-4">
    <h2>
        {{year}} 
        <nuxt-link :to="'/team/' + teamId + '/' + year"> 
            @{{teamId}} 
        </nuxt-link>
        Athletes <fa :icon="['fas', 'users']"></fa>
    </h2>
    <div v-for="athlete in athletes"> 
        <nuxt-link :to="'/athlete/' + athlete.athlete_id"> 
            {{ athlete.name }}
        </nuxt-link>
    </div>
</div>
</template>
<script>
export default {
    async asyncData({ $axios, params }) {
        let athletes = await $axios.$get('team/' + params.id + '/athletes/year/' + params.year); 
        return {
            athletes: athletes,
            year: params.year, 
            teamId: params.id
        }
    }
}
</script>