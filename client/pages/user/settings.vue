<style lang="less" scoped>

.fa-cog {
  color: #333;
  font-size: 20px;
  margin-bottom: 1px;
  margin-right: 5px;
}

.fa-times {
  cursor: pointer;
}

.pic-name {
  font-size: 12px;
  text-align: center;
}

.pictures {
  width: 90%;
}

.claim {
  display: inline-block;
  width: 270px;
  .btn.btn-primary {
    margin-top: 0px;
  }
}

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
  width: 81px;
  height: 81px;
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

.settings-section {
  margin-top: 20px;

  .btn {
    font-size: 15px;
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
  .alert {
    width: 270px;
    padding: 8px 12px;
  }
  .athlete-id {
    .btn {
      margin-top: -9.5px;
    }
  }
}

form {
  input {
    font-size: 14px;
  }
}

@media screen and (max-width: 767px) {
  .claim, .alert {
    margin: 0 auto;
    width: 90%;
    margin-top: 10px;
  }

  .danger-zone {
    margin-bottom: 50px;
  }
}

</style>

<template>
<div>
  <div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5">
  <h1 class="mt-4"> 
    <fa icon="cog"></fa> Settings 
  </h1>

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
          <div class="col-6 align-items-center align-content-center d-flex flex-wrap">
            <img 
              v-if="user.profilePicUrl" 
              :src="user.profilePicUrl" 
              class="profile-pic" 
            />
            <img 
              v-if="!user.profilePicUrl" 
              src="/images/default.png" 
              class="profile-pic" 
            />
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

  <div class="settings-section">
    <div class="settings-label">Email</div>
    <div class="tag">{{ user.email }}</div>
  </div>

  <div class="settings-section">
    <div class="settings-label">Athlete ID</div>
    <span class="athlete-id" v-if="user.athlete_id">
      <div class="tag"> <fa icon="user"></fa> &nbsp; {{ user.athlete_id }}</div>
      <button class="btn btn-primary" @click="unclaim(user.athlete_id)" v-if="user.athlete_id">
        Unclaim
      </button>
    </span>
    <form 
      class="claim mb-2" 
      v-if="!user.athlete_id" 
      @submit.prevent="claim(claimInput)">
      <div class="input-group">
        <input v-model="claimInput" pattern="^\S*$" type="text" id="athleteIDInput" 
                placeholder="Athlete ID (no spaces)" class="form-control" required></input>
        <span class="input-group-append">
          <input class="btn btn-primary" value="Claim" type="submit">
        </span>
      </div>
    </form>

    <div class="alert alert-success" v-if="claimSuccess"> 
      {{ claimSuccess }} 
    </div>
    <div class="alert alert-danger" v-if="claimFailure"> 
      {{ claimFailure }}
    </div>
  </div>

  <div class="settings-section">
    <div class="settings-label">Aliases <fa icon="user-plus"></fa></div>
    <div class="aliases">
      <div v-for="alias in user.aliases" 
        v-if="user.aliases.length > 0"
        class="alias tag mr-2">
        {{ alias }} &nbsp;
        <a @click="removeAlias(alias)">
          <fa icon="times"></fa>
        </a>
      </div>
    </div>
    <form 
      class="claim mb-2" 
      @submit.prevent="addAlias()">
      <div class="input-group">
        <input v-model="aliasInput" pattern="^\S*$" type="text" id="athleteIDInput" 
          placeholder="Alias Athlete ID (no spaces)" class="form-control" required></input>
        <span class="input-group-append">
          <input class="btn btn-primary" value="Claim" type="submit">
        </span>
      </div>
    </form>

    <div class="alert alert-success" v-if="aliasSuccess"> 
      {{ aliasSuccess }} 
    </div>
    <div class="alert alert-danger" v-if="aliasFailure"> 
      {{ aliasFailure }}
    </div>
  </div>

  <div class="settings-section danger-zone pb-4">
    <div class="settings-label">Danger Zone</div>
    <button class="btn btn-danger" @click="makeSure = true" v-if="!makeSure">
      Delete your account <fa icon="trash-alt"></fa>
    </button>

    <div class="alert alert-info make-sure" v-if="makeSure">
      Are you sure? This cannot be undone.
    </div>

    <button class="btn btn-default make-sure" @click="makeSure = false" v-if="makeSure">
      No
    </button>

    <button class="btn btn-danger make-sure" @click="deleteAccount" v-if="makeSure">
      Yes, delete my account
    </button>

    <div class="alert alert-success" v-if="deleteSuccess"> 
      {{ deleteSuccess }} 
    </div>
  </div>
    
  </div>
  
</div>
</template>
<script>

export default {
  data () {
    return {
      id: "", 
      aliasInput: "",
      claimInput: "",
      aliases: [],
      claimFailure: "",
      claimSuccess: "",
      aliasSuccess: "", 
      aliasFailure: "",
      deleteSuccess: "", 
      makeSure: false,
      profilePic: null,
      brandPic: null,
      featuredPic: null, 
      message: "", 
      imageMessage: ""
    }
  },
  head () {
    return {
      title: "Settings - RaceBase"
    }
  },
  middleware: 'auth',
  asyncData ({ store }) {
    let user = { ...store.state.auth.user }
    return {
      user: user, 
      id: user._id
    }
  },
  methods : {
    loadUser: async function() {
      await this.$store.dispatch('auth/fetchUser')
      this.user = { ...this.$store.state.auth.user }
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
      })
    },
    removeAlias: function(alias) {
      this.$axios.$delete('user/' + this.id + '/alias/' + alias)
      .then((res) => {
        this.aliasSuccess = null
        this.aliasFailure = null
        this.loadUser()
      }); 
    },
    claim: function(athlete_id) {
      this.$axios.$post('user/claim/' + this.id + '/' + athlete_id)
      .then((res) => {
        this.claimFailure = ""
        this.claimSuccess = ""
        if (res.failure) {
          this.claimSuccess = null
          this.claimFailure = res.failure
        }
        else if (res.success) {
          this.claimFailure = null
          this.claimSuccess = res.success
          this.$set(this.user, 'athlete_id', athlete_id)
        }
      })
    },
    unclaim: function(athlete_id) {
      this.$axios.$post('user/unclaim/' + this.id + '/' + athlete_id)
      .then((res) => {
        this.claimFailure = ""
        this.claimSuccess = ""
        if (res.failure) {
          this.claimFailure = res.failure
          this.claimSuccess = null
        }
        else if (res.success) {
          this.claimSuccess = res.success
          this.claimFailure = null
          this.$set(this.user, 'athlete_id', '')
        }
      })
    },
    deleteAccount: async function() {
      await this.$axios.$delete('user/' + this.id)
      await this.$store.dispatch('auth/logout')
    }, 
    updateProfile: function() {
      this.$axios.$put('user/' + this.id, this.user)
      .then((res) => {
        this.message = "Profile updated."
        this.loadUser()
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
      })
    },
    uploadBrandPic: function() {
      const formData = new FormData()
      formData.append('image', this.brandPic)
      this.$axios.$post('user/' + this.user._id + '/brand_pic', formData)
      .then((res) => {
        this.imageMessage = "Profile updated."
        this.loadUser()
      })
    },
    uploadFeaturedPic: function() {
      const formData = new FormData()
      formData.append('image', this.featuredPic)
      this.$axios.$post('user/' + this.user._id + '/featured_pic', formData)
      .then((res) => {
        this.imageMessage = "Profile updated."
        this.loadUser()
      })
    }
  }
}; 

</script>