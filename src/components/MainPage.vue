<template>
  <div id="mainPage">
      <Topbar />
      <Content />
      <LoginPage />
  </div>
</template>

<script>
import LoginPage from '@/components/Login'
import Topbar from '@/components/Topbar'
import Content from '@/components/Content'

export default {
  name: 'MainPage',
  components: {
    LoginPage,
    Topbar,
    Content
  }
}
</script>

<style scoped>
#mainPage {
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: #ffe5cb;
}
</style>
