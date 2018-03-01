<template>
  <div>
      <Navbar/>
      <br>
      <div class="container">
      <div class="row">
          <div class="col-md-6" v-for="article in articles" :key="article">
              <div class="card border-info mb-3" style="max-width: 20rem;">
            <div class="card-header">{{article.title}}</div>
            <div class="card-body">
                <h4 class="card-title">{{article.category}}</h4>
                <p class="card-text">{{article.content}}</p>
            <button type="button" class="btn btn-success">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
            </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      articles: [],
      title: '',
      content: '',
      category: ''
    }
  },
  created () {
      let arr = []
      this.$http.get('article/')
      .then(response => {
        //console.log(response.data.data)
        response.data.data.forEach(element => {
          arr.push({
              title: element.title,
              content: element.content,
              category: element.category
          })
        })
          //console.log(arr)
          this.articles = arr
      })
      .catch(err => {
          console.error(err)
      })
  },
  methods: {
    deleteArticle (id) {
    let token = localStorage.getItem('token')
    this.$http.delete(`article/delete/${id}`, {headers: {token: token}})
    .then(response => {
        this.articles.forEach((element, index) => {
            if(this.articles.id === id){
                this.articles.splice(index, 1)
            }
        })
    })
    }
  },
  components: {
      Navbar
  }
}
</script>

<style>

</style>
