<template>
  <div id="createAccount">
    <form
      @submit.prevent="processForm"
      novalidate
      class="md-layout"
    >
      <md-card class="md-layout-item md-size-30 md-small-size-20">
        <md-card-header>
          <div class="md-title">
            Create account
          </div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-30">
              <md-field class="first-name">
                <label for="create-first-name">First name</label>
                <md-input
                  name="firstname"
                  id="create-first-name"
                  v-model="form.firstName"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.firstname.required"
                >The first name is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-30">
              <md-field class="last-name">
                <label for="create-last-name">Last name</label>
                <md-input
                  name="lastname"
                  id="create-last-name"
                  v-model="form.lastName"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.lastname.required"
                >The last name is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-30">
              <md-datepicker
                class="birthday"
                name="birthday"
                v-model="form.birthday"
              >
                <label>Select date</label>
                <span
                  class="md-error"
                  v-if="!$v.form.birthday.required"
                >The birthday is required</span>
              </md-datepicker>
            </div>
            <div class="md-layout-item md-small-size-30">
              <md-field class="username">
                <label for="create-user-name">Username</label>
                <md-input
                  name="username"
                  id="create-user-name"
                  v-model="form.username"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.username.required"
                >The username is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-30">
              <md-field class="password">
                <label for="create-password">Password</label>
                <md-input
                  name="password"
                  id="create-password"
                  type="password"
                  v-model="form.password"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.password.required"
                >The password is required</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button
            type="submit"
            class="md-primary"
            :disabled="sending"
          >
            Create account
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
  maxLength,
} from 'vuelidate/lib/validators'

export default {
    name: 'CreateAccount',
    mixins: [validationMixin],
    data: () => ({
        form: {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            birthday: null,
        },
        sending: false
    }),
    validations: {
      form: {
        password: {
          required,
          minLength: minLength(3)
        },
        username: {
          required,
          email,
          maxLength: maxLength(12)
        },
        firstname: {
          required,
          minLength: minLength(3)
        },
        lastname: {
          required,
          minLength: minLength(3)
        },
        birthday: {
          required
        }
      }
    },
    methods: {
      processForm() {
        this.$store.dispatch('createUser', {
          username: this.form.username,
          password: this.form.password,
          birthday: this.form.birthday,
          lastName: this.form.lastName,
          firstName: this.form.firstName})
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
      }
    }
}
</script>

<style>
#createAccount {
}

.md-layout {
  display: flex;
  justify-content: center;
}
</style>