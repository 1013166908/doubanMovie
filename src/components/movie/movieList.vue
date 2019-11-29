<template>
  <div class="movie-list">
    <div class="title">
      <h2>{{name}}</h2>
      <a href="javascript:;">更多</a>
    </div>
    <ul>
      <li v-for="(item,index) in list">
        <a @click="toContent(item.id)">
        <div class="img"><img :src="item.images.small" alt=""></div>
        <span>{{item.original_title}}</span>
        <div class="score" >
          <div v-if="item.rating.average>0">
            <img v-for="(item1,index1) in 5" :src="star(item.rating.average,2*(index1+1))" alt="">
            <div>{{item.rating.average}}</div>
          </div>
          <div v-else style="justify-content: center">暂无评分</div>
        </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"movieList",
    data(){
      return{
        list:[],
        getContent:{
          name:"movie",
          params:{
            movieId:"001",
          }
        }
      }
    },
    props:['url','name'],
    methods:{
      star(score,n){ //判断分数是否高于某个数
        if(score>=n) return '../../../static/images/star.png';
        else if(score>n-2)
              return '../../../static/images/star-half.png';
        else return '../../../static/images/star-grey.png';
      },
      toContent(routerName){
        this.$router.push({
          path:"/pages/movie-ifo/"+routerName,
        })
      }
    },
    mounted(){
      this.$http({
        url:this.url
      }).then(res=>{
        this.list=res.data.subjects;
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/movie-list";
</style>
