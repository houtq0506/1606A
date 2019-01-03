import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入路由组件
import Music from '../component/music'
const router=new VueRouter({
    routes:[{
        path:'/index',
        component:Music
    },{
        path:'*',
        redirect:'/index'
    }]
})
export default router