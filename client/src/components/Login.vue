<template>
  <div>
    VVelcome
      <form action="">
          <h3>Username: <input type="text" v-model="username"></h3>
          <h3>Password: <input type="password" v-model="password"></h3>
      </form>
      <button type="submit" @click="login">Login</button>
      <h6>Not a user? Register <a @click="goToRegister">here</a></h6>
      <h6>Click <a @click="goToMainPage">here</a> to go straight to Home</h6>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$http.post('users/login', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          console.log(response.data.token)
          localStorage.setItem('token', response.data.token)
          this.$router.push('/mainpage')
        })
        .catch(err => {
          console.error(err)
          this.$router.push('/')
        })
    },
    goToRegister () {
      this.$router.push('/register')
    },
    goToMainPage () {
      this.$router.push('/mainpage')
    }
  }
}
</script>

<style>

</style>
