<template>
  <div class="user">
    <div class="left">
      <div class="img"><img src="../../../static/images/head.jpg" alt=""></div>
      <span>请先登录</span>
    </div>
    <div class="right">
      <div><img src="../../../static/images/pencil.svg" alt=""></div>
      <div>
        <img src="../../../static/images/camera.svg" alt="">
      </div>
      </div>
  </div>
</template>

<script>
  export default{
    name:"borUser"
  }
</script>


<style scoped lang="less">
  .user{
    display: flex;
    justify-content: space-between;
    padding:28px 21.6px 12px;
    border-bottom: 1px solid #d8d8d8;
  }
  .left{
    display: flex;
    div{
      width:48px;
      height:48px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    span{
      display: block;
      padding-left: 12px;
      color:#aaa;
      font-size: 15px;
      line-height: 48px;
    }
  }
  .right{
    display: flex;
    div{
      margin-left: 9.6px;
      padding:9.6px;
      img{
        width:28.8px;
        height:28.8px;
      }
    }
  }
</style>
