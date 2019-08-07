<template>
    <div>
        <div class="sideBar">
             <sidebar/>
        </div>
        <div class="content-container">
             <div class="header">
                <navbar/>
            </div>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'
export default {
    name:"Layout",
    components:{
        Navbar,
        Sidebar,
        AppMain
    }

}
</script>
<style  lang="scss" scoped>
    @import "~@/styles/variables.scss";
    .header{
        position: relative;
        height:50px;
        overflow:hidden;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        background-color: #fff;
        width: calc(100% - #{$sideBarWidth});
    }
    .sideBar{
        transition: width 0.28s;
        width: 210px !important;
        background-color: #304156;
        height: 100%;
        position: fixed;
        font-size: 0px;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }
    .content-container{
        position: absolute;
        left:210px;
        height:100%;
        width: calc(100% - #{$sideBarWidth});
        margin-top: 0%;
    }
</style>


