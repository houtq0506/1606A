<template>
  <div id="app">
    <!-- <button @click='login'>点击登录</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
const JSBridge=require('./utils/JSBridge.js')
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
    login(){
      JSBridge.invoke('app','login',{
        loginCallBackName:(res)=>{
          //console.log('res...',res)
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
