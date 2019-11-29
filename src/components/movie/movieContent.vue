<template>
    <div>
      <banner></banner>
      <div class="movie-content" v-if="movieIfo.title">
        <h1>{{movieIfo.title}}</h1>
        <!--<h1>{{movieIfo.title}}</h1>-->
        <div class="content">
          <div class="left">
            <div class="score">
                <div v-if="movieIfo.rating.average>0" class="star">
                  <img :src="star(movieIfo.rating.average,2)" alt="">
                  <img :src="star(movieIfo.rating.average,4)" alt="">
                  <img :src="star(movieIfo.rating.average,6)" alt="">
                  <img :src="star(movieIfo.rating.average,8)" alt="">
                  <img :src="star(movieIfo.rating.average,10)" alt="">
                  <span>{{movieIfo.rating.average}}</span>
                </div>
                <div v-else style="justify-content: center">暂无评分</div>
                <div>{{movieIfo.collect_count}}人评价</div>
              </div>
            <p>
              <span>{{movieIfo.pubdates[0].substring(0,4)}}/</span>
              <span v-for="item in movieIfo.genres"> {{item}} /</span>
              <span v-for="item in movieIfo.directors"> {{item.name}} /</span>
              <span>{{movieIfo.pubdates[0].slice(11,-1)}}</span>
            </p>
            <a href="#">用App查看影人资料</a>
          </div>
          <div class="right">
            <img :src="movieIfo.images.small" alt="">
          </div>
        </div>
        <div class="marking">
          <a href="#">想看</a><a href="#">看过</a>
        </div>
        <div class="introduce">
          <h2>{{movieIfo.title}}的简介</h2>
          <p>{{movieIfo.summary}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  import list1 from "../../../static/json/hotMovie.json"
  import list2 from "../../../static/json/newMovie.json"
  import list3 from "../../../static/json/onlineMovie.json"
  import banner from "@/components/banner"
  export default{
    name:"movieContent",
    data(){
      return{
        id:0,
        movieIfo:{},
        i:0,
        j:0,
      }
    },
    methods:{
      star(score,n){ //判断分数是否高于某个数
        if(score>=n) return '../../../static/images/star.png';
        else if(score>n-2)
          return '../../../static/images/star-half.png';
        else return '../../../static/images/star-grey.png';
      },
    },
    mounted(){
      this.id=this.$route.path.split("/")[3];
      this.$http({
        url:"https://douban.uieee.com/v2/movie/subject/"+this.id
      }).then(res=>{
//        console.log(res);
        this.movieIfo=res.data;
      })
    },
    components:{
        banner
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/movie-content";
</style>
