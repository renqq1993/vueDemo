<template>
    <div>
        <el-menu
      :default-active="activeMenu()"
      class="el-menu-vertical-demo"
      background-color="#304156"
      :collapse="sidebar.opened"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="false">
        <Submenu v-for="route in routes" :key="route.path" :item="route"></Submenu>
    </el-menu>
    </div>
</template>
<script>
// el-menu default-active是为了浏览器刷新后，仍然可以定位到之前选中的路由。
import Submenu from "./SubMenu";
import { mapGetters } from 'vuex'
export default {
    name: "Sidebar",
    computed:{
         ...mapGetters([
            'sidebar',
        ]),
        routes(){
            return this.$router.options.routes;
        },
    },
    components:{
        Submenu
    },
    methods:{
        activeMenu(){
            const route = this.$route;
            return route.path;
        }
    }
    
}
</script>


