<template> 
<div class="w-95 mx-auto mt-4" > 
    <h1 class="mb-3"> Edit Your Team </h1>
    <div class="col-12 col-lg-6 px-0"> 
        <div class="mb-3"> 
            <label> Team Name </label>
            <input type="text" placeholder="Team Name" v-model="input.name" class="form-control"/>
        </div>
        <div class="mb-3"> 
            <label> Team ID </label>
            <input type="text" placeholder="Team ID" v-model="input.team_id" class="form-control"/>
        </div>
        <div class="alert alert-warning mb-3" v-if="warning"> {{ warning }} </div>
        <button class="btn btn-primary mb-3" @click="warning ? update() : warn()"> 
            {{ warning ? "Yes, I'm sure" : (modified ? "Save" : "Saved") }}
        </button>
    </div>
</div>
</template>
<script> 
export default {
    middleware: 'coach', 
    async asyncData({ $axios, store }) {
        let user = { ...store.state.auth.user };
        let team = await $axios.$get('team/' + user.team_id); 
        return {
            original: { ...team }, 
            input: { ...team }, 
            warning: ""
        }
    }, 
    methods: {
        warn: function() {
            this.warning = "Are you sure? This will update all results associated with your team."; 
        }, 
        update: async function() {
            this.warning = ""
            let updated = await this.$axios.$put('team/' + this.original.team_id, this.input); 
            this.original = { ...updated }; 
        }
    }, 
    computed: {
        modified: function() {
            if (this.original.team_id != this.input.team_id) return true; 
            if (this.original.name != this.input.name) return true; 
            return false;  
        }
    }
}
</script>