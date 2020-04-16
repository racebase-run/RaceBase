<template>
<div>
  <form 
    class="card w-100 mt-3" 
    @submit.prevent="updateResult()"
  >
    <div class="card-body">
      <h5 class="panel-title mb-3"> Edit Result </h5>

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

      <input 
        class="btn btn-primary" 
        type="submit" 
        value="Update" 
      />

      <p>
        <div class="alert alert-success" role="alert" v-if="success">{{ success }}</div>
        <div class="alert alert-danger" role="alert" v-if="failure">{{ failure }}</div>
      </p>

    </div>
  </form>
</div>
</template>

<script> 
const ResultEditor = () => import('~/components/ResultEditor')
export default {
    async asyncData ({ params, $axios }) {
        let result = await $axios.$get('result/' + params.id)
        return {
            input: { ...result },
            failure: false, 
            success: false
        }
    },
    methods: {
      updateResult: function() {
        this.$axios.$put('result/' + this.input._id, this.input)
        .then((res) => {
          this.success = "Successfully updated result.";
        }).catch((err) => {
          console.log(err);
          this.failure = err.response.data;
        });
      }
    }
}
</script>