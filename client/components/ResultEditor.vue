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
    class="card w-100 mt-3" 
    v-if="addMode || editMode" 
    @submit.prevent="addMode ? addResult() : updateResult()"
  >
  <div class="card-body">

    <span class="close" @click="$emit('closeWindow')">
      <fa :icon="['far', 'times-circle']"></fa>
    </span>
    
    <h5 class="panel-title mb-3">
      <span v-if="addMode">Add Result</span>
      <span v-if="editMode">Edit Result</span>
    </h5>

    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="athleteInput"> Athlete* </label> 
      <div class="col-sm-9">
        <input 
          type="text"
          v-model="input.athlete" 
          placeholder="Name" 
          class="form-control" 
          required 
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="athleteIDInput"> Athlete ID* </label> 
      <div class="col-sm-9">
        <input 
          pattern="^\S*$" 
          type="text"
          v-model="input.athlete_id"
          placeholder="Athlete ID (no spaces)" 
          class="form-control" 
          required
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="eventInput"> Event* </label> 
      <div class="col-sm-9">
        <input 
          type="text"
          v-model="input.event" 
          placeholder="5k Heat 1, 10k Invitational..." 
          class="form-control" 
          required
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="timeInput"> Finishing Time* </label> 
      <div class="col-sm-9">
        <input 
          type="text" 
          v-model="input.time" 
          placeholder="Time" 
          class="form-control" 
          required
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="timeInput"> Team </label> 
      <div class="col-sm-9">
        <input 
          type="text" 
          v-model="input.team" 
          placeholder="Team" 
          class="form-control"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="timeInput"> Team ID </label> 
      <div class="col-sm-9">
        <input 
          type="text"
          v-model="input.team_id" 
          placeholder="Team ID" 
          class="form-control"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="placeInput"> Place* </label> 
      <div class="col-sm-9">
        <input 
          type="number" 
          v-model="input.place" 
          placeholder="Place" 
          class="form-control"
          required
        />
      </div>
    </div>

    <div>
      <label class="form-check-label mb-3">
        <input 
          v-model="input.womens" 
          :value="true" 
          type="radio"
        /> Women's &nbsp; 

        <input 
          v-model="input.womens" 
          :value="false" 
          type="radio"
        /> Men's
      </label>
    </div>

    <div class="btn-group-wrap">
      <div class="btn-group">
        <input 
          class="btn btn-primary" 
          type="submit" 
          :value="addMode ? 'Create' : 'Update'" 
        />
        <a class="btn btn-danger" @click="deleteResult()" v-if="editMode">Delete</a>
      </div>
    </div>
    <p>
      <div class="alert alert-success" role="alert" v-if="success">{{ success }}</div>
      <div class="alert alert-danger" role="alert" v-if="failure">{{ failure }}</div>
    </p>

    </div>
  </div>

  </div>
</form>
</template>

<script>
export default {
  props: ['addMode', 'editMode', 'race', 'currentResult'],
  data () {
    return {
      success: "",
      failure: "", 
      input: {
        athlete: "",
        athlete_id: "",
        event: "",
        time: "",
        team: "",
        team_id: "",
        place: "",
        verified: false,
        womens: false,
        race: this.race.name,
        race_id: this.race._id,
        date: this.race.date,
        user: this.$store.state.auth.user.name, 
        user_id: this.$store.state.auth.user._id,
      }
    }
  },
  watch: { 
    currentResult: function(newVal, oldVal) { 
      this.input = newVal
    }
  },
  methods : {
    addResult: function() {

      this.input.race = this.race.name; 
      this.input.race_id = this.race._id; 
      this.input.date = this.race.date;
      this.input.user = this.$store.state.auth.user.name,
      this.input.user_id = this.$store.state.auth.user._id

      this.$axios.$post('result', this.input)
      .then((res) => {
        this.$emit('loadResults')
        this.success = "Successfully added result."
      }).catch((err) => {
        console.log(err)
        this.success = "Unauthorized."
      })
    }, 
    updateResult: function() {
      this.$axios.$put('result/' + this.input._id, this.input)
      .then((res) => {
        this.success = "Successfully updated result."
      })
    }, 
    deleteResult: function(id) {
      this.$axios.$delete('result/' + this.input._id)
      .then((res) => {
        this.$emit('loadResults')
        this.$emit('closeWindow')
      })
    }
  }
}
</script>