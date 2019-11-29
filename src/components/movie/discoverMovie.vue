<template>
  <div class="discover">
    <div class="title">
      <h2>{{title}}</h2>
      <a href="javascript:;">更多</a>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in list">
          <a href="javascript:;" @click="toDoulist(index)" :style="item.style">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:"movieContent",
    data(){
        return{
            list:[
              {
                name:"同时入选IMDB250和豆瓣电影250的电影",
                style:'color: rgb(255, 172, 45)',
              },
              {
                name:"带你进入不正常的世界",
                style:"color: rgb(255, 172, 45)"
              },
              {
                name:"用电【影】来祭奠逝去的岁月",
                style:'color: rgb(79, 157, 237)',
              },
              {
                name:"女孩们的故事【电影】",
                style:'color: rgb(255, 196, 108)',
              },
              {
                name:"科幻是未来的钥匙——科幻启示录【科幻题材】",
                style:'color: rgb(35, 132, 232)',
              },
              {
                name:"美国生活面面观",
                style:'color: rgb(59, 169, 77)',
              },
              {
                name:"2015终极期待",
                style:'color: rgb(66, 189, 86)',
              },
              {
                name:"经典韩国电影——收集100部",
                style:'color: rgb(204, 51, 68)',
              },
            ],
        }
    },
    props:["title"],
    methods:{
        toDoulist(index){
            this.$router.push({
              path:"/doulist/"+index+"?start=0",
            });
        }
    }
  }
</script>

<style scoped lang="less">
  .discover{
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
    .list{
      overflow: auto;
      padding:9.6px 0;
    }
    ul{
      width:1150px;
      overflow: hidden;
      li{
        float: left;
        margin:0 0 9.6px 19.2px;
        a{
          display:block;
          height:60px;
          padding:0 28.8px;
          border:1px solid rgb(255, 172, 45);
          border-radius: 5px;
          line-height: 60px;
          font-size: 16px;
        }
      }
    }
  }
</style>
