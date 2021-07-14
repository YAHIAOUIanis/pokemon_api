import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue} from 'bootstrap-vue';
import SortedTablePlugin from "vue-sorted-table";


import VueRouter from 'vue-router'
import Routes from './Routes'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(SortedTablePlugin)
Vue.use(VueRouter)

const router = new VueRouter ({
  routes: Routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
