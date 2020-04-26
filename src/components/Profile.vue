<template>
  <div id="Profile">
    <Topbar />
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

      <!-- <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
            </md-card-actions> -->
    </md-card>
  </div>
</template>

// TODO: there is a console warning on this page that needs fixed
<script>
import Topbar from '@/components/Topbar'
import axios from 'axios'
export default {
    name: 'Profile',
    data() {
        return {
            errors: {
                type: Object,
            }
        }
    },
    components: {
        Topbar,
    },
    props: {
        username: {
            type: String,
            required: true,
        },
        profileInfo: {
            default: "",
            type: String,
        },
        error: {
            default: "",
            type: String,
        },
        
    },
    beforeRouteEnter (to, from, next) {
        axios.get(`http://localhost:8081/profile?username=` + to.params.username)
        .then(response => {
            // JSON responses are automatically parsed.
            next(vm => (vm.setData('', response)))
        })
        .catch(e => {
            console.log(e);
        // this.errors.push(e)
        })
        
    },
    beforeRouteUpdate(to, from, next) {
        this.profileInfo = null
        axios.get(`http://localhost:8081/profile?username=` + to.params.username)
        .then(response => {
            // JSON responses are automatically parsed.
            this.setData('', response)
            next()
        })
        .catch(e => {
            console.log(e);
        // this.errors.push(e)
        })
        
    },
    methods: {
        setData(err, post) {
            if (err) {
                this.error = err.toString()
            } else {
                this.profileInfo = post.data
            }
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
</style>