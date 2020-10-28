import Vue from 'vue'
import App from './App.vue'
import viewdetail from './components/viewdetail.vue'
import Home from './components/Home.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import {routes} from './routers'
Vue.config.productionTip = false
Vue.use(VueRouter);
const router=new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  viewdetail,
  Home,
}).$mount('#app')
