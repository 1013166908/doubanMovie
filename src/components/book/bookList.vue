<template>
  <div>
    <h2>{{name}}</h2>
    <a href="">更多</a>
  </div>
</template>

<script>
  export default {
    name:"bookList",
    props:["name"]
  }
</script>

<style scoped>
  div{
    display: flex;
    justify-content: space-between;
    height:31.39px;
    padding:12px 19.2px 19.2px;
    font-family: sans-serif;
    line-height: 31px;
  }
  h2{
    color:#111;
    font-size: 16.8px;
    font-weight: normal;
  }
  a{
    display:block;
    color:#42bd56;
    font-size: 14.4px;
  }
</style>
