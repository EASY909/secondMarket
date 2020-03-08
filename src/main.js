import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  "./icon"
import "./registerServiceWorker";
import animated from 'animate.css'
//全局属性
import common from './api/common';
//全局方法
import global from "./utils/global"

Vue.prototype.BaseUrl=common;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(global);
Vue.use(animated);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
