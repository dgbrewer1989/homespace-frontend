<template>
  <div id="topBar">
    <router-link :to="{ name: 'MainPage'}">
      Home
    </router-link>
    <router-link :to="{ name: 'AllFriends' }">
      All Friend list
    </router-link>
    <!-- TODO: Optional if signed in. if not signed in, give "sign in" -->
    <section v-if="isLoggedIn()">
      <a
        href=""
        @click="logout()"
      >Logout</a>
    </section> 
    <section v-else>
      <router-link :to="{ name: 'Login'}">
        Login
      </router-link>
    </section>
  </div>    
</template>

<script>
export default {
    name: 'Topbar',
    methods: {
        logout() {
            this.$router.push({ name: 'Logout'})
        },
        isLoggedIn() {
          return this.$store.getters.isLoggedIn;
        }
    }
}
</script>

<style>
#topBar {
    display:flex;
    justify-content: center;
}
a {
    padding-left: 10px;
}
</style>