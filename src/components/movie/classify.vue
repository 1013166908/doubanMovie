<template>
  <div class="classify">
    <div class="title">
      <h2>分类浏览</h2>
      <a href="javascript:;">更多</a>
    </div>

    <ul>
      <li v-for="(item,index) in list" :style="index%2?'padding-left:19.2px':''">
        {{item}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default{
    name:"classify",
    data(){
      return{
        list:["经典","冷门佳片","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"]
      }
    },
  }
</script>

<style scoped lang="less">
  .classify{
    padding:12px 0 0;
    .title{
      display: flex;
      justify-content: space-between;
      padding: 0 19.2px;
      h2{
        line-height: 31.19px;
        font-size:16.8px;
        font-family: sans-serif;
        font-weight: normal;
      }
      a{
        display: block;
        color:#42bd56;
      }
    }
    ul{
      overflow: hidden;
      margin-left: 19.2px;
      margin-top: 19.2px;
      li{
        float: left;
        box-sizing: border-box;
        width: 50%;
        color:#42bd56;
        /*margin-left: -19.2px;*/
        padding-right: 21.6px;
        /*padding-left: 21.6px;*/
        height: 50.4px;
        line-height: 50.4px;
        font-size: 16px;
        border-top: 1.2px solid #eee;
        border-right: 1.2px solid #eee
      }
    }
  }
</style>
