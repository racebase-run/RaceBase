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
    <div class="btn btn-default mb-2 mr-auto">
      Link a result <fa icon="plus"></fa>
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
import moment from 'moment'
export default {
  props: ['close'],
  data () {
    let date = new Date()
    let formattedDate = moment(date).format('MMMM D YYYY')
    return {
      input: {
        title: "",
        body: "", 
        date: date
      }, 
      formattedDate: formattedDate
    }
  },
  methods: {
    createPost: function() {
      this.$axios.$post('/post/', this.input)
      .then((res) => {
        console.log(res); 
      })
    }
  }
}
</script>