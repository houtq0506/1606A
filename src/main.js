import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import { Picker,Popup,Toast,Area } from 'vant';
import echarts from "echarts"

Vue.use(Area);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Picker)
Vue.prototype.echarts = echarts;
new Vue({
  el: '#app',
  store,
  echarts,
  router,
  render: h => h(App)
})
