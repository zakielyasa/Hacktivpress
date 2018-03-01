import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import MainPage from '@/components/MainPage'
import CreateArticle from '@/components/CreateArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/create_article',
      name: 'create article',
      component: CreateArticle
    }
  ]
})
