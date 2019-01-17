<style lang="less" scoped>

form {
  @media (min-width: 992px) { width: 45%; }
  label {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
  }
}

</style>

<template>
  <form @submit.prevent="signUp" class="mx-auto mx-md-0 w-90 pl-md-5">
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

    <div class="mb-3">
      <input type="checkbox" required name="terms">
        I agree to the 
        <nuxt-link 
          to="terms" 
          target="_blank"
        > Terms and Conditions
        </nuxt-link>
    </div>

    <div 
    v-if="message" 
    :class="'d-block alert alert-' + (error ? 'danger' : 'success')"
    >
      {{ message }}
    </div>

    <button type="submit" class="btn btn-primary">Sign Up</button>

  </form>

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
        name: ""
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
          name: this.input.name
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
            // this.$store.dispatch('auth/fetchUser')
          }
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


