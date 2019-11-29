<template>
  <div class="book-paper">
    <div class="left">
      <img src="../../../static/images/book.jpg" alt="">
    </div>
    <div class="right">
      <div>
        <h3>造物</h3>
        <span>￥68</span>
      </div>
      <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"bookPaper",
  }
</script>

<style scoped lang="less">
  .book-paper{
    display: flex;
    padding:0 21.6px 28.8px 19.2px;
    .left{
      width:120px;
      height:180px;
      margin-right: 18px;
      img{
        width:120px;
      }
    }
    .right{
      >div{
        display: flex;
        justify-content: space-between;
        margin:12px 12px 12px 0;
        h3{
          color:#494949;
          font-size: 20px;
        }
        span{
          display: block;
          font-size: 16px;
          color:#e76648;
        }
      }
      p{
        margin: 13px 0;
        color:#9b9b9b;
        font-size: 13px;
        line-height: 19px;
      }

    }
  }
</style>
