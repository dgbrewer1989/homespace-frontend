<template>
  <div id="Content">
    <div id="login">
      <Login />
    </div>
  </div>    
</template>

<script>
import Login from '@/components/Login'
export default {
    name: 'Content',
    components: {
      Login
    }
}
</script>

<style>
#Content {
  padding: 10px;
  background-color:blue;
  border: solid 1rem red;
}
#login {
}
</style>