import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.config.productionTip = false

import VueHolder from 'vue-holderjs';
Vue.use(VueHolder);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
