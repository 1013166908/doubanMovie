<template>
  <div>
    <movie-list v-for="(item,index) in movieUrl" :url="item.url" :name="item.name" :key="index"></movie-list>
    <discover-movie :title="'发现好电影'"></discover-movie>
    <classify></classify>
    <download-footer :className="'download_1'"></download-footer>
  </div>
</template>

<script>
  import movieList from "@/components/movie/movieList"
  import discoverMovie from "@/components/movie/discoverMovie"
  import classify from "@/components/movie/classify"
  import downloadFooter from "@/components/downloadFooter"
  export default{
    name:"movie",
    data(){
        return {
          movieUrl:[
            {
              url:"https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10",
              name:"影院热映"
            },
            {
              url:"https://douban.uieee.com/v2/movie/top250?start=0&count=10",
              name:"免费在线观影"
            },
            {
              url:"https://douban.uieee.com/v2/movie/coming_soon",
              name:"新片速递"
            },
          ]
        }
    },
    components:{
      movieList,discoverMovie,classify,downloadFooter
    },
    mounted(){
    }
  }
</script>
