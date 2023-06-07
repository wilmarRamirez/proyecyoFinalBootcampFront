import Vue from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')






