import Vue from 'vue'
import App from './App'
import router from '../../router'
import store from '../../store'
import Mint from 'mint-ui';
import VueCookie from 'vue-cookie'

import '../../assets/css/reset.css'
import '../../assets/css/font-awesome.css'
import '../../assets/css/border.css'
import 'mint-ui/lib/style.css'



Vue.config.productionTip = false

Vue.use(Mint);
Vue.use(VueCookie);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
