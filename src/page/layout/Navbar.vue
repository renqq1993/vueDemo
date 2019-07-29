<template>
  <div class="navbar">
     <humburger></humburger>
  </div>
</template>
<script>
import humburger from '@/components/hamnurger';
export default{
  components:{
    humburger
  }
}
</script>
<style lang="less">
  .navbar{
    height:50px;
    background-color: #fff;
    box-shadow: 1px,1px,5px,#888888;
    position: relative;
  }
</style>


