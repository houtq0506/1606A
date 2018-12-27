import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import Enroll from '../components/enroll'
import Sign from '../components/sign'
import Self from '../components/self'
import Anch from '../components/anch'

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
      component:Sign,
      children:[{
        path:'/sign/self',
        name:'Self',
        component:Self
      },{
        path:'/sign/anch',
        name:'Anch',
        component:Anch
      }]
    }
    
  ]
})
