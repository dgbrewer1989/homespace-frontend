<template>
  <div id="mainPage">
    <md-list>
      <md-list-item
        v-for="(friend, id) of friends"
        :key="id"
        @click="viewProfile(friend.user.username)"
      >
        <md-avatar>
          <img
            src="../assets/avatar.png"
            alt="People"
          >
        </md-avatar>
        <span class="md-list-item-text">{{ friend.user.firstName }} {{ friend.user.lastName }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AllFriends',
    data() {
        return {
            friends: []
        }
    },
    created() {
        axios.get(`http://localhost:8081/profile/all`)
        .then(response => {
        // JSON responses are automatically parsed.
        this.friends = response.data
        })
        .catch(e => {
        this.errors.push(e)
    })
    },
    methods: {
        viewProfile(username) {
            this.$router.push({ name: 'Profile', params: { username: username }})
        }
    }        
}
</script>

<style>
    .md-list {
        width: 320px;
        max-width: 100%;
        display: inline-block;
        vertical-align: top;
        border: 1px solid rgba(#000, .12);
    }
</style>