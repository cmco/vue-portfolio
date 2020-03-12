import Vue from "vue";
import App from "./App.vue";
import VueTypedJs from "vue-typed-js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCarousel from "vue-carousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

Vue.use(VueCarousel);
Vue.use(VueTypedJs);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
AOS.init();

new Vue({
  render: h => h(App)
}).$mount("#app");
