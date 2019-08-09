<template>
    <div>
        <i class="el-icon-location"></i>
        <span slot="title">{{title}}</span>
    </div>
</template>
<script>
export default {
    name:"ItemContent",
   props:{
       title:{
           type:String,
           default:"",
       },
       icon:{
           type:String,
           default:""
       }
   }
}
</script>

