<template>
    <div>
         <sidebar/> 
        <navbar/>
        <app-main></app-main>
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

