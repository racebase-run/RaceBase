<template>  
<div class="mx-auto w-95 mt-4"> 
    <GroupEditor 
        :group="group"
        :available="athletes"
        type="group"
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
        let group = await $axios.$get('team/workoutgroup/' + params.groupId); 
        let athletes = await $axios.$get('team/' + user.team_id + '/athletes');
        return {
            group: group,
            athletes: athletes, 
            user: user, 
            groupId: params.groupId
        }
    }, 
    methods: {
        save: async function(selected) {
            let group = [];
            for (var athlete_id in selected) {
                if (selected[athlete_id]) group.push(athlete_id); 
            }
            let updated = await this.$axios.$post('team/workoutgroup/' + this.groupId + '/athletes', { athletes: group }); 
            this.group = { ...updated }; 
        }
    }
}
</script>
