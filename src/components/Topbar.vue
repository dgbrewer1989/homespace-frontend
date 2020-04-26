<template>
    <div id="topBar">
        <router-link :to="{ name: 'MainPage'}">Home</router-link>
        <router-link :to="{ name: 'Friends' }">Friend list</router-link>
        <router-link :to="{ name: 'AllFriends' }">All Friend list</router-link>
        <!-- TODO: Optional if signed in. if not signed in, give "sign in" -->
        <a href="" @click="logout()">Sign out</a>
    </div>    
</template>

<script>
export default {
    name: 'Topbar',
    methods: {
        logout() {
            this.$router.push({ name: 'Logout'})
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