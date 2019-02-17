<template>
<form class="mt-3 w-95 mx-auto" @submit.prevent="resetPassword"> 
<h2> Reset your Password </h2>
<label for="password"> New Password </label>
<input 
  name="password" 
  v-model="input.newPassword" 
  type="password" 
  class="form-control mb-3" 
  placeholder="Password" 
  required
/>

<label for="inputConfirm"> Confirm New Password </label>
<input 
  name="password" 
  type="password" 
  class="form-control mb-3" 
  v-model="input.confirm" 
  placeholder="Confirm Password" 
  required
/>

<div class="btn btn-primary" @click="resetPassword">Change Password</div>
</form>
</template>
<script>
export default {
  async asyncData({ params }) {
    let token = params.token
    return {
      input: {
        newPassword: '',
        confirm: ''
      }, 
      token: token
    }
  }, 
  methods: {
    resetPassword: async function() {
      if (this.input.confirm == this.input.newPassword) {
        await this.$axios.post('/user/resetPassword/' + this.token, {
          newPassword: this.input.newPassword
        })
        this.$router.push('/login')
      }
    }
  }
}
</script>