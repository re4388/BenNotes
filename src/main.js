import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import ApiService from "./common/api.service";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap';
import './custom.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



Vue.config.productionTip = false
ApiService.init();

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
