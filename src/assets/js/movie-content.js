/**
 * Created by Administrator on 2019/10/7.
 */
export default{
  name:"movieContent",
  data(){
    return{
      name:"影院热映",
      list:[],
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
      url:"/static/json/hotMovie.json"
    }).then(res=>{
      console.log(res.data);
      this.list=res.data.subjects;
    })
  }
}
