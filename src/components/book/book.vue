<template>
  <div>
    <book-list v-for="(item,index) in name" :name="item" :key="index"></book-list>
    <book-paper></book-paper>
  </div>
</template>

<script>
  import bookList from "@/components/book/bookList"
  import bookPaper from "@/components/book/bookPaper"
  export default{
    name:"book",
    data(){
      return {
          name:["最受关注图书 | 虚构类","最受关注图书 | 非虚构类","豆瓣纸书"]
      }
    },
    components:{
        bookList,bookPaper
    }
  }
</script>
