<template>
  <div id="Content">
    <div id="loginPage">
      <LoginPage />
    </div>
  </div>    
</template>

<script>
import LoginPage from '@/components/Login'
export default {
    name: 'Content',
    components: {
      LoginPage
    }
}
</script>

<style>
#Content {
  padding: 10px;
  background-color:blue;
  border: solid 1rem red;
}
#loginPage {
}
</style>