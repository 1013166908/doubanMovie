<template>
  <div id="app">
    <!--<pages></pages>-->
    <router-view></router-view>
  </div>
</template>

<script>
import pages from '@/components/pages'
export default {
  name: 'App',
  components:{
      pages
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width:494.39px;
  margin:0 auto;
  text-decoration:none;
}
a{
  text-decoration:none;
}
*{
  margin:0;
  padding:0;
  list-style: none;
  font-family: sans-serif;
  font-weight: normal;
}
</style>
