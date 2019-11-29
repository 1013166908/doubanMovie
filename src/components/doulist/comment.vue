<template>
  <div class="comment">
    <div v-if="movie.rating != undefined">
      <div class="left"><img :src="movie.images.small" alt=""></div>
      <div class="right">
        <h2>{{movie.title}}</h2>
        <div class="score">
          <img v-for="(item,index) in 5" :src="star(movie.rating.average,2*(index+1))" :key="index">
          <span>{{movie.rating.average}}</span>
        </div>
        <p><span v-for="(item,index) in movie.casts">{{item.name}}/</span><span>{{movie.pubdates[0]}}</span></p>
      </div>
    </div>
    <p>简介：{{movie.summary}}</p>
  </div>
</template>

<script>
  export default{
    name: "comment",
    props:["movieId"],
    data(){
        return {
            movie:{}
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
      this.$http({
        url:"https://douban.uieee.com/v2/movie/subject/"+this.movieId
      }).then(res=>{
        this.movie=res.data;
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/less/comment";
</style>
