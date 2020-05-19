<style lang="less" scoped> 
label {
    text-transform: uppercase;
    font-weight: 600;
    display: block;
}

.btn.action {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
}
</style>
<template>
<div> 
    <div v-if="groups.length > 0"> 
        <div v-for="group in groups">
            <nuxt-link :to="'/team/' + type + '/' + group._id + '/edit'"> {{ group.name }} </nuxt-link>
        </div>
    </div>
    <div v-else> 
        No {{type}}s yet!
    </div>
    <div class="mt-3"> 
        <label> New {{ type }} </label>
        <div class="input-group col-12 col-lg-4 px-0"> 
            <input type="text" v-model="name" :placeholder="'New ' + type" class="form-control"/> 
            <div class="input-group-append"> 
                <button class="btn btn-primary action" @click="$emit('new', name)"> 
                    Create <fa icon="plus" class="ml-1"/>
                </button>
            </div>
        </div>
    </div>
</div>
</template>
<script> 
export default {
    props: ['groups', 'type', 'team_id'], 
    data () {
        return {
            name: ""
        }
    }
}
</script>