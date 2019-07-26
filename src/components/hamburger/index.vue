<template>
    <div style="padding: 0 15px" @click="toggleClick">
        <svg-icon icon-class="fold" />
    </div>
</template>

<script>
export default {
    name:"Hamburger",
    props:{
        isActive: {
            typd:Boolean,
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

