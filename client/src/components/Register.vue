<template>
  <div>
      Enter your username and password to register
      <form action="">
          <h3>Username: <input type="text" v-model="username"></h3>
          <h3>Password: <input type="password" v-model="password"></h3>
      </form>
      <button type="submit" @click="register">Register</button>
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
    register () {
      this.$http.post('users/signup', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          localStorage.setItem('token', response.data.token)
          console.log(response.data)
          this.$router.push('/mainpage')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style>

</style>
