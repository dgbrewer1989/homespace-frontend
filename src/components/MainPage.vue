<template>
  <div id="mainPage">
    Main Page here
    <section v-if="!isLoggedIn()">
      <Login />
    </section> 
    <section v-else>
      Signed in
    </section>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'MainPage',
  components: {
    Login
  },
  methods: {
    isLoggedIn() {
          return this.$store.getters.isLoggedIn;
        }
  }
}
</script>

<style scoped>
#mainPage {
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: #f8d7bf;
}
</style>
