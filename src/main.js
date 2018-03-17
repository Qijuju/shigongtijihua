import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Resource from 'vue-resource'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/style.css'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import './assets/css/common.css'
import  './assets/js/calendar.js'
import store from './store/index.js'
import RPM from './assets/js/r93535_mobile.js'
import config from './config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.prototype._GLOBAL = config
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(mint)
Vue.use(Resource)
Vue.use(Vuex)
Vue.use(RPM)
// Vue.use(config)

var bus = new Vue({})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,// 使用store
  render: h => h(App)
})
