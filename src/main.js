import Vue from 'vue';
import App from './App';
import api from './api/index';
Vue.config.productionTip = false;
import businessItem from './components/businessItem/index.vue'
import messageItem from './components/messageItem/index.vue'
Vue.component('messageItem',messageItem);
Vue.component('businessItem',businessItem);
Vue.prototype.$api = api;
App.mpType = 'app';
const app = new Vue({
  ...App
})
app.$mount()
