<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';

.checkbox {
    font-size: 10px;
    padding: 0;
    @size: 25px;
    width: @size; height: @size;
    line-height: @size;
    color: @medium-grey;
}

.btn-save {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 13px;
    padding: 3px 5px;
    padding-top: 6px;
    line-height: 100%;
    height: auto;
}
</style>
<template>
<div> 
    <h4 class="d-flex align-items-center">
        {{ group.name }} 
        <button class="btn btn-primary ml-3 btn-save" @click="save()"> 
            {{ saved ? "Saved" : "Save" }}
            <fa icon="check" v-if="saved"/>
        </button>
    </h4>
    <h5 class="mb-3"> @{{ team_id }} </h5>
    <div> 
        <div v-for="athlete in available" class="d-flex align-items-center mb-2"> 
            <button 
                class="btn checkbox mr-2"
                :class="selected[athlete.athlete_id] ? 'btn-primary' : 'btn-default'"
                @click="selected[athlete.athlete_id] = !selected[athlete.athlete_id]"
            > 
                <fa icon="check" v-if="selected[athlete.athlete_id]"/>
                <fa icon="times" v-else/>
            </button>
            <nuxt-link :to="'/athlete/' + athlete.athlete_id"> 
                @{{ athlete.athlete_id }}
            </nuxt-link>
        </div>
    </div>

</div>
</template>
<script> 
export default {
    props: ['group', 'available', 'type', 'team_id'], 
    data() {
        let selected = {};
        for (var athlete of this.available) {
            selected[athlete.athlete_id] = false;
        }
        for (var athlete_id of this.group.athletes) {
            selected[athlete_id] = true; 
        }
        return {
            selected: selected, 
            original: {...selected}
        }
    }, 
    methods: {
        save: function() {
            this.original = {...this.selected}; 
            this.$emit('save', this.selected); 
        }
    }, 
    computed: {
        saved: function() {
            for (var id of Object.keys(this.selected)) {
                if (this.selected[id] != this.original[id]) return false;
            }
            return true;
        }
    }
}
</script>