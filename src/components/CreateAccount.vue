<template>
    <div id="createAccount">
        <form novalidate class="md-layout">
            <md-card class="md-layout-item md-size-30 md-small-size-20">
                <md-card-header>
                    <div class="md-title">Create account</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-30">
                            <md-field class="first-name">
                                <label for="create-first-name">First name</label>
                                <md-input name="create-first-name" id="create-first-name" />
                                <span class="md-error" v-if="!$v.form.firstname.required">The first name is required</span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-30">
                            <md-field class="last-name">
                                <label for="create-last-name">Last name</label>
                                <md-input name="create-last-name" id="create-last-name" />
                                <span class="md-error" v-if="!$v.form.lastname.required">The last name is required</span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-30">
                            <md-datepicker class="birthday" v-model="birthday">
                                <label>Select date</label>
                                <span class="md-error" v-if="!$v.form.birthday.required">The birthday is required</span>
                            </md-datepicker>
                        </div>
                        <div class="md-layout-item md-small-size-30">
                            <md-field class="username">
                                <label for="create-user-name">Username</label>
                                <md-input name="create-user-name" id="create-user-name" />
                                <span class="md-error" v-if="!$v.form.username.required">The username is required</span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-30">
                            <md-field class="password">
                                <label for="create-password">Password</label>
                                <md-input name="create-password" id="create-password" type="password" />
                                <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>

                <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending">Create account</md-button>
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
    name: 'CreateAccount',
    mixins: [validationMixin],
    data: () => ({
        form: {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            birthday: "",
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
          email
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
}
</script>

<style>

</style>