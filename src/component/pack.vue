<template>
    <div class="wraps">
        <ul class="uls">
           <li><Router-link to='/pack/wbo'>订单提交</Router-link></li>
           <li><Router-link to='/pack/adress'>填写收货地址</Router-link></li>
           <li><Router-link to='/pack/check'>正在办理</Router-link></li>
           <li><Router-link to='/pack/accom'>办理完成</Router-link></li>
        </ul>
        <div class="box">
            <router-view></router-view> 
        </div>
    </div>
</template>

<script>
export default {
    name:'pack'
}
</script>

<style>
*{
    list-style: none;
    padding: 0;
    margin: 0;
}
   .wraps{
       width: 100%;
       height: 100%;
   }
   .uls{
       width: 100%;
       height: 40px;
       display: flex;
       align-items: center;
       font-size: 14px;
   }
   .uls>li{
       flex:1;
       text-align: center;
   }
</style>
