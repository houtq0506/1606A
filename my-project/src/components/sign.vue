<style>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.firs{
    width: 100%;
    height: 100%;
}
.top{
    width: 100%;
    height: 40px;
    display: flex;
     background:#33383b;
}
.mk{
    width:60px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size:22px;
}
.cen{
   flex:1;
   position: relative;
  
}
.ss{
    position: absolute;
    top:13px;
    left:30%;
    color:#787c7d;
    
}
.cen>input{
    width:95%;
    height: 25px;
    border:solid 1px #ccc;
    border-radius: 8px;
    text-align: center;
    margin-top: 7px;
     background:#32373a;
     color:#787c7d;
}
.ph{
    width:70px;
     text-align: center;
     line-height: 40px;
     font-size:22px;
     color: #fff;
}
.nav{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    background: #32373a;
    color: #fff;
    justify-content: space-around;
}
</style>
<template>
    <div class="firs">
        <div class="top">
            <i class="mk iconfont icon-maikefeng"></i>
           <div class="cen">
               <i class="ss iconfont icon-sousuo1"></i>
               <input type="text" placeholder="猜你喜欢">
           </div>
           <i class="ph iconfont icon-PCbofangye_paihangbang"></i>
        </div>
        <div class="nav">
            <router-link to='/sign/self' tag='div'>个性推荐</router-link>
            <router-link to='/sign/anch' tag='div'>主播电台</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import '../assets/font/iconfont.css'
export default {
    name:'Sign'
}
</script>
