import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import store from './store/store'
import Axios from 'axios';
import Vuex from 'vuex';
import router from './router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
//https://www.digitalocean.com/community/tutorials/how-to-set-up-vue-js-authentication-and-route-handling-using-vue-router
//https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
//https://medium.com/@imanhodjaev/handling-api-calls-in-vue-cf39747656ba

Vue.use(VueMaterial)
Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
