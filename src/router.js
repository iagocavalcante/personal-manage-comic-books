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
      path: '/comic-book',
      name: 'comic-books',
      props: route => ({ //eslint-disable-line
        service: ComicBookService.build({})
      }),
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "comic-book" */ './domains/comic-books/container/ComicBooks.vue')
    }
  ]
})
