<template>
  <div>
    <banner></banner>
    <bro-user></bro-user>
    <bro-dialog v-for="(item,index) in list" :key="index"></bro-dialog>
  </div>
</template>

<script>
  import banner from "@/components/banner"
  import broUser from "@/components/broadcast/broUser"
  import broDialog from "@/components/broadcast/broDialog"
  export default{
    name:"broadcast",
    data(){
        return {
            list:[0,0,0,0,0,0,0,0]
        }
    },
    components:{
        banner,broUser,broDialog
    }
  }
</script>
