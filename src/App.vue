<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

article {
  margin-bottom: 20px;
}
</style>
