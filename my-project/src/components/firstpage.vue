<template>
    <div>
        <router-view></router-view>
        <div class="foot">
            <router-link tag='div' to="/firstpage/sign">发现</router-link>
            <router-link tag="div" to="/firstpage/myly">账号</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Firstpage'
}
</script>

<style>
.foot{
    position: fixed;
    bottom:0;
    background:#fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
}
.foot>div{
    flex:1;
    text-align: center;
    line-height: 40px;
}
</style>
