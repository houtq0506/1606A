import Vue from 'vue';
import VueRouter from 'vue-router'
import {getToken} from '../utils/index'
import {getLogin} from '../api/index'
import Car from '../component/car'
import Data from '../component/data'

Vue.use(VueRouter)
//引入路由组件
import Music from '../component/music'
import Pack from '../component/pack'
import Wbo from '../component/wbo'
import Adress from '../component/adress'
import Check from '../component/check'
import Accom from '../component/accom'
import Index from '../page/index'
import Cart from '../component/cart'
const router=new VueRouter({
    routes:[{
        path:'/index',
        component:Music
    },{
        path:'/',
        redirect:'/cart'
    },{
        path:'/indexs',
        component:Index
    },{
        path:'/cart',
        component:Cart
    },
    {
        path:'/car',
        component:Car
    },
    {
        path:'/data',
        component:Data
    },
    {
        path:'/pack',
        redirect:'/pack/adress',
        component:Pack,
        children:[{
            path:'/pack/wbo',
            component:Wbo
        },{
            path:'/pack/adress',
            component:Adress
        },{
            path:'/pack/check',
            component:Check
        },{
            path:'/pack/accom',
            component:Accom
        }]
    }
]
})
//跳转之前
router.beforeEach((to,from,next)=>{
    if (getToken()){
        next();
      }else{
        getLogin()
    }
})
// //跳转之后
router.afterEach((to,after)=>{

})
export default router