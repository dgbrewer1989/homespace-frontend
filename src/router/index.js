import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import AllFriends from '../components/AllFriends'
import Profile from '../components/Profile'
import Login from '../components/Login'

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
    path: '/:username',
    name: 'Profile',
    component: Profile,
    props: true
  },
  {
    path: '/signOut',
    name: 'Signout',
    component: Profile
  },
  //TODO: ^ fix that. Shouldn't be pointed to profile
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

  //TODO: this all needs fixed. Needs logout and probably more routes that were lost.
  
  
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
