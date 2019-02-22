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

.auto-width-input {
  width: auto;
  display: inline;
  flex: none;
  background: white;
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

  <div class="settings-section mt-4">
    <div class="settings-label">Referral Code</div>
    <div class="mb-2">
      Refer 5 friends with this code and get a free RaceBase tee shirt!
    </div>
    <div class="input-group">
      <input class="auto-width-input form-control" id="copy" :value="user.referralCode" readonly />
      <span class="input-group-append">
        <div class="btn btn-outline-dark" @click="addToClipboard">
          <fa icon="clipboard"></fa> 
        </div>
      </span>
    </div>
    <div class="mt-2"> 
      <strong> 
        You have {{ referrals || 0 }} referral<span v-if="referrals != 1">s</span>. 
      </strong> 
    </div>
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

  <div class="settings-section">
    <div class="settings-label">Email</div>

    <div>
      <div class="input-group mb-2">
        <input v-model="user.email" type="email" 
          placeholder="Change your email..." class="form-control auto-width-input">
        </input>

        <span class="input-group-append">
          <div class="btn btn-outline-dark" @click="updateEmail">
            <fa :icon="user.email == currentEmail ? 'check' : 'save'"></fa>
          </div>
        </span>

      </div>
    </div>

    <div v-if="emailMessage">{{ emailMessage }}</div>

    <div v-if="!user.active">
      Please verify your email! 
      Click 
      <a href="#" @click="resendVerification">here</a> 
      to resend your verification email.
      <p v-if="resent"><strong>Sent.</strong></p>
    </div>
    <div v-else> Your email has been verified. </div>

  </div>

  <div class="settings-section">
    <div class="settings-label">Reset Password</div>
    <div>
      Click 
      <a href="#" @click="resetPassword">here</a> 
      to send a reset link to your email.
      <p v-if="sentReset"><strong>Sent.</strong></p>
    </div>
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

  <div class="settings-section" v-if="!user.coach">
    <div class="settings-label"> Team </div>
    <div class="d-flex flex-shrink w-50" v-if="!team"> 
      <input type="text" class="form-control mr-2" v-model="joinCode" placeholder="Join Code" /> 
      <div class="btn btn-primary" @click="joinTeam"> Join </div>
    </div>
    <div v-else> 
      Your team's id: {{ team.team_id }}
    </div>
  </div>

  <div class="settings-section" v-if="user.coach">
    <div class="settings-label"> Coaching </div>
    <div v-if="user.team_id" class="d-flex align-items-center">  
      <div> Your team: </div>
      <nuxt-link :to="'/team/' + user.team_id" class="ml-2">
        {{ user.team_id }}
      </nuxt-link>
      <div class="btn btn-outline-primary btn-small ml-3" @click="unclaimTeam">
        Unclaim
      </div>
    </div>
    <div v-else> 
      <nuxt-link to="/signup/coach/claim">Claim a team</nuxt-link>
    </div>
    <div class="mt-2" v-if="team"><strong>Join Code:</strong> {{ team.join_code }}</div>
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
const ProfilePic = () => import('~/components/User/ProfilePic')
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
      imageMessage: "", 
      joinCode: ""
    }
  },
  components: { ProfilePic },
  head () {
    return {
      title: "Settings - RaceBase"
    }
  },
  middleware: 'auth',
  async asyncData ({ store, $axios }) {
    let user = { ...store.state.auth.user }
    let team = null
    if (user.team_id && user.coach)
      team = await $axios.$get('/team/' + user.team_id)
    else if (user.team_id)
      team = await $axios.$get('/team/public/' + user.team_id)
    let currentEmail = user.email
    let referrals = (await $axios.$get('/user/referrals')).referrals
    return {
      user: user, 
      id: user._id, 
      resent: false, 
      sentReset: false,
      referrals: referrals, 
      currentEmail: currentEmail,
      emailMessage: "", 
      team: team
    }
  },
  methods : {
    loadUser: async function() {
      await this.$store.dispatch('auth/fetchUser')
      this.user = { ...this.$store.state.auth.user }
      this.currentEmail = this.user.email
    },
    joinTeam: async function() {
      let res = await this.$axios.$post('team/join/' + this.joinCode)
      console.log(res)
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
          this.loadUser()
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
          this.loadUser()
        }
      })
    },
    unclaimTeam: async function() {
      let res = await this.$axios.$post('/user/unclaim/team')
      console.log(res)
      this.loadUser()
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
    updateEmail: function() {
      this.$axios.$put('user/' + this.id + '/email/' + this.user.email)
      .then((res) => {
        this.emailMessage = res
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
    resendVerification: async function() {
      await this.$axios.post('user/resendVerification')
      this.resent = true
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
    }, 
    addToClipboard: function() {
      let copyText = document.querySelector("#copy")
      copyText.select()
      document.execCommand("copy")
      this.copied = true; 
    },
    resetPassword: async function() {
      await this.$axios.$post('/user/forgotPassword', {
        email: this.user.email
      })
      this.sentReset = true
    }
  }
}; 

</script>