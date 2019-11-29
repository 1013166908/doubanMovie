<template>
  <div :class="className">
    <div>
      <div class="img">
        <img src="../../static/images/douban.png" alt="">
      </div>
      <div>
        <h4>豆瓣</h4>
        <p>我们的精神角落</p>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>
  export default{
    name:"downloadFooter",
    props:["className"]
  }
</script>

<style scoped lang="less">
  .download_1{
    margin:60px 0 36px;
    height:86px;
    padding-bottom: 20px;
    text-align: center;
    >div{
      display: flex;
      justify-content: center;
      text-align: left;
      .img{
        width:57.59px;
        height:57.59px;
        margin-right: 14.4px;
        img{
          width:100%;
        }
      }
      >div{
        margin-bottom: 15px;
        h4{
          font-size: 24px;
          line-height: 31px;
        }
        p{
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
    a{
      color: #42bd56;
      font-size: 15px;
    }
  }
  .download_2{
    margin:60px 0 36px;
    height:86px;
    padding-bottom: 20px;
    text-align: center;
    >div{
      display: flex;
      justify-content: center;
      text-align: left;
      .img{
        width:48px;
        height:48px;
        margin-right: 14.4px;
        img{
          width:100%;
        }
      }
      >div{
        margin-bottom: 15px;
        h4{
          font-size: 24px;
          line-height: 48px;
        }
        p{
          display: none;
        }
      }
    }
    a{
      color: #42bd56;
      font-size: 15px;
    }
  }
</style>
