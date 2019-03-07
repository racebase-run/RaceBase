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
    <fa icon="cogs"></fa> Settings 
  </h1>

  <SettingsNav :coach="user.coach"/>

  <div class="settings-section">
    <div class="settings-label">Email</div>

    <div>
      <form class="input-group mb-2 w-50" @submit.prevent="updateEmail">
        <input v-model="user.email" type="email" 
          placeholder="Change your email..." class="form-control" />

        <span class="input-group-append">
          <button type="submit" class="btn btn-outline-dark">
            <fa :icon="user.email == currentEmail ? 'check' : 'save'"></fa>
          </button>
        </span>

      </form>
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

  <div class="settings-section mt-4">
    <div class="settings-label">Referral Code</div>
    <div class="mb-2">
      Refer 5 friends with this code and get a free RaceBase tee shirt!
    </div>
    <div class="input-group w-50">
      <input class="form-control" id="copy" :value="user.referralCode" readonly />
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

  <div class="settings-section">
    <div class="settings-label"> Account Type </div>
    <div>
      <label class="form-check-label mb-3">
        <input 
          v-model="coachAccount" 
          :value="true" 
          type="radio"
        /> Coach &nbsp; 
        <input 
          v-model="coachAccount" 
          :value="false" 
          type="radio"
        /> Athlete
      </label>
    </div>
    <div class="btn btn-primary btn-small" @click="changeAccountType">Save</div>
  </div>

  <div class="settings-section" v-if="!user.coach">
    <div class="settings-label"> Team </div>
    <div class="d-flex flex-shrink w-50" v-if="!user.team_id"> 
      <input type="text" class="form-control mr-2" v-model="joinCode" placeholder="Join Code" /> 
      <div class="btn btn-primary" @click="joinTeam"> Join </div>
    </div>
    <div class="d-flex align-items-center" v-else>
      <div class="tag mr-2 mb-0"> 
        {{ user.team_id }}
      </div>
      <div class="btn btn-primary" @click="leaveTeam">
        Leave
      </div>
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
const ProfilePic = () => import('~/components/User/ProfilePic')
const SettingsNav = () => import('~/components/Settings/SettingsNav')

export default {
  data () {
    return {
      id: "", 
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
  components: { ProfilePic, SettingsNav },
  head () {
    return {
      title: "Settings - RaceBase"
    }
  },
  middleware: 'auth',
  async asyncData ({ store, $axios }) {
    let user = { ...store.state.auth.user }
    let team = null
    try {
      if (user.team_id && user.coach)
        team = await $axios.$get('/team/' + user.team_id)
      else if (user.team_id)
        team = await $axios.$get('/team/public/' + user.team_id)   
    } catch (e) { 
      console.log(e)
    }

    let currentEmail = user.email
    let referrals = 0
    try {
      referrals = (await $axios.$get('/user/referrals')).referrals
    } catch (e) { console.log(e.response.data) }

    return {
      user: user, 
      id: user._id, 
      resent: false, 
      sentReset: false,
      referrals: referrals, 
      currentEmail: currentEmail,
      emailMessage: "", 
      team: team, 
      coachAccount: user.coach 
    }
  },
  methods : {
    loadUser: async function() {
      await this.$store.dispatch('auth/fetchUser')
      this.user = { ...this.$store.state.auth.user }
      this.currentEmail = this.user.email
    },
    joinTeam: async function() {
      try {
        let res = await this.$axios.$post('team/join/' + this.joinCode)
      } catch (e) {
        console.log(e.response.data)
      }
      this.loadUser()
    },
    leaveTeam: async function() {
      try { await this.$axios.$post('team/leave') }
      catch (e) { console.log(e.response.data) }
      this.loadUser()
    },
    deleteAccount: async function() {
      await this.$axios.$delete('user/' + this.id)
      await this.$store.dispatch('auth/logout')
    }, 
    updateEmail: function() {
      this.$axios.$put('user/email/' + this.user.email)
      .then((res) => {
        this.emailMessage = res
        this.loadUser()
      }).catch((err) => {
        console.log(err)
        this.emailMessage = err.response.data
      })
    }, 
    changeAccountType: function() {
      this.$axios.$put('user/coach', { coach: this.coachAccount })
      .then((res) => {
        this.loadUser()
      }).catch((err) => {
        console.log(err)
      })
    },
    resendVerification: async function() {
      await this.$axios.post('user/resendVerification')
      this.resent = true
    },
    addToClipboard: function() {
      let copyText = document.querySelector("#copy")
      copyText.select()
      document.execCommand("copy")
      this.copied = true; 
    },
    resetPassword: async function() {
      try {
        await this.$axios.$post('/user/forgotPassword', {
          email: this.user.email
        })
        this.sentReset = true
      } catch (e) { console.log(e) }
    }
  }
}; 

</script>