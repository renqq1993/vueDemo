<template>
    <div style="padding: 0 15px" @click="toggleClick">
       <svg-icon icon-class="fold" class="humberger" :class="{'is-active':isActive}"/>
    </div>
</template>

<script>
export default {
    name:"Hamburger",
    props:{
        isActive: {
            type:Boolean,
            default:false
        }
    },
    methods:{
        toggleClick(){
            this.emit("toggleClick");
        }
    }
}
</script>

<style>
    .humberger{
        height:40px;
        width:40px;
        display: inline-block;
    }
    .humberger.is-active{
        transform: rotate(180)
    }
</style>


