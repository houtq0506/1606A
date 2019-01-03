import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
