import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_error(state) {
      state.status = 'error'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://localhost:8081/users/authenticate', data: user, method: 'POST' })
          .then(resp => {
            const text = resp.data
            //TODO: update to actually get a token once complete.
            const token = resp.data
            // const user = resp.data.user
            localStorage.setItem('serverResponse', text)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', text, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    logout({commit}) {
      return new PromiseRejectionEvent((resolve, reject) => {
        commit('logout')
        //TODO: remove reject log once a workflow is set here
        //TODO: also inform the server that you've signed out
        console.log(reject)
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    createUser({commit}, userDetails) {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost:8081/users", userDetails)
          .then(resp => {
            resolve(resp)
          })
          .catch(function (error) {
            commit('create_account_error')
            reject(error)
          })
      })
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
  }
})

//https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
