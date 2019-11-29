<template>
  <div class="doulist">
    <open-app></open-app>
    <div class="content" v-if="list[routerId]">
      <div class="intro">
        <h1>{{list[routerId].name}}</h1>
        <p class="info">熊孩子</p>
        <p>
          科幻启示录，收集豆瓣上的高分较热门科幻电影<br><br>

          关键字：机械、科幻、太空、时空、人工智能、基因、理论等
          备注（评语）为电影短评摘录（就是非我原创的），谢谢那些让我摘录的人儿。<br><br>

          【注：非常推荐以右下角“推荐”下面的“按编辑顺序观看“该豆列】<br><br>

          PS：转载我很荣幸，不过请注明出处和在下。<br><br>

          不定时更新，<br>
          建议收藏方便及时更新观看。

        </p>
        <footer>
          <div class="like"><img src="../../../static/images/xin00.png" alt=""><span>21918</span></div>
          <div>···</div>
        </footer>
      </div>
      <ul>
        <!--<li v-if="movieList[routerId]">-->
          <!--<comment :movieId="movieList[routerId].id"></comment>-->
        <!--</li>-->
        <li v-for="(item,index) in movieList" v-show="index>=(page-1)*6&&index<page*6">
          <comment :movieId="item.id" ></comment>
        </li>
      </ul>
      <div class="more">
        <p>查看更多豆列</p>
        <ul>
          <li v-for="(item,index) in more">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="page">
        <p>· {{page}} ·</p>
        <div>
          <button :class="page==1?'':'active'" @click="toPage(0)">上页</button>
          <button :class="page==2?'':'active' " @click="toPage(1)">下页</button>
        </div>
      </div>
    </div>
    <div class="null" v-else>未找到</div>
    <download-footer :className="'download_2'"></download-footer>
  </div>
</template>

<script>
  import openApp from "@/components/doulist/openApp";
  import comment from "@/components/doulist/comment";
  import downloadFooter from "@/components/downloadFooter";
  export default{
    name:"doulist",
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
        movieList:[],
        routerId:0,
        page:1,
        more:["电影","纪录片","奥斯卡","影人","电影截图"]
      }
    },
    components:{
        openApp,comment,downloadFooter
    },
    watch:{
      $route(to, from){
        //重新读取参数
        this.routerId=to.path.split("/")[2];
        if(this.$route.query.start){
          this.page=parseInt(this.$route.query.start)+1;
        } else this.page=1;
      },
    },
    mounted(){
      this.$http({
        url:"../../../static/json/newHotMovie.json"
      }).then(res=>{
        this.movieList=res.data.subjects;
      })
      //读取参数
      this.routerId=this.$route.path.split('/')[2];
      if(this.$route.query.start){
        this.page=parseInt(this.$route.query.start)+1;
      } else this.page=1;
    },
    methods:{
        toPage(index){
          this.$router.push({
            path:this.$route.path+"?start="+index,
          });
        }
    }

  }
</script>

<style lang="less" scoped>
  .null{
    font-size: 30px;
    padding:20px;
  }
  .content{
    margin:0 18px;
    .intro{
      margin:0 22px;
      h1{
        margin:30px 0 15px;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        color: #494949;
      }
      .info{
        margin:12px 0 15px;
        color: #494949;
        font-size: 15px;
        vertical-align: middle;
      }
      p{
        text-align: center;
        font-size: 12px;
        color: #494949;
      }
    }
    footer{
      display: flex;
      justify-content: center;
      margin:20px 0 25px;
      div{
        width:32px;
        border: solid 1px #42bd56;
        border-radius: 5px;
        background-color: #ffffff;
        line-height: 32px;
        text-align: center;
        color: #42bd56;
      }
      .like{
        width:111px;
        height:32px;
        margin-right: 5px;
        img{
          width:16px;
          height:15px;
          margin-right: 7px;
        }
      }
    }
    >ul{
      li{
        overflow: hidden;
        padding:20px 0;
        height:185px;
        border-bottom: 1px solid #e5e5e5;
      }
    }
    .more{
      margin: 30px 0;
      p{
        color: #818181;
        font-size: 15px;
        line-height: 22px;
        word-wrap: break-word;
      }
      ul{
        li{
          display: inline-block;
          margin: 10px 10px 0 0;
          font-size: 15px;
          a{
            font-size: 15px;
            line-height: 28px;
            padding: 0 12px;
            border-radius: 28px;
            text-align: center;
            color: #494949;
            background: #f5f5f5;
            display: block;
          }
        }
      }
    }
    .page{
      p{
        text-align: center;
        font-size: 16px;
        color: #494949;
      }
      >div{
        display: flex;
        .active{
          color: #494949;
        }
        button{
          padding: 1px;
          display: inline-block;
          font-size: 18px;
          width: 48%;
          height: 32px;
          line-height: 1.8;
          background-color: #F2F2F2;
          color:  #ccc;
          margin-top: 20px;
          margin-left: 2%;
          border: 1px solid #ccc;
          border-radius: 4px;
          text-align: center;
          vertical-align: middle;
        }
      }
    }
  }
</style>
