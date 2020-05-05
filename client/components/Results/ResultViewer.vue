<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';
@import '~assets/less/result.less'; 

.title {
    .btn {
        font-size: 12px;
        text-transform: uppercase;
        padding: 3px 7px;
    }
    width: 50%;
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
        <nuxt-link class="btn btn-default" :to='"/result/edit/" + doc._id'>
            Edit
        </nuxt-link>
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
            {{ doc.race }}
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
    props: ['doc']
}
</script> 