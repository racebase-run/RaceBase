<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

h4 {
  text-transform: uppercase;
  font-size: 13px; 
  color: @label-grey;
  font-weight: 400;
}

.fa-times-circle, .fa-times {
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

.results-search-header {
  border-top: 1px solid @light-grey;
  text-transform: uppercase; 
  font-size: 12px;
  background: @ultra-light-grey;
  .close-results {
    color: @bright-blue;
    cursor: pointer;
    font-weight: 500;
  }
}

.results-search {
  border-bottom: 1px solid @light-grey;
}

</style>
<template>
<div> 
  <h4> New Post </h4>
  <form @submit.prevent="createPost()">
    <div class="d-flex align-items-center px-3 pt-2">
      <input 
        type="text" v-model="input.title" 
        class="title form-control mb-2 pl-0 w-50 pt-2" 
        placeholder="Enter your title..." 
      />
      <div class="date ml-auto">
        <fa icon="calendar-alt"></fa>
        {{ formattedDate }}
      </div>
      <fa class="ml-4" icon="times-circle" @click="$emit('close')"></fa>
    </div>
    <div v-if="input.result" class="d-flex align-items-center mb-3">
      <Result :result="input.result" v-if="input.result" class="ml-3"/>
      <fa icon="times" @click="unlink()" class="ml-3"></fa>
    </div>
    <div class="btn btn-default mb-2 mr-auto ml-3" 
      @click="selectResult()" v-if="!linking">
      <span v-if="input.result">Change <fa icon="pencil-alt"></fa></span>
      <span v-else>Link a result <fa icon="plus"></fa></span>
    </div>
    <span v-else>
      <div class="results-search-header pl-2 py-1 row mx-auto">
        <div>Your Recent Results</div>
        <div class="ml-auto mr-2 close-results" @click="linking = false"> 
          Close
        </div>
      </div>
      <div class="results-search mb-3 p-3">
        <div v-for="result in yourResults" class="d-flex align-items-center mb-1">
          
          <div class="btn btn-outline-primary btn-small mr-2" 
            @click="linkResult(result)">
            Link <fa icon="link"></fa>
          </div>

          <Result :result="result" />

        </div>
      </div>
    </span>
    <div class="px-3 pb-3 mt-1">
      <textarea 
        v-model="input.body" 
        class="form-control mb-3" 
        placeholder="Share your story" 
      />
      <div class="btn btn-primary" @click="createPost()"> Create </div>
    </div>
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
        date: date, 
        result: null
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
        this.$emit('loadFeed')
        this.$emit('createdPost')
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
    }, 
    unlink: function(result) {
      this.input.result = null
      this.input.result_id = ""
    }
  }
}
</script>