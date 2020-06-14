<style lang="less" scoped>
@import (reference) '~assets/less/colors.less'; 

.outline {
    width: auto;
    border-radius: 5px;
    border: 1px solid @light-grey;
    padding: 15px;
}

h5 {
    text-transform: uppercase;
    font-size: 16px;
}
</style>
<template>
<div class="w-95 mx-auto mt-3"> 
    <div class="mb-4"> 
        <h5> {{ team.name }} </h5>
        <h4> Rosters </h4>
        <div class="alert alert-info d-inline-block mt-2"> 
            <b> Note: </b> Rosters are public and can be seen by anyone 
        </div>
        <div class="outline">
            <GroupList
                type="roster"
                :team_id="team.team_id"
                :groups="rosters"
                @new="createRoster"
            />
        </div>
    </div>

    <div> 
        <h5> {{ team.name }} </h5> 
        <h4> Workout Groups </h4>
        <div class="alert alert-info d-inline-block mt-2"> 
            <b> Note: </b> Workout Groups are private
        </div>
        <div class="outline">
            <GroupList
                type="group"
                :team_id="team.team_id"
                :groups="groups"
                @new="createGroup"
            />
        </div>
    </div>

</div>
</template>
<script>
const GroupList = () => import('~/components/Team/GroupList');
export default {
    components: {
        GroupList
    }, 
    middleware: 'coach',
    async asyncData({ $axios, store }) {
        let user = { ...store.state.auth.user }; 
        let rosters = await $axios.$get('team/' + user.team_id + '/rosters'); 
        let groups = await $axios.$get('team/' + user.team_id + '/workoutgroups'); 
        let team = await $axios.$get('team/' + user.team_id); 
        return {
            rosters: rosters, 
            team: team, 
            groups: groups
        }
    }, 
    methods: {
        createRoster: async function(name) {
            let roster = await this.$axios.$post('team/roster', { name: name }); 
            this.rosters.push(roster); 
        },
        createGroup: async function(name) {
            let group = await this.$axios.$post('team/workoutgroup', { name: name }); 
            this.groups.push(group); 
        }
    }
}
</script>