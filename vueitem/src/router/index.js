import Vue from 'vue'
import Router from 'vue-router'
import Child1 from '../components/Child1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/child1',
      component:Child1
    }
  ]
})
