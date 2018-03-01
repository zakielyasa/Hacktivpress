<template>
  <div>
      <form action="">
          <h3>Title: <input type="text"></h3>
          <h3>Category: <input type="text"></h3>
          <h3>Content: <textarea name="" id="" cols="30" rows="10"></textarea></h3>
      </form>
      <button type="submit">Create Article</button>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style>

</style>
