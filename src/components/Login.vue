<template>
  <div id="login">
    <form
      novalidate
      class=""
      @submit.prevent="login"
    >
      <md-card class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card-header>
          <div class="md-title">
            Sign in
          </div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field class="username">
                <label for="login-user-name">Username</label>
                <md-input
                  v-model="username"
                  name="login-user-name"
                  id="login-user-name"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.username.required"
                >The username is required</span>
                <!-- if more fields are required, add them here -->
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field class="password">
                <label for="login-password">Password</label>
                <md-input
                  v-model="password"
                  name="login-password"
                  id="login-password"
                  type="password"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.password.required"
                >The password is required</span>
                <!-- if more fields are required, add them here -->
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button
            class="md-primary"
            @click="createAccount()"
          >
            Sign up
          </md-button>
          <md-button
            type="submit"
            class="md-primary"
          >
            Sign in
          </md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>    
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
  } from 'vuelidate/lib/validators'


export default {
    name: 'Login',
    mixins: [validationMixin],
    data() {
        return {
            username: "",
            password: ""
        }
    },
    validations: {
      form: {
        password: {
          required,
          minLength: minLength(3)
        },
        username: {
          required,
          email
        }
      }
    },
    methods: {
        login: function() {
            let username = this.username
            let password = this.password
            this.$store.dispatch('login', {username, password})
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        },
        createAccount() {
            this.$router.push({ name: 'CreateAccount'})
        }
    }
}
</script>

<style>
#login {
}
</style>