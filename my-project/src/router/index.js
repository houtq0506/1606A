import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import Enroll from '../components/enroll'
import Sign from '../components/sign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
      component:Login
    },
    {
      path:'/enroll',
      name:'Enroll',
      component:Enroll
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },{
      path:'/sign',
      name:'Sign',
      component:Sign
    }
    
  ]
})
