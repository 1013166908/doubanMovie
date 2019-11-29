<template>
  <div class="open">
    <div class="left">
      <img src="../../../static/images/douban.png" alt="">
      <div>
        <h2>豆瓣App</h2>
        <p>记录你的书影音生活</p>
      </div>
    </div>
    <div class="right">
      <a href="">打开App</a>
    </div>
  </div>
</template>

<script>
  export default{
    name:"openApp"
  }
</script>

<style lang="less" scoped>
  .open{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:60px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
    padding: 0 18px;
    .left{
      display: flex;
      img{
        width:39px;
        height:39px;
        margin-right: 10px;
      }
      h2{
        font-size: 15px;
        line-height: 21px;
        color: #191919;
      }
      p{
        font-size: 11px;
        line-height: 16px;
        color: #818181;
      }
    }
    .right{
      a{
        display: block;
        width: 80px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        font-size: 13px;
        line-height: 30px;
        background-color: #42bd56;
        color: #fff;
      }
    }
  }
</style>
