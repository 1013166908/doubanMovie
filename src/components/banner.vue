<template>
  <div class="banner">
    <div class="content">
      <p>打开App，浏览更多</p>
      <div>
        <button>极速下载</button>
        <button>打开</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      name:"banner"
  }
</script>


<style scoped>
  .banner{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../../static/images/broadcast-banner.jpg");
    background-size:100%;
    height:80px;
  }
  .content{
    width:341.41px;
    display: flex;
    justify-content: space-between;
  }
  p{
    padding-left: 21.6px;
  }
</style>
