<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Hello</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" style="">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" @click="gotoCreate">Create Article <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Logout</a>
    </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    createArticle () {
        let token = localStorage.getItem('token')
        this.$http.post('article/create', {
            title: this.title,
            content: this.content,
            category: this.category
        },{headers: {token: token}})
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err)
        })
    },
    gotoCreate () {
        this.$router.push('/create_article')
    }
  }
}
</script>

<style>

</style>
