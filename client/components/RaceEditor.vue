<style lang="less" scoped>

a.btn-danger {
    color: white;
}

.card {
  @media (min-width: 992px) { 
    width: 75% !important;
  }
}

</style>

<template>
<form 
  class="card w-100" 
  v-if="editingRace || addingRace" 
  @submit.prevent="editingRace ? updateRace() : createRace()"
>
  <div class="card-body">
    
    <span class="close" @click="closeWindow()">
      <fa :icon="['far', 'times-circle']"></fa>
    </span>

    <h5 class="card-title mb-3">
      <span v-if="addingRace"> Add Race </span>
      <span v-if="editingRace"> Edit Race </span>
    </h5>

    <div class="form-group row">
      <label class="col-3 col-form-label" for="nameInput"> Race Name* </label> 
      <div class="col-sm-9">
        <input 
          class="form-control" 
          placeholder="Race Name" 
          v-model="input.name" 
          type="text"
          required
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="locationInput"> Location* </label>
      <div class="col-sm-9"> 
        <input 
          class="form-control" 
          placeholder="Location" 
          v-model="input.location" 
          type="text"
          required
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="dateInput"> Date* </label>
      <div class="col-sm-9">
        <input 
          class="form-control" 
          pattern="^(0[1-9]|1[012]|\w*)(\s|[/])(0?[1-9]|[12][0-9]|3[01])(\s|[/])\d\d\d\d$" 
          placeholder="Month DD YYYY" 
          v-model="input.date" 
          type="text"
          required
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="linkInput"> Link </label>
      <div class="col-sm-9"> 
        <input 
          class="form-control" 
          placeholder="http://race.url" 
          v-model="input.link" 
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="linkInput"> CSV File </label>
      <div class="col-sm-9"> 
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
    </div>
    <div class="btn-group-wrap">
      <div class="btn-group panel-buttons">
          <input class="btn btn-primary" type="submit" :value="editingRace ? 'Update' : 'Create'"></input>
          <a class="btn btn-danger" v-if="editingRace" @click="deleteRace">
            Delete 
            <fa :icon="['far', 'trash-alt']"></fa>
          </a>
      </div>
    </div>
    <div class="mt-3">
      <div class="alert alert-success" role="alert" v-if="success">{{ success }}</div>
      <div class="alert alert-danger" role="alert" v-if="failure">{{ failure }}</div>
      <span v-if="success && addingRace">
        Click <nuxt-link :to="createdLink">here</nuxt-link> to visit your new race.
      </span>
    </div>

  </div>
</form>
</template>

<script>
export default {
  props: ['editingRace', 'addingRace', 'race', 'load'],
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
      createdLink: "", 
      fileChosen: false
    }
  },
  watch: { 
    race: function(newVal, oldVal) { 
      this.input = newVal
    }
  },
  created () {
    this.input = this.race || {}
  },
  methods : {
    createRace: function() {
      this.$axios.$post('race/', this.input)
      .then((res) => {
        if (res) {
          this.success = "Successfully created race."
          this.createdLink = "/races/" + res.race._id
          this.$emit('load')
        }
      })
    },
    updateRace: function() {
      let csvUpdated = false
      if (this.input.csv)
        csvUpdated = true
      this.$axios.$put('race/' + this.race._id, this.input)
      .then((res) => {
        if (res) {
          this.success = "Successfully updated race."
          this.$emit('load', csvUpdated)
        }
      })
    },
    closeWindow: function() {
      this.success = ""
      this.failure = ""
      this.$emit('closeWindow')
    },
    deleteRace: function() {
      this.$axios.$delete('race/' + this.race._id)
      .then((res) => {
        this.$router.push("/user/content")
        this.closeWindow()
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