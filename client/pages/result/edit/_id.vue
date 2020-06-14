<style lang="less" scoped> 
@import (reference) "~assets/less/colors.less";
.id {
  color: @medium-grey;
}

.panel-title {
  font-weight: 600;
}

.back {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
}
</style>

<template>
<div class="container-fluid">
  <div class="mt-3 pl-2 back"> 
    <nuxt-link :to="'/races/' + input.race_id + '/' + input.event_id" class="mr-4"> 
      <fa icon="arrow-left" class="mr-1"/> Back to results
    </nuxt-link>
    <nuxt-link :to="'/result/history/' + input._id"> 
      <fa icon="book-open" class="mr-1"/> Revision History 
    </nuxt-link>
  </div>
  <div class="row">
    <form 
      class="card col-lg-6 col-md-10 ml-lg-3 mx-md-auto mx-sm-auto mt-3 px-0" 
      @submit.prevent="updateResult()"
    >
      <div class="card-body pb-0">
        <div class="d-flex"> 
          <h5 class="panel-title mb-3"> Edit Result </h5>
          <div class="ml-auto id"> {{ input._id }} </div>
        </div>

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

        <div class="d-flex align-items-center mt-4"> 

          <input 
            v-if="!saved"
            class="btn btn-primary" 
            type="submit" 
            value="Update" 
          />
          <button
            v-else
            class="btn btn-primary"
          >
            Saved <fa :icon="['fas', 'check']" class="ml-1"/>
          </button>

          <div class="d-flex align-items-center ml-auto" v-if="confirm"> 
            <button @click="deleteResult()" class="btn btn-danger mr-2"> 
              Confirm <fa icon="check" class="ml-1" />
            </button>
            <button @click="confirm=false" class="btn btn-primary"> 
              Cancel <fa icon="times" class="ml-1" />
            </button>
          </div>

          <button v-else
            class="btn btn-danger ml-auto"
            @click="confirm=true"
          >
            Delete <fa :icon="['fas', 'trash']" class="ml-1"/>
          </button>

        </div>

        <p>
          <div class="alert alert-success" role="alert" v-if="success">{{ success }}</div>
          <div class="alert alert-danger" role="alert" v-if="failure">{{ failure }}</div>
        </p>

      </div>
    </form>
  </div>
</div>
</template>

<script> 
const ResultEditor = () => import('~/components/Results/ResultEditor')
export default {
    async asyncData ({ params, $axios }) {
        let result = await $axios.$get('result/' + params.id);
        return {
            input: { ...result },
            original: { ...result },
            failure: false, 
            success: false,
            confirm: false
        }
    },
    methods: {
      updateResult: function() {
        this.$axios.$put('result/' + this.input._id, this.input)
        .then((res) => {
          this.success = "Successfully updated result.";
        }).catch((err) => {
          this.failure = err.response.data;
        });
      }, 
      deleteResult: async function() {
        await this.$axios.delete('result/' + this.input._id);
        this.$router.push({ path: '/races/' + this.input.race_id + '/' + this.input.event_id });
      }
    }, 
    computed: {
      saved: function() {
        for (var key of Object.keys(this.original)) {
          if (this.original[key] != this.input[key]) return false;
        }
        return true;
      }
    }
}
</script>