import Vue from 'vue'
import Router from 'vue-router'
import Home from './domains/Home.vue'
import ComicBookService from './domains/comic-books/service/ComicBooks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/comic-books',
      name: 'comic-books',
      props: route => ({ //eslint-disable-line
        service: ComicBookService.build({url: '/comic-book'})
      }),
      component: () => import(/* webpackChunkName: "comic-book" */ './domains/comic-books/container/ComicBooks.vue')
    }
  ]
})
