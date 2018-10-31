import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import Plugin from './service/Plugin'
import router from './router'
import './registerServiceWorker'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css' //Vuesax styles
import 'font-awesome/css/font-awesome.css'

Vue.use(Vuesax)
Vue.use(Plugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
