<template>
  <div class="dialog">
    <div class="left">
      <div><img src="../../../static/images/douban.png" alt=""></div>
    </div>
    <div class="right">
      <p class="title">
        <span class="name">豆瓣</span>
        <span>写了日记</span>
      </p>
      <p class="time">2017-03-01 19:30:41</p>
      <div>
        <h4>豆瓣App 4.12.0 主要更新</h4>
        <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
      </div>
      <footer>
        <div class="interactive">
          <div><i><img src="../../../static/images/zan.svg" alt=""></i><span>4</span></div>
          <div><i><img src="../../../static/images/ping.svg" alt=""></i><span>0</span></div>
          <div><i><img src="../../../static/images/hui.svg" alt=""></i><span>1</span></div>
        </div>
        <div class="more"></div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default{
    name:"borDialog"
  }
</script>


<style scoped lang="less">
  @import "../../assets/less/bro-dialog";
</style>
