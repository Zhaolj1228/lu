import Vue from 'vue'
import Router from 'vue-router'
import Child1 from '../components/Child1'
import Child2 from '../components/Child2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/child1',
      component:Child1
    },
    {
      path:'/child2',
      component:Child2
    }
  ]
})
