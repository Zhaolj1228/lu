import Vue from 'vue'
import Router from 'vue-router'
import Child1 from '../components/Child1'
import Child2 from '../components/Child2'
import Xi from '../components/Xi'
import Three from  '../components/Three'
import Foot from '../components/Foot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/child1',
      component:Child1,
      children:[
        {
          path:'xi'
          ,component:Xi,
          children: [
            {
              path:"three",
              component:Three,
              name:"three"
            }
          ]
        }
      ]
    },
    {
      path:'/child2',
      component:Child2
    },
    {
      path:'/foot',
      component:Foot
    }
  ]
})
