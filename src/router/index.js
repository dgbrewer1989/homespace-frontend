import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import AllFriends from '../components/AllFriends'
import Friends from '../components/Friends'
import Profile from '../components/Profile'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/allFriends',
    name: 'AllFriends',
    component: AllFriends
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signOut',
    name: 'Signout',
    component: Profile
  }

  //TODO: this all needs fixed. Needs logout, unauthorized setup for Friends, and probably more routes that were lost.
  
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
