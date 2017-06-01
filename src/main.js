import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'  
import Axios from 'axios';
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element);
Vue.prototype.$http = Axios;
var vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})





