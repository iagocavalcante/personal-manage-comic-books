import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import Plugin from './service/Plugin'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import router from './router'
import './registerServiceWorker'

Vue.use(Vuesax)
Vue.use(Plugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
