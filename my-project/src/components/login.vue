<template>
    <div class="wrap">
         <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3215804841,2810938819&fm=58&bpow=1024&bpoh=1024" alt=""/>
             <router-link to="/enroll" tag="div" class="enr">手机号登录</router-link>
             <router-link to='/sign' tag="div" class="sig">注册</router-link>
    </div>
</template>

<script>

export default {
    name:'Login',
    data(){
        return{
          
        }
    },
    methods:{

    }
}
</script>

<style>
   .wrap{
       width: 100%;
       height: 100%;
       overflow: hidden;
       position: relative;
   }
   .wrap>img{
       width: 75px;
       height: 75px;
       position: absolute;
       left:50%;
       margin-left: -38px;
       top:100px;
   }
   .enr{
        width: 70%;
       height: 30px;
       border:solid 1px red;
       margin:0 auto;
       border-radius: 10px;
       line-height: 30px;
       text-align: center;
   }
   .sig{
       width: 70%;
       height: 30px;
       border:solid 1px red;
       margin:20px auto;
       border-radius: 10px;
       line-height: 30px;
       text-align: center;
   }
</style>
