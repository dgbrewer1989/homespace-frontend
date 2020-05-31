import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import AllFriends from '../components/AllFriends'
import Profile from '../components/Profile'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'

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
    component: Profile //TODO: < fix that. Shouldn't be pointed to profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/create',
    name: 'CreateAccount',
    component: CreateAccount
  }
]

const router = new VueRouter({
  routes
})

export default router
