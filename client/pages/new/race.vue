<style lang="less" scoped>
.group {
  margin-bottom: 16px;
  div {
    margin-bottom: 10px;
  }
}

.required {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
}
</style>

<template>
<div class="mx-auto w-95 mt-4">
  <form 
    class="w-100" 
    @submit.prevent="createRace()"
  >

      <h4 class="mb-2"> Create a Meet </h4>
      <div class="required mb-3"> * = required </div>

      <div class="group">
        <div> What's your meet called?* </div>
        <input 
          class="form-control" 
          placeholder="Race Name" 
          v-model="input.name" 
          type="text"
          required
        />
      </div>

      <div class="group">
        <div> Where was your meet?* </div>
        <input 
          class="form-control" 
          placeholder="Location" 
          v-model="input.location" 
          type="text"
          required
        />
      </div>

      <div class="group">
        <div> What day was the meet?* If it was more than one day long, you can use the first date. </div>
        <input 
          class="form-control" 
          pattern="^(0[1-9]|1[012]|\w*)(\s|[/])(0?[1-9]|[12][0-9]|3[01])(\s|[/])\d\d\d\d$" 
          placeholder="Month DD YYYY" 
          v-model="input.date" 
          type="text"
          required
        />
      </div>

      <div class="group">
        <div> Is there an official results site, or maybe live results? You can include a link to them here. </div>
        <input 
          class="form-control" 
          placeholder="http://race.url" 
          v-model="input.link" 
          type="text"
        />
      </div>

      <div class="group">
        <div> Do you have a CSV file containing meet results? If you do, upload it here. </div>
        <label class="btn btn-default">
          <span v-if="!fileChosen"> Choose File </span>
          <span v-if="fileChosen"> {{ fileChosen }} </span>
          <input 
            type="file" 
            class="file-input" 
            name="csvInput"
            @change="processFile($event)" 
            hidden
          />
        </label>
      </div>

      <input class="btn btn-primary" type="submit" value="Create"></input>

      <div class="mt-3">
        <div class="alert alert-success" role="alert" v-if="success">{{ success }}</div>
        <div class="alert alert-danger" role="alert" v-if="failure">{{ failure }}</div>
      </div>

      <div v-if="success" class="mb-5">
        <div> Click <nuxt-link :to="'/races/' + created._id">here</nuxt-link> to see your new meet </div>
        <div> Click <nuxt-link :to="'/new/result/' + created._id">here</nuxt-link> to add a result to your meet </div>
      </div>

  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      input: {
        name: "",
        location: "",
        link: "",
        date: "", 
        csv: "",
      },
      success: "",
      failure: "", 
      created: {}, 
      fileChosen: false
    }
  },
  methods : {
    createRace: function() {
      this.$axios.$post('race/', this.input)
      .then((res) => {
        if (res) {
          this.success = "Successfully created race."
          this.created = res
          this.$emit('load')
        }
      }).catch((err) => {
        console.log(err)
        this.success = err.response.data
      })
    },
    processFile: function(event) {
      this.fileChosen = event.target.files[0].name
      var reader = new FileReader()
      let page = this
      reader.onload = function(e) {
        var text = reader.result
        var lines = text.split('\n')
        lines[0] = lines[0].toLowerCase().replace(/\s+/g, '_')
        var formatted = lines.join('\n')
        page.input.csv = formatted
      }

      reader.readAsText(event.target.files[0]);
    }
  }
}
</script>