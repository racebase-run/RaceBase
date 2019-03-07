<style lang="less" scoped> 
@import (reference) '~assets/less/colors.less';
.profile {
  .input-group-text {
    font-size: 14px;
    img {
      opacity: .7;
      width: 25px;
    }
  }
}

.profile-pic {
  border-radius: 7px;
  overflow: hidden;
  display: inline-block;
  @size: 80px;
  width: @size; height: @size;
}

.profile-pic, .brand-pic, .featured-pic {
  margin: 0 auto;
}

.featured-pic {
  width: 100px;
  border-radius: 5px;
}

.card {
  .btn {
    display: table;
    margin: 0 auto;
  }
  .settings-label {
    text-align: center;
  }
}

.settings-label {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 10px;
}

.tag {
  font-size: 14px;
  vertical-align: middle;
  border-radius: 4px; 
  border: 1px solid #cccccc;
  padding: 6px 12px;
  display: inline-block;
  white-space: nowrap;
  margin-bottom: 9px;
}

.claim {
  display: inline-block;
  width: 270px;
  .btn.btn-primary {
    margin-top: 0px;
  }
}

.claim-prompt {
  font-size: 20px; 
  text-align: center;
  color: @medium-grey;
  .btn {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>

<template>
<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">

  <h1 class="mt-4"> 
    <fa icon="cogs"></fa> Profile 
  </h1>

  <SettingsNav :coach="user.coach"/>

  <div v-if="!user.athlete_id" class="claim-prompt my-4"> 
    <div> To get started with your profile... </div>
    <nuxt-link to="/signup/claim" class="btn btn-primary mt-3">Claim your Athlete ID</nuxt-link>
  </div>

  <div class="settings-section" v-if="user.athlete_id">
    <div class="settings-label">Athlete ID</div>
    <div class="athlete-id d-flex align-items-center mb-3" v-if="user.athlete_id">
      <div class="tag mb-0 mr-2"> <fa icon="user"></fa> &nbsp; {{ user.athlete_id }}</div>
      <button class="btn btn-primary" @click="unclaim(user.athlete_id)" v-if="user.athlete_id">
        Unclaim
      </button>
    </div>
  </div>

  <div class="settings-section mb-4" v-if="user.athlete_id">
    <div class="settings-label">Logs</div>
    <div>
      <label class="form-check-label mb-3">
        <input 
          v-model="publicLogs" 
          :value="true" 
          type="radio"
        /> Public <fa icon="globe-americas"></fa>&nbsp; 
        <input 
          v-model="publicLogs" 
          :value="false" 
          type="radio"
        /> Private <fa icon="lock"></fa>
      </label>
    </div>
    <div class="btn btn-primary btn-small" @click="changeLogType">Save</div>
  </div>

   <div class="settings-section" v-if="user.athlete_id">
    <div class="settings-label">Profile</div>
    <form class="profile mb-4 w-md-75 w-100" @submit.prevent="updateProfile()">
      <div class="row mb-3">

        <div class="col-md-6 col-12 mb-md-0 mb-3">
          <div class="input-group">
            <input 
              placeholder="Current Trainer" 
              class="form-control"
              v-model="user.trainer"
            />
            <div class="input-group-append"> 
              <span class="input-group-text"> 
                <img class="shoe mr-1" src="/images/trainer.svg"/> 
              </span>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 col-12">
          <div class="input-group">
            <input 
              placeholder="Current Racer" 
              class="form-control"
              v-model="user.racer"
            />
            <div class="input-group-append"> 
              <span class="input-group-text"> 
                <img class="shoe mr-1" src="/images/racer.svg"/> 
              </span>
            </div>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-md-6 col-12 mb-md-0 mb-3">
          <div class="input-group">
            <input 
              placeholder="Weekly Mileage" 
              class="form-control"
              v-model="user.mileage"
            />
            <div class="input-group-append"> 
              <span class="input-group-text"> miles per week </span>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12">
          <div class="input-group">
            <input 
              placeholder="Location" 
              class="form-control"
              v-model="user.location"
            />
            <div class="input-group-append"> 
              <span class="input-group-text">
                <fa icon="map-marker-alt" class="mr-1"></fa>
              </span>
            </div>
          </div>
        </div>
  
      </div>

      <div class="row mt-3">
        <div class="col-md-6 col-12 mb-md-0 mb-3">
          <input 
            placeholder="Strava URL" 
            class="form-control"
            v-model="user.stravaUrl"
          />
        </div>
      </div>

      <input type="submit" class="btn btn-primary mt-3" value="Update">

      <div class="mt-3" v-if="message"> {{ message }} </div>

    </form>
  </div>

  <div class=
    "settings-section pictures 
    row 
    mt-3 
    w-100 w-md-auto" 
  v-if="user.athlete_id">

    <div class="col-md-4 col-12 mb-md-0 mb-3">
      <div class="settings-section card p-3 mt-0">
        <div class="settings-label mb-3"> Profile Picture </div>
        <div class="row">
          <div class="profile-pic">
            <ProfilePic :url="user.profilePicUrl" />
          </div>
          <div class="col-6">
            <div>
              <label class="mb-2 btn btn-default">
                Browse
                <input type='file' name='image' @change="onProfilePicChanged" hidden/>
              </label>
            </div>
            <div>
              <button @click="uploadProfilePic" class="btn btn-primary"> Upload </button>
            </div>
          </div>
        </div>
        <span v-if="profilePic" class="pic-name mt-3"> {{ profilePic.name }} </span>
      </div>
    </div>

    <div class="col-md-4 col-12 mb-md-0 mb-3">
      <div class="settings-section card p-3 mt-0">

        <div class="settings-label mb-3"> Brand / Team Logo </div>

        <div class="row">
          <div class="col-6 align-items-center align-content-center d-flex">
            <img 
              v-if="user.brandPicUrl" 
              :src="user.brandPicUrl" 
              class="brand-pic mb-2" 
            />
          </div>
          <div class="col-6">
            <div>
              <label class="mb-2 mx-auto btn btn-default">
                Browse
                <input type='file' name='image' @change="onBrandPicChanged" hidden/>
              </label>
            </div>
            <div>
              <button @click="uploadBrandPic" class="btn btn-primary"> Upload </button>
            </div>
          </div>
        </div>

        <span v-if="brandPic" class="pic-name"> {{ brandPic.name }} </span>

      </div>
    </div>

    <div class="col-md-4 col-12 mb-md-0 mb-3">

      <div class="settings-section card p-3 pb-md-3 mt-0">

        <div class="settings-label mb-3"> Featured Image </div>

        <div class="row">
          <div class="col-6 align-items-center align-content-center d-flex">
            <img 
              v-if="user.featuredPicUrl" 
              :src="user.featuredPicUrl" 
              class="featured-pic mb-2" 
            />
          </div>
          <div class="col-6">
            <div>
              <label class="mb-2 mx-auto btn btn-default">
                Browse
                <input type='file' name='image' @change="onFeaturedPicChanged" hidden/>
              </label>
            </div>
            <div>
              <button @click="uploadFeaturedPic" class="btn btn-primary"> Upload </button>
            </div>
          </div>
        </div>

        <span v-if="featuredPic" class="pic-name"> {{ featuredPic.name }} </span>

      </div>
    </div>

    <div class="mt-3 pl-3" v-if="imageMessage">
      <strong> {{ imageMessage }} </strong>
    </div>

  </div>

</div>
</template>

<script> 
const ProfilePic = () => import('~/components/User/ProfilePic')
const SettingsNav = () => import('~/components/Settings/SettingsNav')

export default {
  data () {
    return {
      id: "", 
      claimInput: "",
      claimFailure: "",
      claimSuccess: "",
      aliasSuccess: "", 
      aliasFailure: "",
      aliasInput: "",
      aliases: [],
      profilePic: null,
      brandPic: null,
      featuredPic: null, 
      message: "",
      imageMessage: "" 
    }
  },
  async asyncData ({ store, $axios }) {
    let user = { ...store.state.auth.user }

    return {
      user: user, 
      id: user._id, 
      publicLogs: user.publicLogs
    }
  },
  components: { ProfilePic, SettingsNav }, 
  methods: {
    loadUser: async function() {
      await this.$store.dispatch('auth/fetchUser')
      this.user = { ...this.$store.state.auth.user }
      this.currentEmail = this.user.email
    },
    addAlias: function() {
      this.$axios.$post('user/' + this.id + '/alias/' + this.aliasInput)
      .then((res) => {
        if (res.failure) {
          this.aliasSuccess = null
          this.aliasFailure = res.failure
        } else if (res.success) {
          this.aliasFailure = null
          this.aliasSuccess = res.success
          this.loadUser()
        }
      }).catch((err) => {
        this.aliasFailure = err.response.data
        this.aliasSuccess = null
      })
    },
    removeAlias: function(alias) {
      this.$axios.$delete('user/' + this.id + '/alias/' + alias)
      .then((res) => {
        this.aliasSuccess = null
        this.aliasFailure = null
        this.loadUser()
      }).catch((err) => {
        this.aliasFailure = err.response.data
        this.aliasSuccess = null
      })
    },
    unclaim: function(athlete_id) {
      this.$axios.$post('user/unclaim/athlete')
      .then((res) => {
        this.claimSuccess = res.success
        this.claimFailure = null
        this.loadUser()
      }).catch((err) => {
        console.log(err)
        this.claimFailure = err.response.data
        this.claimSuccess = null
      })
    },
    updateProfile: function() {
      this.$axios.$put('user/' + this.id, this.user)
      .then((res) => {
        this.message = "Profile updated."
        this.loadUser()
      }).catch((err) => {
        this.message = err.response.data
      })
    }, 
    onProfilePicChanged: function(e) {
      this.profilePic = e.target.files[0]
    },
    onBrandPicChanged: function(e) {
      this.brandPic = e.target.files[0]
    },
    onFeaturedPicChanged: function(e) {
      this.featuredPic = e.target.files[0]
    },
    uploadProfilePic: function() {
      const formData = new FormData()
      formData.append('image', this.profilePic)
      this.$axios.$post('user/' + this.user._id + '/profile_pic', formData)
      .then((res) => {
        this.imageMessage = "Profile updated."
        this.loadUser()
      }).catch((err) => {
        console.log(err)
        this.imageMessage = err.response.data
      })
    }, 
    uploadBrandPic: function() {
      const formData = new FormData()
      formData.append('image', this.brandPic)
      this.$axios.$post('user/' + this.user._id + '/brand_pic', formData)
      .then((res) => {
        this.imageMessage = "Profile updated."
        this.loadUser()
      }).catch((err) => {
        console.log(err)
        this.imageMessage = err.response.data
      })
    },
    uploadFeaturedPic: function() {
      const formData = new FormData()
      formData.append('image', this.featuredPic)
      this.$axios.$post('user/' + this.user._id + '/featured_pic', formData)
      .then((res) => {
        this.imageMessage = "Profile updated."
        this.loadUser()
      }).catch((err) => {
        console.log(err)
        this.imageMessage = err.response.data
      })
    }, 
    changeLogType: function() {
      console.log(this.publicLogs)
      this.$axios.$put('user/' + this.id, { publicLogs: this.publicLogs })
      .then((res) => {
        this.loadUser()
      }).catch((err) => {
        console.log(err)
        this.emailMessage = err.response.data
      })
    }
  }
}
</script>