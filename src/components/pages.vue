<template>
  <div class="pages">
    <!--页面-->
    <my-nav></my-nav>
    <router-view/>
  </div>
</template>

<script>
  import myNav from '@/components/myNav'
  export default {
    name:"pages",
    components:{
      myNav
    }
  }
</script>

<style>
  .pages{
    padding-top: 58.78px;
  }
</style>
