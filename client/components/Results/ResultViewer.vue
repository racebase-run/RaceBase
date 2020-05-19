<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';
@import '~assets/less/result.less'; 

.title {
    .btn {
        font-size: 12px;
        text-transform: uppercase;
        padding: 3px 7px;
    }
    border-bottom: 1px solid @light-grey;
}
h4 {
  font-size: 18px;
  text-transform: uppercase;
}

.label {
    width: 100px;
    text-align: right;
    margin-right: 15px;
}

.data {
    font-weight: 500;
}

.version {
    margin: 0;
    &:hover { 
        cursor: default;
    }
}
</style> 

<template> 
<div> 
    <div class="title d-flex align-items-center mb-3 pb-3 pl-3"> 
        <h4 class="mb-0 mr-3"> Result Info </h4> 
        <nuxt-link class="btn btn-default mr-2" :to='"/result/edit/" + doc._id'>
            Edit <fa icon="pencil-alt" class="ml-1" />
        </nuxt-link>
        <div v-if="root">
            <button @click="confirmed=true" class="btn btn-default" v-if="!confirmed"> 
                Delete <fa :icon="['fas', 'trash-alt']" class="ml-1"></fa> 
            </button>
            <div class="d-flex" v-else> 
                <button @click="$emit('deleteResult', doc._id)" class="btn btn-danger mr-2">
                    Confirm <fa icon="check"/>
                </button>
                <button @click="confirmed=false" class="btn btn-primary"> 
                    Cancel <fa icon="times"/>
                </button>
            </div>
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Version
        </div>
        <div class="data version btn btn-primary"> 
            {{ doc.version || 1 }}
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Race
        </div>
        <div class="data"> 
            <nuxt-link :to="'/races/' + doc.race_id"> {{ doc.race }} </nuxt-link>
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Event
        </div>
        <div class="data"> 
            {{ doc.event }}
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Athlete
        </div>
        <div class="data"> 
            {{ doc.athlete }}
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Athlete ID
        </div>
        <div class="data"> 
            <nuxt-link :to="'/athlete/' + doc.athlete_id"> 
                {{ doc.athlete_id }}
            </nuxt-link>
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Team
        </div>
        <div class="data"> 
            {{ doc.team }}
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Team ID
        </div>
        <div class="data"> 
            <nuxt-link :to="'/team/' + doc.team_id"> 
                {{ doc.team_id }}
            </nuxt-link>
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Time
        </div>
        <div class="data"> 
            {{ doc.time }}
        </div>
    </div>
    <div class="d-flex">
        <div class="label">
            Place
        </div>
        <div class="data"> 
            {{ doc.place }}
        </div>
    </div>
</div>
</template> 

<script> 
export default {
    props: ['doc', 'root'], 
    data () {
        return {
            confirmed: false
        }
    }
}
</script> 