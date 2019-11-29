<template>
  <div class="nav">
    <div class="left">
      <router-link to="index">
        <img src="../assets/images/logo.png" alt="">
        <h1>豆瓣</h1>
      </router-link>
    </div>
    <div class="right">
      <ul>
        <li><router-link to="/pages/movie" style="color:rgb(35, 132, 232);">电影</router-link></li>
        <li><router-link to="/pages/book" style="color:rgb(159, 120, 96);">图书</router-link></li>
        <li><router-link to="/pages/broadcast" style="color:rgb(228, 168, 19);">广播</router-link></li>
        <li><router-link to="/pages/group" style="color:rgb(42, 184, 204);">小组</router-link></li>
      </ul>
      <a href="javascript:;"><img src="../assets/images/search.png" alt=""></a>
    </div>

  </div>

</template>

<script>
  export default{
      name:"myNav"
  }
</script>

<style scoped lang="less">
  @import "../assets/less/nav";
</style>
