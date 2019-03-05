<style lang="less" scoped>

form {
  label {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
  }
}

ul {
  list-style: square;
}

</style>

<template>
<div class="mx-auto w-95 mb-5 row"> 
  <div class="why col">
    <h2 class="mt-4"> Why sign up? </h2>
    <p> When you sign up for a RaceBase account, you get these great benefits: </p>
    <ul> 
      <li> <strong>Profile customization</strong>, allowing you to claim results as your own, add photos and stories, and more </li>
      <li> Access to our tried and true <strong>Logging</strong> system </li>
      <li> <strong>Race Feed</strong>, where you can see the results and workouts of people you care about </li>
      <li> According to our independent study, signing up reduces your risk of getting eaten by a flying spaghetti monster by up to <strong>30%</strong></li>
    </ul>
  </div>
  <div class="signup col">
    <form @submit.prevent="signUp">
      <h2 class="mt-4 mb-3">Sign Up</h2>

      <label for="inputName"> Name </label>
      <input 
        name="name" 
        type="text" 
        class="form-control mb-3" 
        v-model="input.name" 
        placeholder="Name" 
        required
      />

      <label for="inputEmail"> Email </label>
      <input 
        type="email" 
        v-model="input.email" 
        name="email" 
        class="form-control mb-3" 
        placeholder="Email" 
        required autofocus
      />

      <label for="inputPassword"> Password </label>

      <input 
        name="password" 
        v-model="input.password" 
        type="password" 
        class="form-control mb-3" 
        placeholder="Password" 
        required
      />

      <label for="inputConfirm"> Confirm Password </label>
      <input 
        name="password" 
        type="password" 
        class="form-control mb-3" 
        v-model="input.confirm" 
        placeholder="Confirm Password" 
        required
      />

      <label for="referralCode"> Referral Code (Optional) </label>
      <input 
        name="referralCode" 
        type="text" 
        class="form-control mb-3" 
        v-model="input.referralCode" 
        placeholder="Referral Code" 
      />

      <div class="mb-3">
        <input type="checkbox" required name="terms">
          I agree to the 
          <nuxt-link 
            to="terms" 
            target="_blank"
          > Terms and Conditions
          </nuxt-link>
      </div>

      <div>
        Are you a coach? 
        <label class="form-check-label mb-3">
          <input 
            v-model="input.coach" 
            :value="true" 
            type="radio"
            name="coach"
          /> Yep! &nbsp; 

          <input 
            v-model="input.coach" 
            :value="false" 
            type="radio"
          /> No
        </label>
      </div>

      <div 
      v-if="message" 
      :class="'d-block alert alert-' + (error ? 'danger' : 'success')"
      >
        {{ message }}
      </div>

      <button type="submit" class="btn btn-primary">Sign Up</button>

    </form>
  </div>
</div>
</template>

<script>

export default {
  head () {
    return {
      title: "Sign Up - RaceBase", 
      meta: [{
        hid: "OpenGraph Image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/signup.png'
      }]
    }
  },
  data () {
    return {
      input: {
        email: "",
        password: "", 
        confirm: "",
        name: "", 
        referralCode: "", 
        coach: false
      },
      message: false,
      error: false
    }
  }, 
  methods : {
    signUp: function() {
      if (this.input.confirm == this.input.password) {
        this.$axios.post('user', { 
          email: this.input.email, 
          password: this.input.password, 
          name: this.input.name, 
          referralCode: this.input.referralCode, 
          coach: this.input.coach
        }).then(async (res) => {
          if (res.data.error) {
            this.error = true
            this.message = res.data.error
          } else {
            this.error = false
            this.message = "Successfully signed up."
            let x = await this.$store.dispatch('auth/login', {
              email: this.input.email, 
              password: this.input.password
            })
            if (this.input.coach)
              this.$router.push('/signup/coach/claim')
            else
              this.$router.push('/signup/claim')
          }
        }).catch((e) => {
          this.error = true
          this.message = e.response.data
        })
      }
      else {
        this.error = true
        this.message = "Passwords don't match."
      }
    }
  }
}

</script>


