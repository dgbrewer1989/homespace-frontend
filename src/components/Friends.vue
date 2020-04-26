<template>
  <div id="mainPage">
    <Topbar />
    <md-list>
      <!-- TODO: hook up -->
      Will show all friends that are friends with current account here 
    </md-list>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
export default {
    name: 'Friends',
    components: {
        Topbar
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

// https://alligator.io/vuejs/rest-api-axios/