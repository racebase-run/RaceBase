<template>  
<div class="mx-auto w-95 mt-4"> 
    <GroupEditor 
        :group="roster"
        :available="athletes"
        type="roster"
        :team_id="user.team_id"
        @save="save"
    />
</div>
</template>
<script> 
const GroupEditor = () => import('~/components/Team/GroupEditor'); 
export default {
    components: {
        GroupEditor
    }, 
    async asyncData({ $axios, store, params }) {
        let user = { ...store.state.auth.user };
        let roster = await $axios.$get('team/roster/' + params.rosterId); 
        let athletes = await $axios.$get('team/' + user.team_id + '/athletes');
        return {
            roster: roster, 
            athletes: athletes, 
            user: user, 
            rosterId: params.rosterId
        }
    }, 
    methods: {
        save: async function(selected) {
            let roster = [];
            for (var athlete_id in selected) {
                if (selected[athlete_id]) roster.push(athlete_id); 
            }
            let updated = await this.$axios.$post('team/roster/' + this.rosterId + '/athletes', { athletes: roster }); 
            this.roster = { ...updated }; 
        }
    }
}
</script>
