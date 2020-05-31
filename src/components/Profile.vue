<template>
  <div id="Profile">
    <section v-if="errored">
      <p>Sorry, we're unable to load this profile.</p>
    </section>
    <section v-else>
      <div v-if="loading">
        Loading...
      </div>
      <div
        v-else
        class="ProfileCard"
      >
        <md-card>
          <md-card-media>
            <img
              src="../assets/avatar.png"
              alt="People"
            >
          </md-card-media>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">
                {{ this.profileInfo.user.firstName }} {{ this.profileInfo.user.lastName }}
              </div>
              <div class="md-subhead">
                {{ this.profileInfo.user.username }}
              </div>
            </md-card-header-text>
          </md-card-header>
        </md-card>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Profile',
    data() {
        return {
            errors: {
                type: Object,
            },
            profileInfo: {},
            errored: false,
            loading: true
        }
    },
    props: {
        error: {
            default: " ",
            type: String,
        },
        
    },
    created() {
      if(this.$route.params === null || Object.keys(this.$route.params).length === 0 || this.$router.params?.username === "") {
        this.$router.push("/")
      } else {
        this.fetchData()
      }
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
        setData(err, post) {
            if (err) {
                this.error = err.toString()
            } else {
                this.profileInfo = post.data
            }
        },
        fetchData() {
          this.loading = true
          axios.get(`http://localhost:8081/profile?username=` + this.$route.params.username)
        .then(response => {
            this.loading = false
            this.profileInfo = response.data
        })
        .catch(e => {
            console.log(e);
            this.errors.push(e)
            this.errored = true
        })
        }
    }
}
</script>

<style scoped>
.md-card {
    width: 200px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
#Profile {
   background-color:#E6E6FA;
   display: flex;
   justify-content: flex-start;
}
</style>