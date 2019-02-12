<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

h4 {
  text-transform: uppercase;
  font-size: 13px; 
  color: @label-grey;
  font-weight: 400;
}

.fa-times-circle {
  cursor: pointer;
}

.btn {
  font-size: 14px;
  padding: 3px 6px;
  text-transform: uppercase;
}

form {
  border: 1px solid @light-grey;
  border-radius: 5px;

  .title {
    border: none;
  }

  .title, .title::placeholder {
    font-size: 20px;
  }

  .date {
    white-space: nowrap;
  }
}

</style>
<template>
<div> 
  <h4> New Post </h4>
  <form @submit.prevent="createPost()" class="p-3">
    <div class="d-flex align-items-start">
      <input 
        type="text" v-model="input.title" 
        class="title form-control mb-2 pl-2 w-50" 
        placeholder="Enter your title..." 
      />
      <div class="date ml-auto">
        <fa icon="calendar-alt"></fa>
        {{ formattedDate }}
      </div>
      <fa class="ml-4" icon="times-circle" @click="$emit('close')"></fa>
    </div>
    <Result :result="input.result" v-if="input.result" class="mb-2"/>
    <div class="btn btn-default mb-2 mr-auto" 
      @click="selectResult()" v-if="!linking">
      <span v-if="input.result">Change <fa icon="pencil-alt"></fa></span>
      <span v-else>Link a result <fa icon="plus"></fa></span>
      
    </div>
    <div class="results-search mb-2" v-else>
      <h4> Your Recent Results </h4>
      <div v-for="result in yourResults" class="d-flex align-items-center mb-1">
        
        <div class="btn btn-outline-primary btn-small mr-2" 
          @click="linkResult(result)">
          Link <fa icon="link"></fa>
        </div>

        <Result :result="result" />

      </div>
    </div>
    <textarea 
      v-model="input.body" 
      class="form-control mb-3" 
      placeholder="Share something with the world" 
    />
    <div class="btn btn-primary" @click="createPost()"> Create </div>
  </form>
</div>
</template>

<script>
const Result = () => import('~/components/Feed/Result')
import moment from 'moment'
export default {
  props: ['close', 'user'],
  components: { Result },
  data () {
    let date = new Date()
    let formattedDate = moment(date).format('MMMM D YYYY')
    return {
      input: {
        title: "",
        body: "", 
        date: date
      }, 
      linking: false, 
      formattedDate: formattedDate, 
      yourResults: []
    }
  },
  methods: {
    createPost: function() {
      this.$axios.$post('/post/', this.input)
      .then((res) => {
        console.log(res); 
      })
    }, 
    selectResult: async function() {
      this.linking = true;
      let yourResults = await this.$axios.$get('/result/list/athlete/' + this.user.athlete_id); 
      this.yourResults = yourResults.slice(-5); 
    }, 
    linkResult: function(result) {
      this.input.result = result
      this.input.result_id = result._id
      this.linking = false
    }
  }
}
</script>