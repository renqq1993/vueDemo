import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* Layout */
import Layout from '@/page/Layout'


Vue.use(Router)

export default new Router({
  
  routes: [
    // {
     
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Form',
          component: () => HelloWorld,
        }
      ]
    },
  ]
})
