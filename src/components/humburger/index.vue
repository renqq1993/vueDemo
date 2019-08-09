<template>
    <div style="padding: 0 15px"  @click="toggleClick">
       <svg-icon icon-class="fold" class="humberger" :class="{'is-active':sidebar.opened}"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:"Hamburger",
    data(){
        return {
            isActive:false
        };
    },
     computed: {
    ...mapGetters([
      'sidebar',
    ])
  },
    methods:{
        toggleClick(){
            this.$store.dispatch('app/toggleSideBar')
        }
    }
}
</script>

<style scoped>
.humberger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.humberger.is-active {
   transform:rotate(90deg);
   -ms-transform:rotate(90deg); /* IE 9 */
   -webkit-transform:rotate(90deg); /* Safari and Chrome */
}
</style>


