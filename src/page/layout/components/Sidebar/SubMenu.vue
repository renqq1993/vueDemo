<template>
    <div v-if="!item.hidden">
        <div v-if="hasChildren">
            <el-submenu :index="url">
                <template slot="title">
                       <item-content :title="meta.title" :icon="meta.icon"></item-content>
                </template>
                 <submenu v-for="route in childrenArray" :key="route.path" :item="route" :basePath="url"></submenu>
            </el-submenu>
        </div>
         <div v-else>
            <item-link :to="url">
                <el-menu-item :index="url">
                    <item-content :title="meta.title" :icon="meta.icon"></item-content>
                </el-menu-item>
            </item-link>
         </div>
    </div>
</template>
<script>
import ItemContent from './ItemContent';
import ItemLink from './Link';
export default {
    name:"Submenu",
    props:{
        basePath:{
            type:String,
            default:"",
        },
        item:{
            type:Object,
            default:{},
        },
    },
    data(){
        return {
            hasChildren:false,
            childrenArray:[],
            meta:{},
            url:"",

        }
    },
    created(){
        this.childrenArray = this.item.children;
        if(this.childrenArray != undefined && this.childrenArray.length == 1 && this.item.meta == undefined){
            this.meta = this.childrenArray[0].meta;
            if(this.item.path == "/"){
                 this.url = this.item.path + this.childrenArray[0].path;
            }
            else if(this.item.path == "external-link"){
                this.url = this.childrenArray[0].path;
            }
            else{
                this.url = this.item.path + "/" + this.childrenArray[0].path;
            }
            this.hasChildren = false;
        }else if(this.childrenArray != undefined && this.childrenArray.length > 0){
            this.meta = this.item.meta;
            if(this.basePath == ""){
                 this.url = this.item.path;
            }
            else{
                this.url = this.basePath + "/" + this.item.path;
            }
            this.hasChildren = true;
        }
        else{
            this.url = this.basePath + "/" + this.item.path;
            this.meta = this.item.meta;
            this.hasChildren = false;
        }
    },
    components:{
        ItemContent,
        ItemLink
    }
}
</script>
<style>
a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
    color: white;
    text-decoration: none;
}
 a:focus, a:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}
</style>


