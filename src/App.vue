<template>
  <div id="app">
    <md-app>
      <md-app-toolbar>
        <Topbar />
      </md-app-toolbar>
      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
export default {
  name: 'App',
  components: {
    Topbar,
  }
}
</script>

<style>
html,body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#ffe5cb;
}
</style>
