import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import pages from '@/components/pages'
import movie from '@/components/movie/movie'
import movieContent from '@/components/movie/movieContent'
import book from '@/components/book/book'
import broadcast from '@/components/broadcast/broadcast'
import doulist from '@/components/doulist/doulist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pages',
      component:pages,
      // redirect:"/pages/movie"
      children:[
        {
          path: 'movie-ifo/*',
          component: movieContent
        },
        {
          path: 'movie',
          component: movie,
        },
        {
          path: 'book',
          component: book
        },
        {
          path: 'broadcast',
          component: broadcast
        },
        {
          path:"/pages",
          redirect:"/pages/movie"
        },
        {
          path:"*",
          redirect:'/pages/movie'
        }
      ]
    },
    {
      path: '/index',
      component: index
    },
    // {
    //   path: '/pages/movie-ifo/*',
    //   component: movieContent
    // },
    // {
    //   path: '/pages/movie',
    //   component: movie,
    // },
    // {
    //   path: '/pages/book',
    //   component: book
    // },
    // {
    //   path: '/pages/broadcast',
    //   component: broadcast
    // },
    {
      path: '/doulist/*',
      component: doulist
    },
    {
      path: '/doulist',
      component: doulist
    },
    {
      path:'*',
      redirect:"/pages/movie"
    }
  ]
})
